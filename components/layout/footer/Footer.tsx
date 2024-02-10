import logo from '@/public/img/header/logo.svg'
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiMailFill, RiMapPinFill, RiPhoneFill, RiTwitterFill } from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = ({links}: {links: string[]}) => {
  const links2 = ['our pricing', 'contact', 'careers', 'faqs', 'privacy policy']
  return (
    <footer className="pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="flex-1">
            <Link href="/">
              <Image className="mb-[30px]" src={logo} alt="logo" />
            </Link>
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facere!
            </p>
            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <RiMapPinFill className="text-accent" size="24px" />
                <div>123 Arling, Miola, NY</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <RiMailFill className="text-accent" size="24px" />
                <div>insove@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <RiPhoneFill className="text-accent" size="24px" />
                <div>(+123) 456 78910</div>
              </div>
            </div>
            <div className="flex gap-[14px]">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <RiFacebookCircleFill size="30px" />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <RiInstagramLine size="30px" />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <RiTwitterFill size="30px" />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <RiLinkedinBoxFill size="30px" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="h4 mb-5">quick links</h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex flex-col gap-y-5 capitalize">
                {links.map((item, i) => (
                  <li key={i}>
                    <Link href="/" className="hover:text-accent transition-all">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex-1 flex flex-col gap-y-5 capitalize">
                {links2.map((item, i) => (
                  <li key={i}>
                    <Link href="/" className="hover:text-accent transition-all">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="h4 mb-5">opening hours</h4>
            <div className="divide-y-2 *:py-4 [&>*:first-child]:pt-0">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>Monday - Thursday</div>
                  <div className="text-accent font-medium">
                    8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>Friday - Saturday</div>
                  <div className="text-accent font-medium">
                    10:00 AM - 4:00 PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>Sunday</div>
                  <div className="text-accent font-medium">
                    Emergency Only
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>Personal</div>
                  <div className="text-accent font-medium">
                    7:00 PM - 9:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; {new Date().getFullYear()} Insove - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}