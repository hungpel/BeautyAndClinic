import React from 'react'
import TitleAndDesc from '../../../components/TitleAndDesc'
import main_about from '../../../assets/img/about/main-about.png'
import play_btn from '../../../assets/icon/play-button.svg'

function MainAbout() {
  return (
    <section id='main-about' className='max-w-[71.25rem] mx-auto pt-20.5 pb-12 text-center lg:text-left items-center lg:items-start flex flex-col gap-3'>
        <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%] pt-[5px]">
            About
        </p>

        <h1 className="text-[2.25rem] max-w-[46rem] text-[var(--bold-text-color)] font-semibold leading-[125%] tracking-[0.02rem]
        max-lg:text-[1.8rem] max-lg:max-w-[32rem] max-sm:text-[1.5rem] max-sm:max-w-[20rem]">
            We are a leading beauty clinic that has been around since 2002
        </h1>
        <p className="font-normal text-[#8B8B8B] max-w-[42.5rem] py-[0.5rem] tracking-[0.1rem] whitespace-pre-line max-lg:max-w-[650px] max-lg:text-[0.9rem] max-lg:py-4 max-sm:max-w-[90%] max-sm:text-[0.9rem] max-sm:py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </p>
        <div className='relative'>
            <img src={main_about} alt="main_about" className='w-full pt-11 max-sm:pt-2' />
            <img src={play_btn} alt="play-btn" className='absolute size-[5.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4' />
        </div>

    </section>
  )
}

export default MainAbout
