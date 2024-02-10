import Image from 'next/image'
import img1 from '@/public/img/brands/brand-1.svg'
import img2 from '@/public/img/brands/brand-2.svg'
import img3 from '@/public/img/brands/brand-3.svg'
import img4 from '@/public/img/brands/brand-4.svg'
import img5 from '@/public/img/brands/brand-5.svg'

export const Brands = () => {
  const items = [img1, img2, img3, img4, img5]

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center">
          {items.map((item, i) => (
            <Image 
              key={i}
              src={item} 
              alt="logo"
            />
          ))}
        </div>
      </div>
    </section>
  )
}