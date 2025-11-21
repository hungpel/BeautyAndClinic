import service_card_img_1 from '../../../assets/img/service/service-card-img-1.png';
import service_card_img_2 from '../../../assets/img/service/service-card-img-2.png';
import service_card_img_3 from '../../../assets/img/service/service-card-img-3.png';
import TitleAndDesc from '../../../components/TitleAndDesc';

function CoreService() {
  return (
    <section id="core-service" className="text-center text-[#8B8B8B] py-20 max-w-[71.25rem] mx-auto max-lg:py-16 max-sm:py-12">
        <div id="service-info" className="flex flex-col items-center mb-12 max-sm:mb-8">
            <TitleAndDesc p1={"Main Services"} h1={"Learn services to focus on your beauty"} p2={"Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."} />
        </div>

        <div id="service-detail" className="flex flex-row justify-between gap-4 h-[470px] max-lg:h-auto max-lg:flex-wrap max-lg:justify-center max-sm:flex-col max-sm:items-center">

            <div className="service-card flex flex-col items-center gap-4 w-[21.5rem] px-8 py-[4.6rem] rounded-[2.625rem] shadow-[0_25px_50px_rgba(228,231,255,0.5)] bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_1} alt="" className="w-[10.375rem] pb-10 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] max-lg:text-[16px] max-sm:text-[15px]">Beauty consultation</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>

            <div className="service-card flex flex-col items-center gap-4 w-[21.5rem] px-8 py-[4.6rem] rounded-[2.625rem] shadow-[0_25px_50px_rgba(228,231,255,0.5)] bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_2} alt="" className="w-[10.375rem] pb-10 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] max-lg:text-[16px] max-sm:text-[15px]">Skin treatments</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>

            <div className="service-card flex flex-col items-center gap-4 w-[21.5rem] px-8 py-[4.6rem] rounded-[2.625rem] shadow-[0_25px_50px_rgba(228,231,255,0.5)] bg-white max-lg:w-[18rem] max-lg:px-6 max-lg:py-12 max-sm:w-full max-sm:max-w-[20rem] max-sm:px-4 max-sm:py-10">
                <img src={service_card_img_3} alt="" className="w-[10.375rem] pb-10 max-lg:w-[8rem] max-sm:w-[7rem] max-sm:pb-6" />
                <h3 className="text-[18px] font-semibold text-[var(--bold-text-color)] max-lg:text-[16px] max-sm:text-[15px]">Beauty product</h3>
                <p className="text-[14px] tracking-[0.1rem] mt-[2px] max-lg:text-[13px] max-sm:text-[12px]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>
        </div>
    </section>
  );
}

export default CoreService;
