
const CommentForm = () => {
  return (
    <>
      <h3 className="mt-8 lg:mt-0 text-2xl font-bold text-primary-text pb-4 lg:pb-6">Leave a Comment</h3>
      <form action="#!">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <label htmlFor="comment" className="text-sm lg:text-base font-inter text-secondary-text block mb-4 lg:mb-5">Write a Comment</label>
            <textarea id="comment" className="focus:border-primary/40 hover:border-primary/40 rounded-xl border border-[#D2D1E0] w-full h-24 p-2 lg:p-4 outline-none text-sm lg:text-base font-inter text-primary-text"></textarea>
          </div>

          <div>
            <label htmlFor="cname" className="text-sm lg:text-base font-inter text-secondary-text block mb-4 lg:mb-5">Name</label>
            <input type="text" id="cname" className="focus:border-primary/40 hover:border-primary/40 rounded-xl border border-[#D2D1E0] w-full h-12 px-2 lg:px-4 outline-none text-sm lg:text-base font-inter text-primary-text"/>
          </div>

          <div>
            <label htmlFor="cmail" className="text-sm lg:text-base font-inter text-secondary-text block mb-4 lg:mb-5">Email</label>
            <input type="email" id="cmail" className="focus:border-primary/40 hover:border-primary/40 rounded-xl border border-[#D2D1E0] w-full h-12 px-2 lg:px-4 outline-none text-sm lg:text-base font-inter text-primary-text"/>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="privacy" className="text-sm lg:text-base font-inter text-secondary-text cursor-pointer flex items-start gap-3">
              <input type="checkbox" id="privacy" className="accent-primary h-[18px] w-[18px] mt-1 cursor-pointer"/>
              Save name and email in this browser for the next time comment
            </label>
          </div>

          <div className="lg:col-span-2">
            <button type="submit" className="w-full sm:w-fit text-center bg-primary text-white sm:px-16 py-[10px] text-sm lg:text-lg font-semibold font-inter rounded-lg">Submit Comment</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CommentForm