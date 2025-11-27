function TitleAndDesc({ className, p1, h1, p2 }) {
  return (
    <div className={className}>
      <p className="text-[var(--pink-color)] font-semibold text-base leading-[125%] pt-[5px]">
        {p1}
      </p>

      <h1 className="text-[2.25rem] max-w-[29rem] text-[var(--bold-text-color)] font-semibold leading-[125%] tracking-[0.02rem] pt-[10px] mx-auto max-lg:text-[1.8rem] max-lg:max-w-[24rem] max-sm:text-[1.5rem] max-sm:max-w-[20rem]">
        {h1}
      </h1>

      <p className="font-normal max-w-[848px] py-[1.3rem] tracking-[0.1rem] whitespace-pre-line mx-auto max-lg:max-w-[650px] max-lg:text-[0.9rem] max-lg:py-4 max-sm:max-w-[90%] max-sm:text-[0.9rem] max-sm:py-3">
        {p2}
      </p>
    </div>
  )
}



export default TitleAndDesc;
