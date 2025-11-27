import React from 'react'
import slogan_bg from '../../../assets/img/about/slogan-bg.png'
import slogan_bg_mask from '../../../assets/img/about/slogan-bg-mask.png'
import main_about from '../../../assets/img/about/main-about.png'

function AboutSlogan() {
  return (
    <section id='about-slogan' className='flex flex-col items-center text-center pt-40 pb-43 mt-30 gap-3 -mx-8 max-[640px]:-mx-4'
          style={{ backgroundImage: `url(${slogan_bg_mask}), url(${slogan_bg})`,
                    backgroundPosition: "center, center",
                    backgroundSize: "cover, cover",
                    backgroundRepeat: "no-repeat, no-repeat",  }}>
        <p className="text-[#ABB4FF] font-semibold text-base leading-[125%] pt-[2px]">
            Business Slogan
        </p>

        <h1 className="text-[2.25rem] max-w-[38rem] text-white font-semibold leading-[125%] tracking-[0.02rem] pt-[2px] max-lg:text-[1.8rem] max-lg:max-w-[24rem] max-sm:text-[1.5rem] max-sm:max-w-[20rem]">
            Best responsibility and service for our customers
        </h1>
        <p className="font-normal text-[#CACACA] max-w-[42.5rem] py-[0.3rem] tracking-[0.1rem] whitespace-pre-line max-lg:max-w-[650px] max-lg:text-[0.9rem] max-lg:py-4 max-sm:max-w-[90%] max-sm:text-[0.9rem] max-sm:py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </p>
    </section>
  )
}

export default AboutSlogan;
