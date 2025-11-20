import slide_img from '../assets/img/slide_img.png';

function HomeSlide() {
    return (
        <div id="main-slider" className="text-[#8B8B8B] py-12 max-w-[71.25rem] mx-auto tracking-[0.1rem] max-[1024px]:p-4">
            <div id="slide-content" className="flex flex-row justify-between py-[4.5rem] max-[1024px]:py-4 max-[1024px]:px-4 max-[1024px]:gap-4 max-[768px]:flex-col max-[768px]:text-center max-[768px]:items-center max-[768px]:px-4">
                <div id="slide-text" className="flex flex-col gap-2 items-start flex-1 pl-10 pt-14 
                max-lg:pt-4 max-lg:pl-2 max-md:items-center">
                    <h1 className="text-[3rem] text-[var(--bold-text-color)] font-semibold max-w-[27rem] tracking-[0.05rem] leading-[125%] max-[1024px]:text-[38px] max-[768px]:max-w-[42rem] max-[480px]:pt-8 max-[480px]:text-[26px] max-[480px]:leading-[1.3]">Clinic & beauty consultant</h1>
                    <h3 className="text-[var(--bold-text-color)] font-medium max-w-[29.5rem] max-[768px]:text-[15px] max-[480px]:text-[14px]">It is a long established fact that a reader will be by the readable content of a page.</h3>
                    <button id="more-detail" className="text-white mt-[25px] rounded-full px-[41px] h-[58px] cursor-pointer bg-[var(--pink-color)] border-none max-[768px]:px-6 max-[768px]:h-12 max-[480px]:mt-4">More Details</button>
                </div>
                <img id="slide-img" src={slide_img} alt="main-slide-img" className="flex-1 max-[1024px]:w-[420px] max-[768px]:w-[30rem] max-[768px]:mt-5 max-[480px]:w-[24rem]" />
            </div>

            <div id="slide-button" className="flex flex-row gap-2 items-center justify-center mt-8 ml-[1px] pt-[1.9rem]">
                <button id="prv-slide-btn" className="w-4 h-[0.1rem] bg-[#EEEEEE] rounded-[0.2rem] border-none cursor-pointer"></button>
                <button id="this-slide-btn" className="w-6 h-2 bg-[#414880] rounded-[0.2rem] border-none cursor-pointer"></button>
                <button id="next-slide-btn" className="w-4 h-[0.1rem] bg-[#EEEEEE] rounded-[0.2rem] border-none cursor-pointer"></button>
            </div>
        </div>
    );
}

export default HomeSlide;
