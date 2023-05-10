
const WorkingProcessCard = ({data}) => {
  const {icon, title, description} = data;

  return (
    <div className="p-6 text-center working-progress-card">
      <div 
        className="h-12 md:h-[72px] w-12 md:w-[72px] flex items-center justify-center rounded-lg bg-[#F0F0F1] mx-auto"
        dangerouslySetInnerHTML={{__html: icon}}
      />
      <h3 className="font-bold text-sm md:text-base text-primary-text pt-4 md:pt-6 pb-2">{title}</h3>
      <p className="font-inter text-secondary-text text-xs md:text-sm">{description}</p>
    </div>
  )
}

export default WorkingProcessCard