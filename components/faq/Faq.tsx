import { Accordion } from ".."

export const Faq = () => {
  const items = [
    {
      title: 'why to believe with insove medical healthcare ?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere id ducimus voluptates qui? Quos architecto porro itaque eveniet ipsam! Quaerat velit distinctio cum ullam sed iusto rem similique soluta.'
    },
    {
      title: 'will we get healthcare updates after surgery ?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere id ducimus voluptates qui? Quos architecto porro itaque eveniet ipsam! Quaerat velit distinctio cum ullam sed iusto rem similique soluta.'
    },
    {
      title: 'what is the cost for just repairing ?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere id ducimus voluptates qui? Quos architecto porro itaque eveniet ipsam! Quaerat velit distinctio cum ullam sed iusto rem similique soluta.'
    },
    {
      title: 'what time will it take to finish my roofing ?',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere id ducimus voluptates qui? Quos architecto porro itaque eveniet ipsam! Quaerat velit distinctio cum ullam sed iusto rem similique soluta.'
    },
  ]
  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-[50px]">we've got answers</h2>
        <div className="max-w-5xl mx-auto">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  )
}