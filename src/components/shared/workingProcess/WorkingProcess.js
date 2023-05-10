import { progress } from '@/data/progress';
import { workingProcess } from '@/data/workingProcess';
import WorkingProcessCard from './WorkingProcessCard';

const WorkingProcess = () => {
  return (
    <section className="working-process py-8 md:py-20">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-6 md:pb-8">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Working Process</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px] md:leading-10">Robust and effective process.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {
            workingProcess.map((item) => <WorkingProcessCard key={item.id} data={item}/>)
          }
        </div>

        {/* progress bar */}
        {progress}
      </div>
    </section>
  )
}

export default WorkingProcess