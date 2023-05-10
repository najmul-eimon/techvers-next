import { companies } from '@/data/company'
import CompanyCard from './CompanyCard'

const Company = () => {
  return (
    <section className="company py-[42px] md:py-[95px]">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-y-3">
          {
            companies.map((company) => <CompanyCard key={company.id} data={company}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default Company