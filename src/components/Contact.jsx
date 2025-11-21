import contact_us_img from "../assets/img/contact-us-img.png";
import TitleAndDesc from "./TitleAndDesc";

export default function Contact() {
  return (
  <section id="contact-us-section" className="relative max-w-[1440px] mx-auto">
    <div id="contact-us" className="flex justify-between items-center text-[#8B8B8B] py-[6.6rem] pb-8 max-w-[71.25rem] mx-auto max-lg:flex-col max-lg:text-center max-lg:py-12">
      
      <img 
        src={contact_us_img}
        alt="contact_us_img"
        className="max-w-[32.5rem] h-full object-contain mt-10 max-lg:max-w-[22rem] max-sm:max-w-[18rem]"
      />

      <div id="contact-info" className="max-w-[32.5rem] max-lg:mt-8">
        <p className="text-[var(--pink-color)] font-semibold text-[1rem] leading-[125%] pt-2 max-lg:text-center">Contact Us</p>

        <h1 className="text-[2.25rem] max-w-[25rem] text-[var(--bold-text-color)] font-semibold leading-[125%] py-[10px] tracking-[0.04rem] max-lg:mx-auto max-lg:text-[1.9rem]">
          Send your inquiry to our expert team
        </h1>

        <p className="py-[10px] pb-4 tracking-[0.1rem] max-lg:mx-auto">Lorem ipsum dolor sit amet nulla turapis tellus.</p>

        <form className="w-full max-w-[36rem] flex flex-col gap-[2.2rem] py-8 tracking-[0.1rem] max-lg:items-center max-sm:gap-6">
          
          <div className="flex gap-8 pb-[0.1rem] max-sm:flex-col max-sm:w-full">
            <input type="text" placeholder="First name" className="w-full h-[3.9rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6" />
            <input type="text" placeholder="Last name" className="w-full h-[3.9rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-8" />
          </div>

          <input type="email" placeholder="Email address" className="w-full h-[4.1rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6" />

          <input type="text" placeholder="Subject message" className="w-full h-[3.9rem] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6" />

          <textarea placeholder="Your inquiry here" rows="8" className="w-full h-[240px] border border-[#D9DDFE] rounded-[1rem] text-[1rem] px-6 py-7 mt-[0.1rem]"></textarea>

          <button type="submit" className="text-white bg-[var(--pink-color)] px-14 py-4 w-fit rounded-full text-[1rem] mt-5 max-sm:w-full max-sm:px-0">
            Send Message
          </button>

        </form>
      </div>
    </div>
  </section>

  );
}
