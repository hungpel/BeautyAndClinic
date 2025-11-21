import React, { useState } from 'react';
import top_logo from '../assets/logo/top-logo.png';
import plus_icon from '../assets/icon/plus-icon.svg';
import burger_bar from '../assets/icon/burger-bar.png'
import close_menu from '../assets/icon/close-menu.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", icon: plus_icon },
    { text: "About" },
    { text: "Service" },
    { text: "Gallery" },
    { text: "Blog" },
  ];

  return (
    <section id="top-section" className="relative max-w-[1440px] mx-auto">
      <header id="header" className='mx-auto py-[30px] flex justify-between items-center text-[#8B8B8B] tracking-[0.1em] max-w-[71.25rem]
        max-lg:flex-row max-lg:items-center max-lg:p-6 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-4'>
        <div id="left-header" className='pt-[10px] mr-[10px] max-md:mb-4 max-md:pt-0 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-[80%] max-sm:mr-0 max-sm:my-5'>
          <img src={top_logo} alt="top-logo-img" />
          <div className="max-sm:block sm:hidden border border-3 rounded-lg border-sky-800" onClick={toggleMenu}>
            <img src={burger_bar} alt="burger_bar_icon" className={`w-10 ${isMenuOpen ? 'hidden' : 'block'}`}/>
          </div>
        </div>
        


        <nav id="right-header"
          className={`flex gap-[50px] text-[16px] font-[500] justify-between max-lg:gap-4
            max-md:flex-row max-md:w-full max-md:pl-4
            max-sm:flex-col max-sm:gap-10 max-sm:items-center max-sm:justify-start max-sm:pl-0
            max-sm:fixed max-sm:top-0 max-sm:-right-2 max-sm:h-full max-sm:w-[50%]
            max-sm:bg-white max-sm:shadow-xl max-sm:z-50 max-sm:pt-24
            max-sm:transition-transform max-sm:duration-300 ${isMenuOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}>

          <div className="hidden max-sm:block absolute top-5 p-1 border border-3 rounded-lg border-sky-800" onClick={toggleMenu}>
            <img src={close_menu} className="w-8" />
          </div>
          <ul id="navbar" className="flex justify-between items-center gap-[46px] list-none 
          max-lg:gap-[25px] max-lg:text-[15px] max-md:flex-row max-md:gap-6 
          max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:gap-1">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`max-sm:border-b max-sm:py-4 max-sm:text-center max-sm:w-full ${index === 0 ? 'text-[var(--bold-text-color)] font-[600] flex gap-[5px] max-md:text-[14px] max-sm:text-[15px] max-sm:justify-center max-sm:bg-gray-100 max-sm:border-t' : ''}`}
                >
                  {item.text} {item.icon && <img src={item.icon} className="pt-1" />}
                </li>
              ))}
          </ul>

          <button id="contact-button" className='text-white px-[40px] h-[52px] rounded-full bg-[var(--pink-color)] font-[600] border-none
            max-lg:px-[30px] max-lg:h-[48px] max-lg:text-[14px] max-md:w-[30%] max-md:text-center max-md:py-[0.8rem] max-sm:h-[40px] max-sm:w-[80%]'>
            Contact
          </button>
        </nav>

      </header>
    </section>
  );
}
