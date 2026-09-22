import { FaCheck } from "react-icons/fa";
import about from "../../assets/images/about.png";

const AboutContent = () => {
  return (
    <section className="max-w-5xl mx-auto pb-10">
      <div className="flex flex-col justify-center items-start px-6 gap-4 lg:flex-row ">
        <article className="space-y-4 flex-1 p-8">
          <h2 className="text-4xl font-bold">Our Story</h2>
          <h5 className="text-xl">
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h5>
          <p className="text-sm text-gray-700">
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
          <button className="bg-accent text-secondary font-semibold py-2 px-4 text-center text-lg">Learn More</button>
        </article>
        <div className="h-full w-ful flex-1 self-center">
          <img 
          className="w-ful h-full md:h-100 object-cover"
          src={about} 
          alt="coffee" />
        </div>
        <article className="space-y-4 flex-1 p-8">
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-sm">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <span className="flex justify-start items-center gap-2">
            <FaCheck className="text-primary" />
            <h5>Lorem ipsum dolor sit amet</h5>
          </span>
          <span className="flex justify-start items-center gap-2">
            <FaCheck className="text-primary" />
            <h5>Lorem ipsum dolor sit amet</h5>
          </span>
          <span className="flex justify-start items-center gap-2">
            <FaCheck className="text-primary" />
            <h5>Lorem ipsum dolor sit amet</h5>
          </span>
          
          <button className="bg-primary text-accent font-semibold py-2 px-4 text-center text-lg">Learn More</button>
        </article>
      </div>
    </section>
  );
};

export default AboutContent;
