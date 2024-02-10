export const Departments = () => {
  const items = [
    'laboratory analysis', 
    'cardiology clinic', 
    'gynecology clinic', 
    'pathology clinic', 
    'pediatrics clinic',
    'neurology clinic'
  ]

  return (
    <section className="section">
      <div className="bg-[url('/img/departments/bg.svg')] bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-5">
            <div className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px] font-medium text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0">
              {items.map((item, i) => (
                <div key={i} className="cursor-pointer hover:text-accent transition-all uppercase">
                  {item}
                </div>
              ))}
            </div>
            <div className="xl:w-[640px]">
              <h2 className="h2 text-center xl:text-left mb-[20px]">cardiology clinic</h2>
              <p className="mb-[30px] font-light text-center xl:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci aliquam in veniam autem, non reiciendis placeat molestias quibusdam ad ullam modi porro explicabo dolore. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci aliquam in veniam autem, non reiciendis placeat molestias quibusdam ad ullam modi porro explicabo dolore.
              </p>
              {/* xl:*:px-5 xl:first:px-0 */}
              <div className="flex flex-col xl:flex-row items-stretch xl:items-center xl:justify-between mb-[50px] mx-auto xl:mx-0  uppercase divide-y-2 *:py-3 xl:*:py-0 xl:divide-y-0 xl:divide-x-2 text-accent xl:*:px-6 [&>*:first-child]:pl-0 text-center">
                <div>neurocritical care</div>
                <div>neuro oncology</div>
                <div>geriatric neurology</div>
              </div>
              <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}