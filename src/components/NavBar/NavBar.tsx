import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import { LuMenu, LuX } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";

interface ChildNav {
  path: string;
  name: string;
}

interface NavItem {
  id: number;
  path: string;
  name: string;
  children?: ChildNav[];
}

const navLink: NavItem[] = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "about",
    name: "About",
  },
  {
    id: 3,
    path: "service",
    name: "Service",
  },
  {
    id: 4,
    path: "menu",
    name: "Menu",
  },
  {
    id: 5,
    path: "#",
    name: "Pages",
    children: [
      {
        path: "/reservation",
        name: "Reservation",
      },
      {
        path: "/testimonial",
        name: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "contact",
    name: "Contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const location = useLocation();

  function dropDown() {
    setIsDrop(!isDrop);
  }

  function closeAll(){
    setIsDrop(false);
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-dark relative">
      <div className="p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <h2 className="text-secondary font-bold text-3xl leading-4">Kafe</h2>
          </Link>
          {/* Desktop */}
          <nav className="hidden md:block flex-1">
            <ul className="flex items-center justify-end gap-2">
              {navLink.map((nav) => (
                <li
                  key={nav.id}
                  className="font-semibold text-secondary cursor-pointer relative group">
                  {nav.children ? (
                    <>
                      <span
                        onClick={dropDown}
                        className={`cursor-pointer inline-flex items-center justify-center py-2 px-4 group-hover:text-primary group-hover:brightness-140 
                        ${
                          nav.children.some(
                            (child) => location.pathname === child.path,
                          )
                            ? "text-primary"
                            : "text-secondary hover:text-primary"
                        }
                        `}>
                        {nav.name}
                        <FaCaretDown
                          className={`${!isDrop ? "" : "rotate-180"} `}
                        />
                      </span>
                      {isDrop && (
                        <div
                          className={`absolute top-full left-0 pt-4 z-10 ${!isDrop ? "hidden" : "block"}`}>
                          <ul className="w-40 bg-dark">
                            {nav.children.map((child) => (
                              <li key={child.name}>
                                <NavLink
                                  to={child.path}
                                  onClick={dropDown}
                                  className={({ isActive }) =>
                                    ` ${
                                      isActive
                                        ? "text-primary bg-secondary/10"
                                        : "text-secondary hover:text-primary"
                                    } block px-4 py-3  hover:text-primary hover:brightness-140 hover:bg-secondary/10`
                                  }>
                                  {child.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={nav.path}
                      className={({ isActive }) =>
                        `transition-all py-2 px-4 ${
                          isActive
                            ? "text-primary"
                            : "hover:brightness-140 hover:text-primary"
                        }`
                      }>
                      {nav.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Menu Mobile */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden cursor-pointer text-white">
            {!isOpen ? (
              <LuMenu className="text-2xl" />
            ) : (
              <LuX className="text-2xl" />
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <MobileNav
        MenuBar={navLink}
        isdrop= {isDrop}
        close={closeAll}
        drop={dropDown}
        open={isOpen}
      />
    </header>
  );
};

export default NavBar;
