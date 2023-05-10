import React from 'react'

const BookAppointment = () => {
  return (
    <div className="bg-white rounded-2xl px-4 md:px-8 py-10 shadow-[0px_0px_16px_rgba(198,198,198,0.24)] mt-8">
      <h3 className="pb-4 text-primary-text text-lg xl:text-2xl font-bold text-center">Book an <br/> Appointment</h3>
      <form action="#!">
        <div className="mb-4">
          <label htmlFor="name" className="text-sm xl:text-base font-medium lg:font-bold font-inter text-primary-text block mb-3">Name</label>
          <input type="text" id="name" className="w-full h-12 focus:border-primary/40 hover:border-primary/40 rounded-lg border border-[#D2D1E0] text-base font-inter text-primary-text outline-none px-3"/>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm xl:text-base font-medium lg:font-bold font-inter text-primary-text block mb-3">Email</label>
          <input type="email" id="email" className="w-full h-12 focus:border-primary/40 hover:border-primary/40 rounded-lg border border-[#D2D1E0] text-base font-inter text-primary-text outline-none px-3"/>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-sm xl:text-base font-medium lg:font-bold font-inter text-primary-text block mb-3">Message</label>
          <textarea id="message" className="w-full resize-none h-24 focus:border-primary/40 hover:border-primary/40 rounded-lg border border-[#D2D1E0] text-base font-inter text-primary-text outline-none p-3"></textarea>
        </div>

        <button type="submit" className="rounded-lg bg-primary text-white py-2 lg:py-[10px] text-sm xl:text-lg font-semibold font-inter text-center w-full">Contact with us now</button>
      </form>
    </div>
  )
}

export default BookAppointment