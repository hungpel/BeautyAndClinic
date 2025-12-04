import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dark_logo from '../assets/logo/dark-logo.png';
import light_logo from '../assets/logo/light-logo.png';
import plus_icon from '../assets/icon/plus-icon.svg';
import light_plus_icon from '../assets/icon/light-plus-icon.svg';
import burger_bar from '../assets/icon/burger-bar.png'
import light_burger_bar from '../assets/icon/light-burger-bar.png'
import close_menu from '../assets/icon/close-menu.png'
import default_avatar from '../assets/img/default-avatar.png'

const API_URL = import.meta.env.VITE_API_URL;

export default function Header({bgImage, lightHeader}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API_URL}/api/auth/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(() => setUser(null));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="top-section" className={`relative ${bgImage === 1 ? 'home1' : ''} ${bgImage === 2 ? 'home2' : ''}`}>
      <header id="header" className={`mx-auto pt-[30px] pb-[29px] flex justify-between items-center ${lightHeader ? 'text-[#D8DCFF]' : 'text-[#8B8B8B]'} tracking-[0.1em] max-w-[71.5rem]
        max-lg:flex-row max-lg:items-center max-lg:p-6
        max-md:px-0
        max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:p-4 max-sm:pb-0`}>
        <div id="left-header" className='min-w-[140px] pt-[11px] mr-[20px] max-md:w-[30%] max-lg:w-[30%] max-lg:pt-0 max-md:flex  max-lg:mr-0 max-md:pt-0 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full max-sm:mr-0 max-sm:my-5'>
          <img src={lightHeader ? light_logo : dark_logo} alt="top-logo-img" className='max-sm:w-[50%]' />
          <div className={`max-sm:block sm:hidden ${lightHeader ? '' : 'border border-3 rounded-lg border-sky-800'}  min-w-[2rem] order-first`} onClick={toggleMenu}>
            <img src={lightHeader ? light_burger_bar : burger_bar} alt="burger_bar_icon" className={`w-10 ${isMenuOpen ? 'hidden' : 'block'}`}/>
          </div>
          {!user && (
              <Link
                to="/login"
                className={`max-sm:block sm:hidden ${lightHeader ? 
                'border-white text-white hover:bg-white hover:text-blue-900' : 
                'border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white'} 
                border-3 px-4 py-2 rounded-lg transition-colors font-bold text-center`}
              >
                LOGIN
              </Link>
            )}
          {user && (
              <div className="relative max-sm:block sm:hidden">
                <img
                  src={user.avatar || default_avatar}
                  className="rounded-full cursor-pointer size-12"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl p-2 text-sm z-50 transform origin-top-right transition duration-200 ease-out animate-in fade-in zoom-in">
                    <Link to="/profile" className="block px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition duration-150 ease-in-out">Profile</Link>
                    <Link to="/" className="block px-3 py-2 hover:bg-gray-100">Settings</Link>
                    <hr className="my-1"/>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
        </div>

        <nav id="right-header"
          className={`flex gap-[20px] text-[16px] font-[500] justify-center
            max-lg:gap-4  max-lg:gap-[12px]
            max-md:flex-row max-md:w-full max-md:pl-4
            max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-start max-sm:pl-0
            max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:h-full max-sm:w-[70%]
            max-sm:bg-white max-sm:shadow-xl max-sm:z-50 max-sm:pt-24
            max-sm:transition-transform max-sm:duration-300 ${isMenuOpen ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'}`}>
          
          
          <div className="hidden max-sm:flex items-center gap-2 px-2 py-3 absolute top-5 p-1" onClick={toggleMenu}>
            <img src={close_menu} className='w-[18%] h-[50%] p-2 border border-3 rounded-lg border-sky-800' />
            <img src={dark_logo} alt="top-logo-img" className='w-[80%]' />
          </div>
          <ul id="navbar" className="flex justify-between items-center gap-[40px] list-none 
            max-lg:gap-[12px] max-lg:text-[15px] max-md:flex-row max-md:gap-4 
            max-sm:flex-col max-sm:w-full max-sm:gap-1 max-sm:px-2 max-sm:pt-8">
            
            <Link to='/' className={`max-lg:text-[13px] max-lg:pr-[8px] max-md:text-[14px] max-sm:text-[15px] font-semibold flex gap-[5px]  
              max-sm:justify-center max-sm:bg-[var(--pink-color)] max-sm:mx-2
              max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:w-full
              ${lightHeader ? 'text-white' : 'text-[var(--bold-text-color)]'}`}>
              Home <img src={lightHeader ? light_plus_icon : plus_icon} className="pt-1" />
            </Link>
            
            <Link to='/about' className="max-lg:text-[13px] max-sm:text-[15px] max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full">
              About
            </Link>

            <li className="max-lg:text-[13px] max-sm:text-[15px] max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full">
              Service
            </li>

            <li className="max-lg:text-[13px] max-sm:text-[15px] max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full">
              Gallery
            </li>

            <li className="max-lg:text-[13px] max-sm:text-[15px] max-sm:border max-sm:border-pink-200 max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full">
              Blog
            </li>
            {!user && (
              <Link
                to="/login"
                className={`${lightHeader ? 
                'border-white text-white hover:bg-white hover:text-blue-900' : 
                'border-pink-400 text-pink-500 hover:bg-pink-400 hover:text-white'} 
                border-3 px-4 py-2 rounded-full transition-colors font-bold
                max-lg:px-2 max-lg:py-1 max-lg:text-[13px] 
                max-sm:text-[15px] 
                max-md:px-1 max-md:py-0 max-md:border-2 max-md:font-semibold
                max-sm:mx-2 max-sm:rounded-2xl max-sm:py-4 max-sm:text-center max-sm:w-full max-sm:mt-4`}
              >
                LOGIN
              </Link>
            )}
            {user && (
              <div className="relative">
                <img
                  src={user.avatar || default_avatar}
                  className="size-12 rounded-full cursor-pointer max-lg:size-10 max-md:size-8 max-sm:hidden"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 text-sm z-50 border border-gray-200">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/settings" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      Settings
                    </Link>
                      <hr className="my-1 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
                      >
                      Log Out
                    </button>
                  </div>
                )}

              </div>
            )}
          </ul>
          
          <button id="contact-button" className='text-white px-[42px] h-[52px] rounded-full bg-[var(--pink-color)] font-[600] border-none
            max-lg:px-[25px] max-lg:h-[42px] max-lg:text-[13px]
            max-md:text-[12px] max-md:px-[12px] max-md:h-[40px]
            max-sm:h-[40px] max-sm:w-[80%] max-sm:text-[16px]'>
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
