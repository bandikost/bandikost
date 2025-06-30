import * as Tooltip from "radix-ui/react-tooltip"

export default function MyToolTip({children, text}) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}