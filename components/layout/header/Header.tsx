import { RiMapPinFill, RiPhoneFill } from "@remixicon/react"
import Image from "next/image"
import logo from '@/public/img/header/logo.svg'
import Link from "next/link"

export const Header = () => {
  return (
    <header id="home" className="py-8 lg:pt-6 lg:pb-14 bg-white">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-10">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <RiMapPinFill className="text-accent" />
            <div className="text-secondary">123 Arling, Miola, NY</div>
          </div>
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <RiPhoneFill className="text-accent" />
            <div className="text-secondary">(+487) 384 9452</div>
          </div>
          <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Book now
          </button>
        </div>
      </div>
    </header>
  )
}