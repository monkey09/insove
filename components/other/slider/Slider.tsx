'use client'
import { ReactNode, useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Slider = ({children, view}: {children: ReactNode[], view: number}) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    setWidth(window.innerWidth)
    window.onresize = () => {
      setWidth(window.innerWidth)
    }
  }, [])

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={width > 768 ? view : 1}
      pagination={{ clickable: true }}
    >
      {children.map((item, i) => (
        <SwiperSlide key={i}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}