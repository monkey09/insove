'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine } from "@remixicon/react"

export const MNavbar = ({links}: {links: string[]}) => {
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
        <ul>
          {links.map((item, i) => (
            <li key={i}>
              <Link href={`#${item}`} className="text-secondary hover:text-accent transition-all duration-300 capitalize">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <form className="relative flex gap-x-[10px]">
          <label htmlFor="mnav-search-input">
            <RiSearchLine className="text-2xl text-accent" />
          </label>
          <input 
            id="mnav-search-input" 
            type="text"
            placeholder="search..."
            className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic "
          />
        </form>
      </div>
    </nav>
  )
}