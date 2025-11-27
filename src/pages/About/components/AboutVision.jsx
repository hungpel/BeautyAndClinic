import React from 'react'
import about_vision from '../../../assets/img/about/about-vision.png'

function AboutVision() {
  return (
    <section id='about-vision' className='flex flex-row justify-between items-center gap-5 text-[#8B8B8B] pt-28 max-w-[71rem] mx-auto max-lg:flex-col max-lg:gap-10 max-sm:py-10'>
        <div id="about-vision-img" className="mb-1 max-lg:flex max-lg:justify-center">
            <img src={about_vision} alt="about-vision" className="max-lg:w-[100%] max-sm:w-[90%]" />
        </div>
        <div id="about-vision-content" className="max-w-[29.6875rem] max-lg:text-center max-lg:flex max-lg:flex-col max-lg:order-first max-lg:items-center">
            <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%]">Our Vision</p>
            <h1 className="text-[2.25rem] text-[var(--bold-text-color)] font-semibold pt-3 pb-2 tracking-[0.02rem] leading-[125%] max-lg:text-[1.9rem] max-sm:text-[1.5rem]">Be the best and go international</h1>
            <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
            <p className="font-normal max-w-[483px] pt-[0.3rem] pb-[1.2rem] tracking-[0.1rem] max-lg:max-w-[90%] max-sm:text-[0.9rem]">Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
        </div>
    </section>
  )
}

export default AboutVision
