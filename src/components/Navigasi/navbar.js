import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { link: "/", label: "Home" },
    { link: "/skills", label: "Skills" },
    { link: "/project", label: "Projects" },
    { link: "/certificate", label: "Certificate" },
    { link: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-gray-200 fixed w-full z-10 top-0 backdrop-blur-sm bg-[#232D38]/20 shadow-lg p-2">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <p className="text-white">Nadia Putri Rahmaniar</p>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.link}
                    activeClassName="text-blue-700"
                    className="text-gray-900 hover:text-blue-200 dark:text-white dark:hover:text-blue-500"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.link}
              activeClassName="text-blue-700 bg-gray-50"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
