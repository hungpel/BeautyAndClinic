import React from 'react'
import home2_about from '../../../assets/img/about/home2-about.png'


function Home2About() {
  return (
    <section id='home2-about' className='flex flex-row justify-between items-center pt-120 text-[#8B8B8B] max-w-[70.5rem] mx-auto 
    max-[1441px]:pt-80  
    max-xl:pt-60
    max-lg:flex-col max-lg:gap-10 max-lg:pt-65
    max-md:pt-40
    max-sm:py-25 max-sm:gap-2'>
        <div id="home2-about-img" className="w-[42%] max-lg:flex max-lg:justify-center">
            <img src={home2_about} alt="about-vision" className="w-[100%] max-lg:w-[100%] max-sm:w-[90%]" />
        </div>
        <div id="home2-about-content" className="max-w-[29.6875rem] pt-8 max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
            <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%]">About Us</p>
            <h1 className="text-[2.25rem] text-[var(--bold-text-color)] font-semibold pt-3 pb-2 tracking-[0.02rem] leading-[125%] max-lg:text-[1.9rem] max-sm:text-[1.5rem]">We are the best beauty clinic</h1>
            <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
            <div id="about-btn" className="flex mt-[1.75rem] tracking-[0.1rem] font-semibold max-lg:justify-center">
                <button id="learn-more" className="text-white py-4 px-12 rounded-full bg-[var(--pink-color)] border-none cursor-pointer max-sm:w-[100%]">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default Home2About
