import { Popover } from "@headlessui/react"
import { Icon } from "./styles"

export function Notifications() {
    return (
        <Popover className="h-6">
            <Popover.Button>
                <Icon />
            </Popover.Button>
            <Popover.Panel className="absolute w-[250px] max-h-[130px] min-h-[60px] mt-3 p-2 bg-zinc-700 rounded-md overflow-auto resize-none scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin">
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
                <p className="text-xs mb-1">Hello World!</p>
            </Popover.Panel>
        </Popover>
    )
}