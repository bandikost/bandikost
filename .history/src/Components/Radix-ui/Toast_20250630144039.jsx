import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";


export default function MyToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
   const timer = setTimeout(() => {
    setOpen(true)
   }, 2000) 

   return () => clearTimeout(timer)
  }, [])


  return (
    <Toast.Provider swipeDirection="right">

      <Toast.Root duration={4000} open={open} onOpenChange={setOpen} className="bg-blue-500 text-white p-4 rounded shadow">
        <Toast.Title className="font-bold">Уведомление от содателя!!!</Toast.Title>
        <Toast.Description>Это сообщение именно для тебя:</Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-50" />
    </Toast.Provider>
  );
}
