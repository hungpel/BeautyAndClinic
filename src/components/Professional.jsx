import React from 'react'
import professional_card_img_1 from '../assets/img/professional_card_img_1.png'
import professional_card_img_2 from '../assets/img/professional_card_img_2.png'
import professional_card_img_3 from '../assets/img/professional_card_img_3.png'
import twitter_icon from '../assets/icon/twitter_icon.svg'
import facebook_icon from '../assets/icon/facebook_icon.svg'
import ig_icon from '../assets/icon/instagram_icon.svg'
import TitleAndDesc from './TitleAndDesc'

function Professional() {
  return (
<section id="professional-team" className="text-center text-[#8B8B8B] py-20 max-w-[71.25rem] mx-auto max-lg:py-16 max-sm:pt-12 max-sm:pb-0">
  <div id="professional-team-info" className="flex flex-col gap-[0.7rem] items-center pt-[0.5rem] mb-12 max-sm:mb-8">
    <TitleAndDesc p1="Professional Teams" h1="The Professional expert" p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."/>
  </div>

  <div id="professional-team-detail" className="flex flex-row justify-around flex-wrap pt-[4.6rem] h-[39.125rem] max-lg:h-auto max-lg:gap-0 max-lg:pt-10 max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:pt-0">

    <div className="professional-card flex flex-col items-center gap-[0.7rem] w-[16.875rem] h-[38rem] pt-8 max-lg:rounded-[2.625rem] max-lg:shadow-[0_25px_50px_rgba(228,231,255,0.5)] max-lg:w-[20rem] max-lg:h-auto max-lg:pt-6 max-sm:w-full max-sm:max-w-[24rem]">
      <img className="pt-10 pb-10 max-lg:w-[10rem] max-sm:w-[9rem] max-sy-2b-2" src={professional_card_img_1} alt="" />
      <p className="font-semibold text-[var(--pink-color)]">Surgeon</p>
      <h3 className="text-[1.125rem] text-[var(--bold-text-color)] font-semibold max-lg:text-[1rem]">Briyan Nevalli</h3>
      <p className="text-[0.875rem] text-center tracking-[0.1rem] pt-2 w-[16.875rem] max-lg:w-[14rem] max-sm:text-[0.8rem] max-sm:w-[20rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
      <div className="flex flex-row gap-[0.3rem] justify-center pt-[1.7rem] items-center max-sm:pt-[1rem]">
        <img src={twitter_icon} /><img src={facebook_icon} /><img src={ig_icon} />
      </div>
    </div>

    <div className="professional-card flex flex-col items-center gap-[0.7rem] w-[26.5rem] h-[38rem] pt-8 rounded-[2.625rem] shadow-[0_25px_50px_rgba(228,231,255,0.5)] max-lg:w-[20rem] max-lg:h-auto max-lg:pt-6 max-sm:w-full max-sm:max-w-[24rem]">
      <img className="pt-10 pb-10 max-lg:w-[10rem] max-sm:w-[9rem] max-sm:py-2" src={professional_card_img_2} alt="" />
      <p className="font-semibold text-[var(--pink-color)]">Dermatologist</p>
      <h3 className="text-[1.125rem] text-[var(--bold-text-color)] font-semibold max-lg:text-[1rem]">Bella Sebastian</h3>
      <p className="text-[0.875rem] text-center tracking-[0.1rem] pt-2 w-[16.875rem] max-lg:w-[14rem] max-sm:text-[0.8rem] max-sm:w-[20rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
      <div className="flex flex-row gap-[0.3rem] justify-center pt-[1.7rem] items-center max-sm:pt-[1rem]">
        <img src={twitter_icon} /><img src={facebook_icon} /><img src={ig_icon} />
      </div>
    </div>

    <div className="professional-card flex flex-col items-center gap-[0.7rem] w-[16.875rem] h-[38rem] pt-8 max-lg:rounded-[2.625rem] max-lg:shadow-[0_25px_50px_rgba(228,231,255,0.5)] max-lg:w-[20rem] max-lg:h-auto max-lg:pt-6 max-sm:w-full max-sm:max-w-[24rem]">
      <img className="pt-10 pb-10 max-lg:w-[10rem] max-sm:w-[9rem] max-sm:py-2" src={professional_card_img_3} alt="" />
      <p className="font-semibold text-[var(--pink-color)]">Stylist expert</p>
      <h3 className="text-[1.125rem] text-[var(--bold-text-color)] font-semibold max-lg:text-[1rem]">Lilly Adams</h3>
      <p className="text-[0.875rem] text-center tracking-[0.1rem] pt-2 w-[16.875rem] max-lg:w-[14rem] max-sm:text-[0.8rem] max-sm:w-[20rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
      <div className="flex flex-row gap-[0.3rem] justify-center pt-[1.7rem] items-center max-sm:pt-[1rem]">
        <img src={twitter_icon} /><img src={facebook_icon} /><img src={ig_icon} />
      </div>
    </div>

  </div>
</section>

  )
}

export default Professional
