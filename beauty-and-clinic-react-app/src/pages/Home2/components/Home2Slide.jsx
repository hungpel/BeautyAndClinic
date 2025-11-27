import React from 'react'
import light_play_btn from '../../../assets/icon/light-play-btn.png'

function Home2Slide() {
  return (
    <section id='home2-slide' className='text-white max-w-[71.25rem] mx-auto'>
        <div id="slide-content" className="flex flex-row justify-between py-[7.5rem] 
        max-[1150px]:py-4 max-[1150px]:px-4 max-[1150px]:gap-4 
        max-[768px]:flex-col max-[768px]:text-center max-[768px]:items-center max-[768px]:px-4 max-[768px]:py-0">
            <div id="slide-text" className="flex flex-col gap-2 items-start flex-1 pt-14 
            max-lg:pt-4 max-lg:pl-2 max-md:items-center">
                <h1 className="text-[3rem] font-semibold max-w-[30rem] leading-[125%]
                max-[1024px]:text-[38px] 
                max-[768px]:max-w-[42rem] 
                max-[480px]:pt-0 max-[480px]:text-[24px] max-[480px]:leading-[1.3]">Your beauty center place</h1>
                <h3 className="text-[#D8DCFF] pt-0.5 font-medium max-w-[31.25rem] tracking-[0.1rem] 
                max-[768px]:text-[15px] max-[520px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</h3>
                <button id="more-detail" className="text-white font-semibold mt-[2.1rem] tracking-[0.1rem] border rounded-xl px-[1.9rem] h0-[52px] cursor-pointer
                max-[768px]:px-6 max-[768px]:h-12 max-[768px]:mt-2 
                max-[480px]:mt-4">More Details</button>
            </div>
            <div className='flex-1 flex justify-center items-center gap-7 pr-2 pt-13 max-[768px]:pt-0 max-[768px]:hidden'>
                <img id="home2-slide-img" src={light_play_btn} alt="main-slide-img" className="w-41 max-[768px]:w-20" />
                <p className='font-semibold tracking-[0.1rem]'>Tour Video</p>
            </div>
        </div>
    </section>
  )
}

export default Home2Slide
