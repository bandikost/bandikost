import * as Tooltip from "@radix-ui/react-tooltip"
import { useEffect, useState } from "react"

export default function MyToolTip({ children, text, className = "w-24" }) {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleClick = () => {
    if (isMobile) {
      setOpen((prev) => !prev)
    }
  }

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root open={isMobile ? open : undefined} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild onClick={handleClick}>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`text-white bg-indigo-400 text-for-sups sm:text-xs z-10 rounded p-3 ${className}`}
            sideOffset={10}
          >
            {text}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
