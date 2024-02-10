import { ReactNode } from "react"
import { RiArrowDownSLine } from "@remixicon/react"

export const Select = ({children}: {children: ReactNode}) => {
  return (
    <div className="relative flex select items-center border-accent">
      <div className="absolute right-4">
        <RiArrowDownSLine className="text-[26px] text-primary" />
      </div>
      <select className="appearance-none outline-none h-full w-full bg-transparent px-4">
        {children}
      </select>
    </div>
  )
}