import { useState, useEffect } from "react";
import { close, logo, menu, moon } from "../../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/index.js";

export const Navbar = () => {
  const [theme, setTheme] = useState(null);

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] 
            ${
              active === nav.title
                ? "text-purple-700 dark:text-purple-400"
                : "text-purple-950 hover:text-violet-500 dark:text-purple-200 dark:hover:text-violet-500"
            }
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <button
          onClick={handleThemeSwitch}
          className="ml-4 bg-purple-950 p-2 hover:bg-purple-800 rounded-full dark:bg-violet-300"
        >
          <img src={moon} alt="moon" />
        </button>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-purple-100 absolute top-[70px] right-0 my-2 min-w-[140px] w-full rounded-b-xl sidebar border-t border-violet-600`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-purple-700 dark:text-purple-400" : "text-purple-950 hover:text-violet-500 dark:text-purple-200 dark:hover:text-violet-500"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <button
              onClick={handleThemeSwitch}
              className="ml-4 bg-purple-950 p-2 hover:bg-purple-800 rounded-full dark:bg-violet-300"
            >
              <img src={moon} alt="moon" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
