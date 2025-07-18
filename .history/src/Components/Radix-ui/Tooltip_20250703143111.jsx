import * as Tooltip from "@radix-ui/react-tooltip"
import "../../Styles/global.css"

export default function MyToolTip({children, text, className = "w-24"}) {
    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={`text-white bg-indigo-400 text-for-sups sm:text-xs z-10 rounded p-3 ${className}`} sideOffset={10}>
                        {text}
                        <Tooltip.Arrow className="TooltipArrow"/>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}