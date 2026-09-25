import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, [isActive]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollUp}
      className={`fixed ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"} bg-primary/95 w-10 h-10 flex justify-center items-center bottom-5 right-5 z-10 hover:bg-primary transition-all ease-in cursor-pointer`}>
      <FaAngleDoubleUp className="text-6xl p-4 text-accent" />
    </div>
  );
};

export default ScrollToTop;
