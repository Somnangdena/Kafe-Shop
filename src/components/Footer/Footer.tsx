import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import bg from "../../assets/images/bg.jpg";
import overlayTop from "../../assets/images/overlay-top.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

interface GetTouch {
  id: number;
  icon: IconType;
  desc: string;
}

interface Follow {
  id: number;
  icon: IconType
}

const getList: GetTouch[] = [
  {
    id: 1,
    icon: MdLocationOn,
    desc: "123, Phnom Penh, Cambodia"
},
  {
    id: 2,
    icon: MdLocalPhone,
    desc: "+012 345 6789"
},
  {
    id: 3,
    icon: MdEmail,
    desc: "info@example.com"
},

];

const followList: Follow[] = [
  {
    id: 1,
    icon: FaXTwitter,
  },
  {
    id: 2,
    icon: FaFacebookF,
  },
  {
    id: 3,
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    icon: FaInstagram,
  },
]

const Footer = () => {
  return (
    <footer>
      <div
        className="bg-no-repeat w-full bg-cover bg-top relative"
        style={{
          backgroundImage: `
      linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${bg})`,
        }}>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayTop})`, top: "-1px" }}></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-secondary px-5 pt-15 pb-10 gap-6 space-y-5">
          {/* Get In touch */}
          <div>
            <h4 className="uppercase text-xl mb-4 font-semibold">Get In Touch</h4>
            {
              getList.map((item) => (
                <span key={item.id} className="flex items-center gap-2 flex-wrap mb-3">
              <item.icon className="text-xl shrink-0" />
              <p className="text-sm text-wrap">{item.desc}</p>
            </span>
              ))
            }
           
          </div>
          {/* Follow Us */}
          <div>
            <h4 className="uppercase text-xl mb-4 font-semibold">Follow Us</h4>
            <p className="text-sm mb-4">
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="flex gap-2 flex-wrap">
              {
                followList.map((list) => (
                  <div key={list.id}
                  className="border flex border-secondary p-2 hover:bg-secondary cursor-pointer hover:text-accent"
                  >
                    <list.icon className="text-xl"/>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Open Hours */}
          <div>
            <h4 className="uppercase text-xl mb-4 font-semibold">Open Hours</h4>
            <div className="text-secondary uppercase text-sm">
                <p className="mb-2">Monday - Friday</p>
              <p className="mb-3">8.00 AM - 8.00 PM</p>
               <p className="mb-2">Saturday - Sunday</p>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
          {/* New sletter */}
          <div>
            <h4 className="uppercase text-xl mb-4 font-semibold">New sletter</h4>
            <p className="text-sm">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className="flex flex-wrap mt-4">
              <input 
              className="bg-secondary text-accent  w-full min-w-25 flex-1 px-5 py-2 overflow-hidden "
              type="email" 
              name="email" 
              id="email"
              autoComplete="email"
              placeholder="Your Email" />
              <button
              className="bg-primary/90 text-accent font-semibold py-2 px-4 text-lg cursor-pointer hover:bg-primary"
              >Sign Up</button>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center border-t-2 border-secondary/20 px-8"
        >
          <p className="text-sm py-3 text-center text-secondary/50">Copyright 2026 &copy; Kafe Shop - All Right Rserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
