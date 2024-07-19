import { contactInfo } from "@/lib/data"
import ContactForm from "./ContactForm"

type Props = {}
const Contact = (props: Props) => {
  return (
    <div id="contactus" >
        <div  className="grid grid-cols-1 items-center py-10 lg:min-h-[800px] lg:grid-cols-2 lg:gap-20">
               <ContactForm/>
                <div className="mt-10 h-[300px] w-full overflow-hidden rounded-lg lg:mt-0 lg:h-full lg:rounded-none">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.727530524453!2d78.387921!3d17.485648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9102b426ef0b%3A0x6e8a096380c2d00d!2sEdureka%20Learning%20Center%20Kukatpally!5e0!3m2!1sen!2sin!4v1691329787826!5m2!1sen!2sin"
                    width="800" height="800" className="h-full w-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
        </div>
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {contactInfo.map((c) => (
          <div key={c.title} className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              {/* Include your Icon component here with icon name */}
              {c.icon && <c.icon className="h-6 w-6 text-primary" />}
            </div>
            <h3 className="mt-4 text-lg font-medium lg:text-xl">{c.title}</h3>
            <p className="text-center text-muted-foreground">
              {c.description}
            </p>
            <a href={c.link} target="_blank" rel="noreferrer" className="font-medium text-primary">
              {c.value}
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}
export default Contact