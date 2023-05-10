import ServiceTab from './ServiceTab'
import BookAppointment from './BookAppointment';
import ServiceTabContent from './ServiceTabContent';
import { services } from '@/data/service';
import { useContext } from 'react';
import { SharedContext } from '@/layout/Layout';

const AllService = () => {
const {activeTab} = useContext(SharedContext);

  return (
    <section className="all-service pt-10 pb-8 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left side */}
          <ServiceTab/>

          {/* right side */}
          <div className="md:col-span-2">
            <ServiceTabContent data={services[activeTab]}/>
          </div>

          {/* responsive book appointment */}
          <div className="lg:hidden">
            <BookAppointment/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllService