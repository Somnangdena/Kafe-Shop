import { AnimatePresence, motion } from "motion/react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface ChildNav {
  path: string;
  name: string;
}

interface MenuItem {
  id: number;
  path: string;
  name: string;
  children?: ChildNav[];
}

interface MobileNavProps {
  MenuBar: MenuItem[];
  open: boolean;
  close: () => void;
  drop: () => void;
  isdrop: boolean;
}

const MobileNav = ({ MenuBar, open, close, drop, isdrop }: MobileNavProps) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          onClick={close}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-screen top-full bg-amber-200 right-0 z-20 md:hidden">
          <div 
          className="text-xl font-semibold bg-dark text-secondary py-5">
            <ul className="flex flex-col justify-center items-center gap-2">
              {MenuBar.map((data) => (
                <li
                  key={data.id}
                  className="w-full flex flex-col items-center justify-center px-3">
                  {data.children ? (
                    // Parent with dropdown
                    <div className="w-full">
                      <span 
                      onClick={drop}
                      className={`w-full text-start flex justify-start items-center py-2 px-4 ${
                          data.children.some(
                            (child) => location.pathname === child.path,
                          )
                            ? "text-primary bg-secondary/20"
                            : "text-secondary hover:text-primary hover:brightness-140"
                        }`}>
                        {data.name} <FaCaretDown className={`${isdrop ? "rotate-180" : ""}`}/>
                      </span>

                      {/* Mobile children */}
                     {
                      isdrop && 
                      ( <ul className="w-full">
                        {data.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              onClick={close}
                              className={({ isActive }) =>
                                `block px-8 py-2 transition-all ${
                                   isActive
                            ? "text-primary bg-secondary/20"
                            : "text-secondary hover:text-primary hover:brightness-140"
                                }`
                              }>
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>)
                     }
                    </div>
                  ) : (
                    <NavLink
                      to={data.path}
                      onClick={close}
                      className={({ isActive }) =>
                        `w-full text-start py-2 px-4 transition-all ${
                          isActive
                            ? "text-primary bg-secondary/20"
                            : "text-secondary hover:text-primary hover:brightness-140"
                        }`
                      }>
                      {data.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
