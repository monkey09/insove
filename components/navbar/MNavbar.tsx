'use client'
import Link from "next/link"
import Image from "next/image"
import { ReactNode, useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"

export const MNavbar = ({children}: {children: ReactNode}) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${open ? 'left-0' : '-left-[300px]'} w-[300px] lg:hidden fixed h-screen top-0 bg-white shadow-2xl transition-all duration-300 z-20`}>
      <div 
        onClick={() => setOpen(prev => !prev)}
        className={`${open ? '-right-full' : 'left-[300px]'} bg-accent cursor-pointer w-8 h-8 relative top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg transition-all`}
      >
        {open ? (
          <RiArrowLeftSLine className="text-2xl text-white" />
        ) : (
          <RiArrowRightSLine className="text-2xl text-white" />
        )}
      </div>
      <div className="px-12 flex flex-col gap-y-12 h-full">
        <Link href="/">
          <Image src="/img/header/logo.svg" width="150" height="100" alt="logo" />
        </Link>
        {children}
      </div>
    </nav>
  )
}