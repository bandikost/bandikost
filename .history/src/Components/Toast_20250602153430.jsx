import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import '../App.css'
import s from "../Styles/Profile.module.css"
import useUserById from "../Hooks/useUserById";



export default function MyToast() {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const { user, isLoading } = useUserById(id);

  useEffect(() => {
   const timer = setTimeout(() => {
    setOpen(true)
   }, 2000) 

   return () => clearTimeout(timer)
  }, [])

   if (isLoading || !user) return null;

   

  return (
    <Toast.Provider swipeDirection="right">

      <Toast.Root duration={3000} open={open} onOpenChange={setOpen} className={`${s.toast} bg-blue-500 text-white p-4 rounded shadow`}>
        <Toast.Title className="font-bold">Уведомление от содателя!!!</Toast.Title>
        <Toast.Description>Это сообщение именно для тебя: <span className="underline font-bold">{user.name}</span></Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50" />
    </Toast.Provider>
  );
}
