import footer_logo from "../assets/logo/footer-logo.png";
import right_icon from "../assets/icon/caret-right.svg";
import facebook_f from "../assets/icon/facebook-f.svg";
import twitter from "../assets/icon/twitter.svg";
import linkedin from "../assets/icon/linkedin-in.svg";
import youtube from "../assets/icon/youtube.svg";
import ig from "../assets/icon/instagram.svg";
import arrow_up from "../assets/icon/arrow-up.svg";
import { useState, useEffect } from "react";


export default function Footer() {
   const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="footer-section">
      <div id="site-footer" className="pt-16 max-lg:pt-1 text-[#D7DBFF] max-w-[71.25rem] mx-auto max-lg:">
        <div className="footer-top flex flex-wrap justify-between gap-[2.2rem] mt-40 max-lg:mt-12 max-sm:mt-0">
          <div id="footer_sidebar_1" className="flex-[2] max-lg:w-full max-sm:flex-none">
            <img src={footer_logo} alt="footer_logo" className="pt-4 pb-[2.1rem] max-lg:pl-8 max-sm:py-4"/>
            <div className="footer-desc pl-8 flex flex-col gap-[0.2rem] tracking-[0.11rem]">
              <p className="pb-5"><b>Beautice</b> is a Beauty Clinic WordPress Theme.</p>
              <p className="italic font-medium text-[14px]">Baker Steet 101, NY, United States.</p>
              <div className="footer-contact flex gap-[2.2rem] italic max-lg:gap-2">
                <a href="tel:+5215698966" className="font-medium text-[14px] no-underline">+521 569 8966.</a>
                <a href="mailto:mail@company.com" className="font-medium text-[14px] underline underline-offset-2 decoration-[1px]">mail@company.com.</a>
              </div>
            </div>
          </div>

          <div id="footer_sidebar_2" className="flex flex-col flex-1 tracking-[0.1rem] max-lg:justify-end max-sm:justify-between max-sm:pl-10 max-sm:pt-8">
            <h3 className="pb-5 pl-[3.3rem] font-semibold text-[1.125rem] text-white max-lg:pl-0 max-lg:pb-1 max-sm:text-[1rem]">Pages</h3>
            <ul className="list-none p-0 pl-[3.3rem] pt-2 flex flex-col gap-[0.7rem] max-lg:pl-0 max-lg:items-start max-sm:gap-[0.5rem] max-sm:text-base">
              {[
                { href: "#header", label: "Home" },
                { href: "#about-us", label: "About" },
                { href: "#core-service", label: "Services" },
                { href: "#header", label: "Gallery" },
                { href: "#professional-team", label: "Team" }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="flex items-center gap-2 text-white no-underline max-lg:justify-center max-sm:text-[0.9rem]">
                    <img src={right_icon} alt="" /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="footer_sidebar_3" className="flex flex-col flex-1 tracking-[0.1rem] max-lg:justify-end max-sm:between max-sm:pl-10 max-sm:pt-8 max-sm:justify-start">
            <h3 className="pb-5 pl-[3.3rem] font-semibold text-[1.125rem] text-white tracking-[0.12rem] max-lg:pl-0 max-sm:pb-1 max-sm:text-[1rem]">Informations</h3>
            <ul className="list-none p-0 pl-[3.3rem] pt-2 flex flex-col gap-[0.7rem] max-lg:pl-0 max-lg:items-start max-sm:gap-[0.8rem]">
              {[
                { href: "#", label: "Terms & conditions" },
                { href: "#", label: "Privacy policy" },
                { href: "#", label: "Blog" },
                { href: "#contact-us", label: "Contact" }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="flex items-center gap-2 text-white no-underline max-lg:justify-center max-sm:text-[0.9rem]">
                    <img src={right_icon} alt="" /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom flex flex-row justify-between items-center flex-wrap pt-[8.8rem] pb-20 max-lg:pt-[1rem] max-lg:pb-10 max-lg:px-10 max-lg:text-center max-sm:flex-col max-sm:gap-4 max-sm:pb-4 max-sm:pt-6">
          <div id="social-media" className="flex flex-row gap-[2.8rem] max-lg:gap-[1.5rem] max-sm:gap-[3rem]">
            <img src={facebook_f} alt="face" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin-in" />
            <img src={youtube} alt="youtube" />
            <img src={ig} alt="ig" />
          </div>
          <p className="tracking-[0.1rem] max-lg:text-[14px]">&copy; AltDesain Studio 2021 - All right reserved.</p>
        </div>
        {
          showScrollBtn && 
              <button id="scrollButton" onClick={scrollToTop} className="fixed bottom-[168px] right-[64px] p-[10px] bg-[var(--pink-color)] text-white rounded-md cursor-pointer text-[16px] z-[1000] max-lg:right-8 max-lg:bottom-24 max-sm:bottom-14 max-sm:right-6">
          <img src={arrow_up} alt="arrow-up" />
        </button>
        }
      </div>
    </section>
  );
}
