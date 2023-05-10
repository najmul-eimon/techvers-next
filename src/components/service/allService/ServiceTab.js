import { useContext } from 'react';
import BookAppointment from './BookAppointment';
import { services } from '@/data/service';
import { SharedContext } from '@/layout/Layout';

const ServiceTab = () => {
  const {activeTab, setActiveTab} = useContext(SharedContext);

  return (
    <div>
      <div className="rounded-2xl bg-white shadow-[0px_0px_16px_rgba(198,198,198,0.24)] p-4">
        <h3 className="text-center py-3 text-lg xl:text-2xl text-primary-text font-bold">All Service</h3>
        <ul className="tabs-nav">
          {
            services.map(({id, title}) => (
              <li key={id}>
                <button onClick={() => setActiveTab(id)} type='button' className={`${activeTab === id && 'active'} block w-full text-left px-4 py-3 rounded-lg text-sm xl:text-base font-inter text-primary-text`}>{title}</button>
              </li>
            ))
          }
        </ul>
      </div>

      {/* desktop book appointment */}
      <div className="hidden lg:block">
        <BookAppointment/>
      </div>
    </div>
  )
}

export default ServiceTab