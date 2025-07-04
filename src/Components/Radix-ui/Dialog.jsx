import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';


export default function ModalExample({ text, className, title, children, onSubmit }) {

  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) {
      const result = await onSubmit(e);

      if (result !== false) {
        setOpen(false);
      }
    }
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={`${className}`}>
        {text}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 w-[90vw] max-w-md">
          <Dialog.Title className="text-lg font-semibold mb-2">{title}</Dialog.Title>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-gray-600">
              {children}
            </div>

            <div className="flex justify-between items-center">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="absolute top-[-15px] right-[-5px] border border-indigo-200 px-2.5 py-1 rounded-full bg-white text-gray-500 hover:text-black"
                  aria-label="Close"
                >
                  ✕
                </button>
              </Dialog.Close>

              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:opacity-60 transition-colors duration-200"
              >
                Отправить
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
