import Image from "next/image"
import doctor1 from '@/public/img/team/doctor-1.png'
import doctor2 from '@/public/img/team/doctor-2.png'
import { Slider } from ".."
import Link from "next/link"
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiYoutubeFill } from "@remixicon/react"

export const Teams = () => {
  const items = [
    {
      image: doctor1,
      description: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque voluptas unde at ut delectus possimus aliquam placeat incidunt omnis. Pariatur dolorem iste ratione hic dolores cumque similique voluptate aliquam.',
      doctor: 'Dr.Leslie Taylor',
      jop: 'pediatrician',
      socials: [
        <RiYoutubeFill />,
        <RiFacebookCircleFill />,
        <RiInstagramFill />,
        <RiPinterestFill />
      ]
    },
    {
      image: doctor2,
      description: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque voluptas unde at ut delectus possimus aliquam placeat incidunt omnis. Pariatur dolorem iste ratione hic dolores cumque similique voluptate aliquam.',
      doctor: 'Dr.Zachary Brown',
      jop: 'cardiologist',
      socials: [
        <RiYoutubeFill />,
        <RiFacebookCircleFill />,
        <RiInstagramFill />,
        <RiPinterestFill />
      ]
    },
    {
      image: doctor1,
      description: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque voluptas unde at ut delectus possimus aliquam placeat incidunt omnis. Pariatur dolorem iste ratione hic dolores cumque similique voluptate aliquam.',
      doctor: 'Dr.Leslie Taylor',
      jop: 'pediatrician',
      socials: [
        <RiYoutubeFill />,
        <RiFacebookCircleFill />,
        <RiInstagramFill />,
        <RiPinterestFill />
      ]
    },
    {
      image: doctor2,
      description: 'lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eaque voluptas unde at ut delectus possimus aliquam placeat incidunt omnis. Pariatur dolorem iste ratione hic dolores cumque similique voluptate aliquam.',
      doctor: 'Dr.Zachary Brown',
      jop: 'cardiologist',
      socials: [
        <RiYoutubeFill />,
        <RiFacebookCircleFill />,
        <RiInstagramFill />,
        <RiPinterestFill />
      ]
    },
  ]

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px] text-center xl:text-left">
          our team
        </h2>
        <Slider view={2}>
          {items.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col xl:flex-row mb-[50px]">
              <div className="flex flex-col xl:flex-row items-center gap-[30px]">
                <div className="flex-1 h-full">
                  <Image src={item.image} alt={item.doctor} />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="h4 mb-[10px]">
                    {item.doctor}
                  </h4>
                  <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px]">
                    {item.jop}
                  </div>
                  <p className="font-light mb-[26px] max-w-[320px]">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-x-5 text-accent-tertiary">
                    {item.socials.map((social, j) => (
                      <Link key={j} href="/" className="hover:text-accent transition-all">
                        {social}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}