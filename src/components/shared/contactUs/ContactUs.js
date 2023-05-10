import Address from './Address';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <section className="contact pt-16 pb-8 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Address/>

          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactUs