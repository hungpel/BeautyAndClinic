import React from 'react'
import phone_volume from '../../../assets/icon/phone-volume.svg'

function Home2RequestCall() {
  return (
    <section id='home2-request-call' className="max-w-[71.25rem] mx-auto flex flex-col 
    md:flex-row items-center md:items-start md:items-center justify-between gap-5 lg:gap-10 pt-15 pb-28">
      
        <div className="max-w-[24.4375rem] text-center md:text-left">
            <h2 className="text-4xl pl-0.5 font-semibold tracking-[0.03rem] leading-[125%] text-[var(--bold-text-color)]">
                Request call services
            </h2>
            <p className="text-[#8B8B8B] mt-4.5 pb-4 tracking-[0.1rem]">
                Lorem ipsum dolor sit amet, consect adipiscing elit{" "}
                <a className="font-semibold text-[var(--bold-text-color)] pl-0.5" href="#">
                    Contact Us.
                </a>
            </p>
        </div>

        <div className="flex flex-col  items-center md:items-end justify-end">
            <div className="flex items-center w-full lg:w-[41.125rem]  max-w-full border border-[#e7e7fc] rounded-3xl overflow-hidden">
                <input
                    type="text"
                    placeholder="Insert your phone number here ..."
                    className="flex-1 py-5 px-9 tracking-[0.1rem] text-[#C5C5C5] placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-pink-500 text-white text-2xl px-9.5 py-5">
                    <img src={phone_volume} alt="phone_volume" className='w-6 h-6'/>
                </button>
            </div>
            <span className="text-[#8B8B8B] tracking-[0.08rem] text-xs mt-2 italic">
                Toll free for our coverage areas.
            </span>
        </div>

    </section>
  )
}

export default Home2RequestCall
