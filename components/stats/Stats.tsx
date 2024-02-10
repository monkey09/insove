export const Stats = () => {
  const items = [
    {
      number: '+5120',
      title: 'happy patients'
    },
    {
      number: '+26',
      title: 'total branches'
    },
    {
      number: '+53',
      title: 'senior doctors'
    },
    {
      number: '+10',
      title: 'years experience'
    },
  ]

  return (
    <section className="section">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row divide-y-[1px] xl:divide-y-0 xl:divide-x-[1px] justify-between">
          {items.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center py-5 xl:py-0">
              <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                {item.number}
              </div>
              <div className="capitalize">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}