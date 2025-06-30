import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import {lastUpdated} from "../Arrays/films"

export default function MyToast() {
  const [open, setOpen] = useState(false);
    const formattedDate =  new Date(lastUpdated).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })


  useEffect(() => {
   const timer = setTimeout(() => {
    setOpen(true)
   }, 2000) 

   return () => clearTimeout(timer)
  }, [])


  return (
    <Toast.Provider swipeDirection="right">

      <Toast.Root duration={4111000} open={open} onOpenChange={setOpen} className="bg-blue-500 text-white p-4 rounded shadow">
        <Toast.Title className="font-bold w-72">Последнее обновление фильма:</Toast.Title>
        <Toast.Description className="center-flex">{formattedDate}</Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50" />
    </Toast.Provider>
  );
}
