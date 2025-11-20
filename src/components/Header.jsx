import React, { useState } from 'react';
import top_logo from '../assets/logo/top-logo.png';
import plus_icon from '../assets/icon/plus_icon.svg';
import burger_bar from '../assets/icon/burger-bar.png'
import close_menu from '../assets/icon/close_menu.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="top-section" className="relative max-w-[1440px] mx-auto">
      <header id="header" className='mx-auto py-[30px] flex justify-between items-center text-[#8B8B8B] tracking-[0.1em] max-w-[71.25rem]
        max-lg:flex-row max-lg:items-center max-lg:p-6 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-4'>
        <div id="left-header" className='pt-[10px] mr-[10px] max-md:mb-4 max-md:pt-0 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-[80%] max-sm:mr-0 max-sm:my-5'>
          <img src={top_logo} alt="top-logo-img" />
          <div className="max-sm:block sm:hidden border border-3 rounded-lg border-sky-800" onClick={toggleMenu}>
            <img src={burger_bar} alt="burger_bar_icon" className={`w-10 ${isMenuOpen ? 'hidden' : 'block'}`}/>
            <img src={close_menu} alt="burger_bar_icon" className={`w-10 p-2 ${isMenuOpen ? 'block' : 'hidden'}`}/>
          </div>
        </div>
        

        <nav id="right-header" className={`flex gap-[50px] text-[16px] font-[500] justify-between max-lg:gap-4
          max-md:flex-row max-md:w-full max-md:pl-4 max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:pl-0 max-sm:${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul id="navbar" className='flex justify-between items-center gap-[46px] list-none 
            max-lg:gap-[25px] max-lg:text-[15px] max-md:flex-row max-md:gap-6'>
            <li className='text-[var(--bold-text-color)] font-[600] flex gap-[5px] max-md:text-[14px] max-sm:text-[15px]'>
              Home <img src={plus_icon} alt="plus_icon" className="pt-1" />
            </li>
            <li>About</li>
            <li>Service</li>
            <li>Gallery</li>
            <li>Blog</li>
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
