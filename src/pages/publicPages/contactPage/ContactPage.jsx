import ContactHero from './assets/ContactHero'
import ContactForm from './assets/ContactForm'
import ContactInfo from './assets/ContactInfo'

export default function ContactPage() {
    return (
        <div className="w-full bg-[#0b1f1c]">
            <ContactHero />
            <section className="py-12 px-4 md:px-12 lg:px-20 pb-24">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-3" data-aos="fade-right">
                        <ContactForm />
                    </div>
                    <div className="lg:col-span-2" data-aos="fade-left">
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </div>
    )
}
