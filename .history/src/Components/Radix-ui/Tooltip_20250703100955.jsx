import * as Tooltip from "@radix-ui/react-tooltip"

export default function MyToolTip({children, text}) {
    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="text-white bg-indigo-400 w-36 rounded p-3 transform duration-300" sideOffset={5}>
                        {text}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}