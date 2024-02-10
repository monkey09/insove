import Image from "next/image"
import hero from '@/public/img/hero/img.png'
import { RiHeartPulseLine } from "@remixicon/react"

export const Hero = () => {
  return (
    <section className="bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          <div className="xl:w-[48%] text-center xl:text-left">
            <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              <RiHeartPulseLine className="inline text-accent" size="1.5rem" />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                live your life
              </div>
            </div>
            <h1 className="h1 mb-6">we care about your health</h1>
            <p className="mb-[42px] md:max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, illum maiores. Ex tenetur minus quia, aliquam sunt mollitia iure reiciendis totam inventore eum quo nemo nisi vel architecto tempora expedita!
            </p>
            <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
              contact us
            </button>
          </div>
          <div className="hidden xl:flex maw-w-[814px] self-end">
            <Image src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}