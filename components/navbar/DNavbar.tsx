import { ReactNode } from "react"

export const DNavbar = ({children}: {children: ReactNode}) => {
  return (
    <div className="sticky top-[50px] z-20">
      <div className="absolute -top-[32px] w-full">
        <nav className="desktop-navbar group hidden lg:flex items-center bg-white container mx-auto shadow-custom1 h-16 rounded-[10px] lg:px-[50px]">
          <div className="flex *:flex justify-between w-full">
            {children}
          </div>
        </nav>
      </div>
    </div>
  )
}