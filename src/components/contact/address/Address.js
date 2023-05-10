import { address } from "@/data/about"
import AddressCard from "./AddressCard"

const Address = () => {
  return (
    <section className="address pt-8 md:pt-16 lg:pt-[160px] pb-16 lg:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            address.map((item) => <AddressCard key={item.id} data={item}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default Address