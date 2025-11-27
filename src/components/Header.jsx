import React, { useState } from 'react';
import dark_logo from '../assets/logo/dark-logo.png';
import light_logo from '../assets/logo/light-logo.png';
import plus_icon from '../assets/icon/plus-icon.svg';
import light_plus_icon from '../assets/icon/light-plus-icon.svg';
import burger_bar from '../assets/icon/burger-bar.png'
import light_burger_bar from '../assets/icon/light-burger-bar.png'
import close_menu from '../assets/icon/close-menu.png'


export default function Header({bgImage, lightHeader}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", icon: lightHeader ? light_plus_icon : plus_icon },
    { text: "About" },
    { text: "Service" },
    { text: "Gallery" },
    { text: "Blog" },
  ];

  return (
    <section id="top-section" className={`relative ${bgImage === 1 ? 'home1' : ''} ${bgImage === 2 ? 'home2' : ''}`}>
      <header id="header" className={`mx-auto pt-[30px] pb-[29px] flex justify-between items-center ${lightHeader ? 'text-[#D8DCFF]' : 'text-[#8B8B8B]'} tracking-[0.1em] max-w-[71.5rem]
        max-lg:flex-row max-lg:items-center max-lg:p-6
        max-md:px-0
        max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-4 max-sm:pb-0`}>
        <div id="left-header" className='min-w-[180px] pt-[11px] mr-[20px] max-lg:w-full max-lg:pt-0 max-md:flex max-md:w-[80%] max-md:pt-0 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full max-sm:mr-0 max-sm:my-5'>
          <img src={lightHeader ? light_logo : dark_logo} alt="top-logo-img" className='' />
          <div className={`max-sm:block sm:hidden ${lightHeader ? '' : 'border border-3 rounded-lg border-sky-800'}  min-w-[2rem] order-first`} onClick={toggleMenu}>
            <img src={lightHeader ? light_burger_bar : burger_bar} alt="burger_bar_icon" className={`w-10 ${isMenuOpen ? 'hidden' : 'block'}`}/>
          </div>
        </div>

        <nav id="right-header"
          className={`flex gap-[50px] text-[16px] font-[500] justify-between max-lg:gap-4
            max-md:flex-row max-md:w-full max-md:pl-4
            max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-start max-sm:pl-0
            max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:h-full max-sm:w-[70%]
            max-sm:bg-white max-sm:shadow-xl max-sm:z-50 max-sm:pt-24
            max-sm:transition-transform max-sm:duration-300 ${isMenuOpen ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'}`}>
          
          
          <div className="hidden max-sm:flex items-center gap-2 px-2 py-3 absolute top-5 p-1" onClick={toggleMenu}>
            <img src={close_menu} className='w-[18%] h-[50%] p-2 border border-3 rounded-lg border-sky-800' />
            <img src={dark_logo} alt="top-logo-img" className='w-[80%]' />
          </div>
          <ul id="navbar" className="flex justify-between items-center gap-[46px] list-none 
          max-lg:gap-[25px] max-lg:text-[15px] max-md:flex-row max-md:gap-4 
          max-sm:flex-col max-sm:w-full max-sm:gap-1 max-sm:px-2 max-sm:pt-8">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full     ${index === 0 ? `
                            font-[600] flex gap-[5px] max-md:text-[14px] max-sm:text-[15px] 
                            max-sm:justify-center max-sm:bg-[var(--pink-color)] max-sm:mx-2
                            ${lightHeader ? 'text-white' : 'text-[var(--bold-text-color)]'}
                            ` : ''}`}
                >
                  {item.text} {item.icon && <img src={item.icon} className="pt-1" />}
                </li>
              ))}
          </ul>

          <button id="contact-button" className='text-white px-[42px] h-[52px] rounded-full bg-[var(--pink-color)] font-[600] border-none
            max-lg:px-[30px] max-lg:h-[48px] max-lg:text-[14px] max-md:text-[12px] max-md:w-[20%] max-md:px-3 max-md:py-[0.5rem] max-sm:h-[40px] max-sm:w-[80%]'>
            Contact
          </button>
        </nav>
        <div
          className={`hidden
            ${isMenuOpen ? 'max-sm:block' : 'max-sm:hidden'}
            fixed inset-0 bg-black/30 z-40
          `}
          onClick={toggleMenu}
        />

      </header>
    </section>
  );
}
