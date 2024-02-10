import Link from "next/link"
import { RiSearchLine } from "@remixicon/react"

export const NavbarLinks = ({links}: {links: string[]}) => {
  return (
    <>
      <ul className="group-[.desktop-navbar]:divide-x">
        {links.map((item, i) => (
          <li key={i} className="group-[.desktop-navbar]:px-4 group-[.desktop-navbar]:xl:px-8 group-[.desktop-navbar]:first:pl-0">
            <Link 
              href={`#${item}`}
              className="text-secondary hover:text-accent transition-all duration-300 capitalize"
            >
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
          className="outline-none w-[160px] group-[.desktop-navbar]:focus:w-[200px] transition-all border-b-2 focus:border-b-2 focus:border-accent placeholder:italic duration-150"
        />
      </form>
    </>
  )
}