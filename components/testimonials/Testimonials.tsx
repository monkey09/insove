import testimonials from '@/public/img/testimonials/img.png'
import Image from 'next/image'
import { Slider } from '..'

export const Testimonials = () => {
  const items = [
    {
      message: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque voluptas unde at ut delectus possimus aliquam placeat incidunt omnis. Pariatur dolorem iste ratione hic dolores cumque similique voluptate aliquam.',
      writter: 'james rodrigo',
      type: 'customer'
    },
    {
      message: 'dolor sit amet consectetur adipisicing elit. Officia, distinctio. Exercitationem animi sequi nulla fugiat voluptas quae veritatis beatae? Aperiam cumque eius corrupti earum ab, laudantium excepturi veniam adipisci amet.',
      writter: 'john doe',
      type: 'doctor'
    },
  ]
  
  return (
    <section className="bg-[url('/img/testimonials/bg.svg')] bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-4 xl:flex-row">
          <div className="hidden xl:flex">
            <Image src={testimonials} alt="testimonials" />
          </div>
          <div className="max-w-[98%] xl:max-w-[710px]">
            <Slider view={1}>
              {items.map((item, i) => (
                <div key={i} className="h-full flex flex-col justify-center items-start mb-[50px]">
                  <div className="max-w-[680px] mx-auto text-center xl:text-left">
                    <p className="font-light relative text-[22px] text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-[url('/icons/testimonials/quote-left.svg')] before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-[url('/icons/testimonials/quote-right.svg')] after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7">
                      <span className="mx-2">{item.message}</span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      {item.writter}
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}