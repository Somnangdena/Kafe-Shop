import type { IconType } from "react-icons";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

interface Contact {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
}

const List: Contact[] = [
  {
    id: 1,
    title: "Address",
    icon: MdLocationOn,
    desc: "123, Phnom Penh, Cambodia",
  },
  {
    id: 2,
    title: "Phone",
    icon: MdLocalPhone,
    desc: "+012 345 6789",
  },
  {
    id: 3,
    title: "Email",
    icon: MdEmail,
    desc: "info@example.com",
  },
];

const ContactList = () => {
  return (
    <section className="max-w-4xl mx-auto pb-10 px-3">
      {/* Phone, location and Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {List.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-center items-center gap-3 p-4 text-center">
            <item.icon className="text-primary text-4xl" />
            <h3 className="font-semibold text-2xl">{item.title}</h3>
            <p className="text-accent/60">{item.desc}</p>
          </article>
        ))}
      </div>
      {/* Map and Email input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mx-5">
        <div className="relative mx-8 md:mx-0">
          <iframe
            className="w-full h-100 mb-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.46368073495!2d104.72537307966745!3d11.579317637201523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2z4Z6X4Z-S4Z6T4Z-G4Z6W4Z-B4Z6J!5e0!3m2!1skm!2skh!4v1790060136151!5m2!1skm!2skh"
            loading="lazy"></iframe>
        </div>
        <div className="relative mx-8 md:mx-0">
          <form className="flex flex-col w-full gap-5 overflow-auto">
            <input
              className=" border border-accent/60 py-2 px-3 cursor-pointer"
              type="text"
              id="name"
              name="name"
              required
              autoComplete="text"
              placeholder="Your Name"
            />
            <input
              className=" border border-accent/60 py-2 px-3 cursor-pointer"
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your Email"
            />
            <input
              className=" border border-accent/60 py-2 px-3 cursor-pointer"
              type="text"
              id="subject"
              name="subject"
              autoComplete="text"
              placeholder="Subject"
            />
            <textarea
              className=" border border-accent/60 min-h-30 py-2 px-3 cursor-pointer"
              placeholder="Message"
              id="message"
              rows={5}
              minLength={5}></textarea>
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-primary/90 w-fit py-2 px-8 text-accent hover:bg-primary font-semibold line-clamp-1 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactList;
