import { Select } from ".."

export const Appointment = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="h2 mb-5 xl:mb-[50px] text-center xl:text-left">
          book appointment or call: <span className="text-accent-tertiary">(+487) 384 9452</span>
        </h2>
        <form className="flex flex-col gap-y-5">
          <div className="flex flex-col xl:flex-row gap-5">
            <Select>
              <option value="1">Select Department</option>
              <option value="2">Department 1</option>
              <option value="3">Department 2</option>
              <option value="4">Department 3</option>
            </Select>
            <Select>
              <option value="1">Select Doctor</option>
              <option value="2">Dr. Jane Doe</option>
              <option value="3">Dr. Jhon Doe</option>
              <option value="4">Dr. Bob Smith</option>
            </Select>
          </div>
          <div className="flex flex-col xl:flex-row gap-5">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="text" className="input" placeholder="Phone Number" />
          </div>
          <div className="flex flex-col xl:flex-row gap-5">
            <input type="date" className="input" />
            <input type="time" className="input" />
          </div>
          <button className="btn btn-lg btn-accent self-start" type="submit">
            book an appointment
          </button>
        </form>
      </div>
    </section>
  )
}