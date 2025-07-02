import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import {lastUpdated} from "../Arrays/films"
import { X } from "lucide-react";

export default function MyToast(film) {
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
   }, 1000) 

   return () => clearTimeout(timer)
  }, [])


  return (
    <Toast.Provider swipeDirection="right">

      <Toast.Root duration={10000} open={open} onOpenChange={setOpen} className="bg-indigo-400 text-white p-4 rounded shadow">
        <Toast.Title className="font-bold w-72 sm:w-64 h-8">Последнее обновление фильма:</Toast.Title>
        <Toast.Description className="center-flex flex-col">
          <p>Категория: {films.lastTitle}</p>
          <p className="underline">{formattedDate}</p>
          </Toast.Description>
         <Toast.Close asChild><button aria-label="Закрыть" className="absolute top-3 right-3 text-white hover:text-gray-200 transition bg-gray-900 border-1 rounded-full">
        <X className="w-4 h-4" /> 
      </button></Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50" />
    </Toast.Provider>
  );
}
