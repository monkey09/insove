import icon1 from '@/public/icons/services/icon-1.svg'
import icon2 from '@/public/icons/services/icon-2.svg'
import icon3 from '@/public/icons/services/icon-3.svg'
import icon4 from '@/public/icons/services/icon-4.svg'
import Image from 'next/image'

export const Services = () => {
  const items = [
    {
      icon: icon1,
      title: 'general practitioners',
      description: 'amet consectetur adipisicing elit. Dignissimos sint quasi deleniti'
    },
    {
      icon: icon2,
      title: 'pregnancy support',
      description: 'amet consectetur adipisicing elit. Dignissimos sint quasi deleniti'
    },
    {
      icon: icon3,
      title: 'nutritional support',
      description: 'amet consectetur adipisicing elit. Dignissimos sint quasi deleniti'
    },
    {
      icon: icon4,
      title: 'pharmaceutical care',
      description: 'amet consectetur adipisicing elit. Dignissimos sint quasi deleniti'
    },
  ]
  return (
    <section>
      <div className="bg-[url('/img/services/bg.svg')] bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              our best services for your solution
            </h2>
            <p className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint quasi deleniti, quam voluptate provident temporibus eos libero voluptatibus ex eius quibusdam vel distinctio delectus ullam quia deserunt. Nam, deleniti!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          {items.map((item, i) => (
            <div key={i} className="bg-white py-[30px] px-[40px] rounded-[10px] shadow-custom2 flex flex-col items-center text-center">
              <div className="mb-[15px]">
                <Image src={item.icon} alt={item.title} />
              </div>
              <h3 className="h3 mb-[10px]">{item.title}</h3>
              <p className="font-light leading-normal max-w-[300px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}