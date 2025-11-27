import React from 'react'
import TitleAndDesc from '../../../components/TitleAndDesc';
import blog_card_img_1 from '../../../assets/img/blog/blog-card-img-1.png';
import blog_card_img_2 from '../../../assets/img/blog/blog-card-img-2.png';
import blog_card_img_3 from '../../../assets/img/blog/blog-card-img-3.png';
import angle_double_right from '../../../assets/icon/angle-double-right.svg'


function Home2Blog() {
  return (
    <section id="home2-blog" className="text-center text-[#8B8B8B] pt-38 pb-32 max-w-[71.25rem] mx-auto max-lg:py-16 max-sm:py-12">
        <div id="blog-info" className="flex flex-col items-center justify-center mb-12 max-sm:mb-8">
            <TitleAndDesc p1={"The Blog"} h1={"Our latest news"} p2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
        </div>

        <div id="blog-detail" className="flex flex-row justify-around pt-5 gap-10 h-[33.9375rem] max-lg:h-auto max-lg:flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center">
            <div className="blog-card relative flex flex-col items-start text-left gap-2 w-[21.6875rem] pl-9 pr-6 py-[2rem] rounded-3xl bg-white 
            max-lg:w-[18rem] max-lg:shadow-lg max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={blog_card_img_1} alt="" className="absolute top-0 left-0 w-full pb-3 max-sm:pb-6" />
                <h3 className="pt-68 pb-1 text-[18px] font-semibold text-[var(--bold-text-color)] leading-[125%] tracking-[0.01rem] 
                max-lg:pt-48 max-lg:text-[16px] max-sm:text-[15px]">How much does a consultation cost at our clinic?</h3>
                <p className="text-[14px] max-w-[16.9375rem] tracking-[0.09rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                <p className='flex pt-4.5 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>

            <div className="blog-card relative flex flex-col items-start text-left gap-2 w-[21.6875rem] pl-9.5 pr-6 py-[2rem] rounded-3xl bg-white 
            max-lg:w-[18rem] max-lg:shadow-lg max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={blog_card_img_2} alt="" className="absolute top-0 left-0 w-full pb-3 max-sm:pb-6" />
                <h3 className="pt-68 pb-1 text-[18px] font-semibold text-[var(--bold-text-color)] leading-[125%] tracking-[0.01rem] 
                max-lg:pt-48 max-lg:text-[16px] max-sm:text-[15px]">Watch out! don't choose the wrong beauty product</h3>
                <p className="text-[14px] max-w-[16.9375rem] tracking-[0.09rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                <p className='flex pt-4.5 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>

            <div className="blog-card relative flex flex-col items-start text-left gap-2 w-[21.6875rem] pl-10 pr-6 py-[2rem] rounded-3xl bg-white 
            max-lg:w-[18rem] max-lg:shadow-lg max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={blog_card_img_3} alt="" className="absolute top-0 left-0 w-full pb-3 max-sm:pb-6" />
                <h3 className="pt-68 pb-1 text-[18px] font-semibold text-[var(--bold-text-color)] leading-[125%] tracking-[0.01rem] 
                max-lg:pt-48 max-lg:text-[16px] max-sm:text-[15px]">About skin care you need to know</h3>
                <p className="text-[14px] max-w-[16.9375rem] tracking-[0.09rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                <p className='flex pt-4.5 gap-2 text-sm text-[var(--pink-color)] font-semibold leading-[125%]'>Learn more <img src={angle_double_right} alt="angle-double-right" /></p>
            </div>
        </div>
    </section>
  )
}

export default Home2Blog
