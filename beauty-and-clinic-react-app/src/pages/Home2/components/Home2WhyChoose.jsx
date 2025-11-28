import React from 'react'
import why_choose_img_1 from '../../../assets/img/why-choose/why-choose-img-1.png'
import why_choose_img_2 from '../../../assets/img/why-choose/why-choose-img-2.png'
import why_choose_img_3 from '../../../assets/img/why-choose/why-choose-img-3.png'
import why_choose_img_4 from '../../../assets/img/why-choose/why-choose-img-4.png'




function Home2WhyChoose() {
  return (
    <section id='home2-why-choose' className='relative'>
        <div className='max-w-[1440px] mx-auto  flex pt-70 pb-50 px-30 justify-between items-start text-white
        max-[1440px]:pt-50 max-[1440px]:gap-5
        max-[1024px]:pt-30 max-[1024px]:px-10
        max-[769px]:pt-50
        max-md:flex-col max-md:pt-30 max-md:items-center
        max-xs:pt-20'>
            <div id="why-choose-title" className='flex-1 max-w-[31rem] flex flex-col gap-5 items-start pt-3
                max-lg:pt-4 max-lg:pl-2 max-lg:items-center'>
                <h1 className="text-4xl font-semibold max-w-[30rem] tracking-[0.05rem] leading-[125%]
                max-[1024px]:text-[38px] max-[1024px]:max-w-[12rem] 
                max-[768px]:max-w-[42rem] 
                max-[480px]:pt-0 max-[480px]:text-[26px] max-[480px]:leading-[1.3]">Why choosing us?</h1>
                <h3 className="text-[#D8DCFF] pl-0.5 font-medium max-w-[30.375rem] tracking-[0.1rem] 
                max-lg:hidden
                max-[768px]:text-[15px] max-[480px]:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</h3>
            </div>
            <div id="why-choose-content" className='flex-1 max-w-[30rem] mr-10 grid grid-cols-2 gap-x-20 gap-y-10 justify-items-center 
            max-md:mr-0
            max-sm:gap-x-8 max-sm:gap-y-4'>
                <div className='flex gap-2'>
                    <img src={why_choose_img_1} alt="why_choose_img_1" className='max-lg:size-16'/>
                    <div className='flex flex-col justify-start'>
                        <h2 className='text-4xl font-semibold leading-[125%] max-lg:text-3xl max-sm:text-2xl'>100%</h2>
                        <p className='text-[var(--pink-color)] font-semibold leading-[125%] max-sm:text-sm'>trusted clinic</p>
                    </div>                
                </div>
                <div className='flex gap-2'>
                    <img src={why_choose_img_2} alt="why_choose_img_2" className='max-lg:size-16'/>
                    <div className='flex flex-col justify-around'>
                        <h2 className='text-4xl font-semibold leading-[125%] max-lg:text-3xl max-sm:text-2xl'>99%</h2>
                        <p className='text-[#D8DCFF] font-semibold leading-[125%] max-sm:text-sm'>customer love</p>
                    </div>                
                </div>
                <div className='flex gap-2'>
                    <img src={why_choose_img_3} alt="why_choose_img_3" className='max-lg:size-16'/>
                    <div className='flex flex-col justify-around'>
                        <h2 className='text-4xl font-semibold leading-[125%] max-lg:text-3xl max-sm:text-2xl'>75+</h2>
                        <p className='text-[#D8DCFF] font-semibold leading-[125%] max-sm:text-sm'>asian brand</p>
                    </div>                
                </div>
                <div className='flex gap-2'>
                    <img src={why_choose_img_4} alt="why_choose_img_4" className='max-lg:size-16'/>
                    <div className='flex flex-col justify-around'>
                        <h2 className='text-4xl font-semibold leading-[125%] max-lg:text-3xl max-sm:text-2xl'>1.200+</h2>
                        <p className='text-[#D8DCFF] font-semibold leading-[125%] max-sm:text-sm'>licensed worker</p>
                    </div>                
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Home2WhyChoose
