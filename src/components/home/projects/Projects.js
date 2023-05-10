import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="project pb-16 pt-8 md:py-20">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-6 md:pb-8">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Our Project</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px] md:leading-10">We Have Creative Works For Our <br/> Special Customers</h2>
        </div>

        <Swiper 
          modules={[Pagination, Autoplay]} 
          spaceBetween={24}
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          speed={3000}
          allowTouchMove={true}
          freeModeMomentum={false}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            }
          }}
          pagination={{
            clickable: true,
          }}
          className="project-slider !p-2 !pb-9 !md:pb-12"
        >
          {
            projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Projects