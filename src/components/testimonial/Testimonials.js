import { testimonials } from "@/data/testimonial"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section className="testimonial py-8 md:pt-[160px] md:pb-20">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-8">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Testimonial</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px]">What they’ve said about us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {
            testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials