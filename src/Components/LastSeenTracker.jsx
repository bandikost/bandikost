import React, { useState, useEffect, useCallback } from "react";
import { formatDistanceToNow } from "date-fns";

const MY_IP = "5.166.144.144"; // Укажи свой IP

const LastSeenTracker = () => {
  const [lastSeen, setLastSeen] = useState(null);
  const [userIP, setUserIP] = useState("");

  // Функция получения IP
  const fetchIP = async () => {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Ошибка при получении IP:", error);
      return null;
    }
  };

  // Получение времени последнего визита (мемоизировано с useCallback)
  const getLastSeenTime = useCallback(async () => {
    const ip = await fetchIP();
    if (!ip) return;

    setUserIP(ip);

    if (ip === MY_IP) {
      const savedTime = localStorage.getItem("lastSeenMyIP");
      if (savedTime) {
        setLastSeen(savedTime);
      }
    }
  }, []);

  // Обновление времени последнего визита (мемоизировано с useCallback)
  const updateLastSeen = useCallback(async () => {
    const ip = await fetchIP();
    if (!ip) return;

    setUserIP(ip);

    if (ip === MY_IP) {
      const now = new Date().toISOString();
      localStorage.setItem("lastSeenMyIP", now);
      setLastSeen(now);
    }
  }, []);

  useEffect(() => {
    getLastSeenTime();
    updateLastSeen();

    const interval = setInterval(updateLastSeen, 60 * 1000); // Обновляем раз в минуту
    return () => clearInterval(interval);
  }, [getLastSeenTime, updateLastSeen]); // Теперь useEffect не ругается

  return (
    <div>
      {userIP === MY_IP ? (
        <p>
          {lastSeen
            ? `Я был в сети ${formatDistanceToNow(new Date(lastSeen), { addSuffix: true })}`
            : "Определение времени..."}
        </p>
      ) : (
        <p>Этот IP не отслеживается</p>
      )}
    </div>
  );
};

export default LastSeenTracker;
