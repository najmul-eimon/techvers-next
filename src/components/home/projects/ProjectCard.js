import Image from 'next/image';
import React from 'react'

const ProjectCard = ({project}) => {
  const {image, title, description} = project;

  return (
    <div className="p-4 md:p-6 rounded-xl shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
      <div className="rounded-lg overflow-hidden">
        <Image src={image} className="w-full" alt="Project" width={498} height={316}/>
      </div>
      <h3 className="text-lg lg:text-2xl font-bold text-primary-text py-3 md:py-4">{title}</h3>
      <p className="text-xs md:text-sm font-inter text-secondary-text">{description}</p>
    </div>
  )
}

export default ProjectCard