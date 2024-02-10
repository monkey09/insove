import img1 from '@/public/img/blog/img-1.png'
import img2 from '@/public/img/blog/img-2.png'
import img3 from '@/public/img/blog/img-3.png'
import Image from 'next/image'
import Link from 'next/link'

export const Blog = () => {
  const items = [
    {
      img: img1,
      badge: 'medical',
      created: 'Jan 2, 2023',
      title: '10 foods to avoid for your healthcare',
      content: 'it\'s normal to feel anxiety, worry and grief any time you\'re diagnosed with a condition thats certainly true'
    },
    {
      img: img2,
      badge: 'mental health',
      created: 'Jan 3, 2023',
      title: 'how to be relax & calm in hard situations',
      content: 'it\'s normal to feel anxiety, worry and grief any time you\'re diagnosed with a condition thats certainly true'
    },
    {
      img: img3,
      badge: 'dental',
      created: 'Jan 4, 2023',
      title: 'best ways to make your teeth strong',
      content: 'it\'s normal to feel anxiety, worry and grief any time you\'re diagnosed with a condition thats certainly true'
    },
  ]

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px] text-center xl:text-left">
          our recent posts
        </h2>
        <div className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]">
          {items.map((item, i) => (
            <div key={i} className="max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group">
              <div className="relative overflow-hidden">
                <Image 
                  className="group-hover:scale-110 transition-all duration-500"
                  src={item.img} 
                  alt={item.badge} 
                />
                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  {item.badge}
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">
                  {item.created}
                </div>
                <h4 className="h4 mb-[10px]">
                  {item.title}
                </h4>
                <p className="line-clamp-2 font-light">
                  {item.content}
                </p>
                <Link href="/" className="italic underline text-[#4c5354]">
                  read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}