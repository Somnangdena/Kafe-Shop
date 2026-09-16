import { Link, NavLink } from "react-router-dom";

const navLink = [
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
  return (
    <header className="bg-amber-900 ">
      <div className="container mx-auto p-4">
        <div className="w-full flex items-center">
          <Link to="/">
            <h2 className="text-white font-bold text-xl leading-4">Kafe</h2>
          </Link>

          <nav className="hidden md:block flex-1">
            <ul className="flex items-center justify-end gap-4">
              {navLink.map((nav) => (
                <li
                  key={nav.id}
                  className="px-4 font-semibold text-white cursor-pointer">
                  {nav.children ? (
                    <>
                      <span className="cursor-pointer">{nav.name} </span>

                      <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg hidden group-hover:block">
                        {nav.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-amber-100">
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink to={nav.path}>{nav.name}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
