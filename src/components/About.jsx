import React from 'react';
import play_btn from "../assets/icon/Play_button.svg";
import about_img from "../assets/img/about_img.png";

function About() {
  return (
    <section id="about-us-section" className="max-w-[1440px] mx-auto relative max-lg:px-6 max-sm:px-4">
      <div id="about-us" className="relative flex flex-row justify-between items-end gap-5 text-[#8B8B8B] py-[3.6rem] max-w-[71.25rem] mx-auto max-lg:flex-col max-lg:items-center max-lg:gap-10 max-sm:py-10">
        
        <div id="about-content" className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
          <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%]">About Us</p>
          <h1 className="text-[2.25rem] text-[var(--bold-text-color)] font-semibold pt-2 pb-2 tracking-[0.02rem] max-lg:text-[1.9rem] max-sm:text-[1.5rem]">We are the best beauty clinic</h1>
          <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
          <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
          <div id="about-btn" className="flex gap-[2.7rem] mt-[2.2rem] tracking-[0.1rem] font-semibold max-lg:justify-center max-lg:gap-8 max-sm:gap-10">
            <button id="learn-more" className="text-white py-4 px-12 rounded-full bg-[var(--pink-color)] border-none cursor-pointer max-sm:w-[70%]">Learn More</button>
            <button id="watch-video" className="flex items-center gap-[0.9rem] bg-none border-none cursor-pointer max-lg:justify-center max-sm:gap-0">
              <img src={play_btn} alt="play-button" className="max-sm:w-10" />
              <p>Watch Video</p>
            </button>
          </div>
        </div>

        <div id="about-img" className="mb-1 mr-[0.1rem] max-lg:flex max-lg:justify-center">
          <img src={about_img} alt="about-img" className="max-lg:w-[100%] max-sm:w-[90%]" />
        </div>
      </div>
    </section>
  );
}

export default About;
