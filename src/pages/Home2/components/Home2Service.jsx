import React from 'react'
import TitleAndDesc from '../../../components/TitleAndDesc';
import service_card_img_1 from '../../../assets/img/service/home-service-card-1.png';
import service_card_img_2 from '../../../assets/img/service/home-service-card-2.png';
import service_card_img_3 from '../../../assets/img/service/home-service-card-3.png';
import angle_double_right from '../../../assets/icon/angle-double-right.svg'

function Home2Service() {
  return (
    <section id="home2-service" className="text-center text-[#8B8B8B] pt-39 pb-32 max-w-[71.25rem] mx-auto max-lg:py-16 max-sm:py-12">
        <div id="service-info" className="flex flex-col items-center justify-center mb-12 max-sm:mb-8">
            <TitleAndDesc p1={"Main Services"} h1={"Our focus services"} p2={"Lorem ipsum dolor sit amet."} />
        </div>

        <div id="service-detail" className="flex flex-row justify-around pt-2 px-22 gap-4 h-[19.3rem] max-lg:h-auto max-lg:flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center">
            <div className="service-card flex flex-col items-start text-left gap-2 w-[16.3125rem] px-9 py-[2rem] border rounded-3xl bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_1} alt="" className="w-[4rem] pb-3 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] tracking-[0.01rem] max-lg:text-[16px] max-sm:text-[15px]">Beauty consultation</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <p className='flex pt-3 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>

            <div className="service-card flex flex-col items-start text-left gap-2 w-[16.3125rem] px-9 py-[2rem] border border-[var(--bold-text-color)] rounded-3xl bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_2} alt="" className="w-[4rem] pb-3 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] tracking-[0.01rem] max-lg:text-[16px] max-sm:text-[15px]">Skin treatments</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <p className='flex pt-3 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>

            <div className="service-card flex flex-col items-start text-left gap-2 w-[16.3125rem] px-9 py-[2rem] border rounded-3xl bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_3} alt="" className="w-[4rem] pb-3 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] tracking-[0.01rem] max-lg:text-[16px] max-sm:text-[15px]">Beauty product</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <p className='flex pt-3 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>
        </div>
    </section>
  )
}

export default Home2Service
