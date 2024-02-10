import bg from '@/public/img/newsletter/bg.svg'
import pattern from '@/public/img/newsletter/pattern.svg'
import Image from 'next/image'

export const News = () => {
  return (
    <section className="bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden">
      <div className="absolute left-0 bottom-0">
        <Image src={pattern} alt="pattern" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
              our newsletter
            </div>
            <h1 className="h1 mb-4 text-white capitalize">
              subscribe to get more updates
            </h1>
          </div>
          <form className="flex-1">
            <div className="flex flex-col md:flex-row relative gap-y-4">
              <input 
                type="text" 
                placeholder="Your email address"
                className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
              />
              <button className="btn btn-lg btn-white md:absolute right-0 bottom-0">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}