"use client";

import { useEffect, useState } from "react";
import AnimatedButton from "../../ui/AnimatedButton";
import { useTheme } from "../../../context/ThemeContext";
import { Link as LinkScroll, scroller } from "react-scroll";
import ThemeToggle from "../../ui/ThemeToggle";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-green-main after:w-0 after:transition-all after:duration-300 hover:after:w-full
    ${
      activeLink === item.id
        ? "text-green-main animation-active shadow-green-main"
        : "text-black dark:text-white font-bold hover:text-green-main"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 transition-all duration-300 ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              <span className="dark:text-white">ortfolio</span>
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center gap-4">
            <ThemeToggle />
            <AnimatedButton
              variant="secondary"
              onClick={() =>
                scroller.scrollTo("contact", { duration: 1000, smooth: true })
              }
              className="!py-2 !px-4 !text-base !border-green-main !text-green-main hover:!bg-green-main/10"
            >
              Contact Me
            </AnimatedButton>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white dark:bg-gray-900 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
