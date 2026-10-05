import ContactForm, { ContactInfo } from './ContactForm';

export default function ContactSection() {
  return (
    <section className="bg-charcoal section-padding">
      <div className="container-content">
        <div className="grid overflow-hidden rounded-[3px] lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
