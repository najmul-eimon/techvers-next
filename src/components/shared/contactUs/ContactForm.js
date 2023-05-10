
const ContactForm = () => {
  return (
    <div className="rounded-xl shadow-[0px_0px_16px_rgba(198,198,198,0.24)] py-5 lg:py-10 px-4 lg:px-8 bg-white h-fit">
      <form action="#!">
        <div className="mb-6">
          <label htmlFor="name" className="text-xs lg:text-base font-bold font-inter text-primary-text block mb-5">Name</label>
          <input type="text" id="name" className="focus:border-primary/40 hover:border-primary/40 w-full h-12 rounded-xl border border-[#D2D1E0] text-base font-inter text-primary-text outline-none px-2 lg:px-4"/>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="text-xs lg:text-base font-bold font-inter text-primary-text block mb-5">Email</label>
          <input type="email" id="email" className="focus:border-primary/40 hover:border-primary/40 w-full h-12 rounded-xl border border-[#D2D1E0] text-base font-inter text-primary-text outline-none px-2 lg:px-4"/>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-xs lg:text-base font-bold font-inter text-primary-text block mb-5">Message</label>
          <textarea id="message" className="focus:border-primary/40 hover:border-primary/40 w-full h-24 rounded-xl border border-[#D2D1E0] text-base font-inter text-primary-text outline-none p-2 lg:p-4"></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="privacy" className="text-xs lg:text-base font-inter text-primary-text cursor-pointer flex items-center gap-3">
            <input type="checkbox" id="privacy" className="accent-primary h-5 w-5 cursor-pointer"/>
            <p>I agree to <a href="#!" className="font-bold">Privacy policy</a> and <a href="#!" className="font-bold">Terms of use</a></p>
          </label>
        </div>

        <button type="submit" className="w-full text-center bg-primary text-white py-[10px] text-sm lg:text-lg font-semibold font-inter rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm