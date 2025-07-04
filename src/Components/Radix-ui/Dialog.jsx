import * as Dialog from '@radix-ui/react-dialog';


export default function ModalExample({ text, className, title, children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={`${className}`}>
        {text}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-6 w-[90vw] max-w-md">
          <Dialog.Title className="text-lg font-semibold mb-2">{title}</Dialog.Title>
          <Dialog.Description className="mb-4 text-gray-600">
            {children}
          </Dialog.Description>

          <div className="flex justify-end space-x-2">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Закрыть
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close"
            >
        
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
