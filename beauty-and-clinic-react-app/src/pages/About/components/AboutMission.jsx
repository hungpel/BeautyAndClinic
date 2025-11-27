import React from 'react'
import about_mission from '../../../assets/img/about/about-mission.png'

function AboutMission() {
  return (
    <section id='about-mision' className='flex flex-row justify-between items-center gap-5 text-[#8B8B8B] pt-26 max-w-[71.25rem] mx-auto max-lg:flex-col max-lg:gap-10 max-sm:py-10'>
        <div id="about-mission-content" className="max-w-[33rem] max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
            <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%]">Our Mission</p>
            <h1 className="text-[2.25rem] text-[var(--bold-text-color)] font-semibold pt-3 pb-2 tracking-[0.02rem] leading-[125%] max-lg:text-[1.9rem] max-sm:text-[1.5rem]">Special & premium service to any clients</h1>
            <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
            <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
        </div>
        <div id="about-mission-img" className="mb-1 max-lg:flex max-lg:justify-center">
            <img src={about_mission} alt="about-vision" className="max-lg:w-[100%] max-sm:w-[90%]" />
        </div>
    </section>
  )
}

export default AboutMission
