'use client'
import { RiAddFill, RiSubtractFill } from "@remixicon/react"
import { useState } from "react"

export const Accordion = ({items}: {items: {title: string, content: string}[]}) => {
  const [active, setActive] = useState(0)

  return (
    <div className="divide-y-2">
      {items.map((item, i) => (
        <div key={i} className="p-5">
          <div className="flex justify-between items-center">
            <h4 className="h4">{item.title}</h4>
            {active == i ? (
              <RiSubtractFill
                onClick={() => setActive(i)}
              />
            ) : (
              <RiAddFill 
                className="cursor-pointer text-accent" 
                onClick={() => setActive(i)}
              />
            )}
          </div>
          <div className={`${active == i ? 'h-full' : 'h-0'} overflow-hidden`}>
            <p className="font-light">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}