import laptop from "../assets/laptop.png";
import book from "../assets/book.png";
import graduate from "../assets/graduate.png";

const Description = () => {
  return (
    <>
    <p className="hidden md:flex flex-col text-5xl font-bold text-end mr-40 ">شرح عن المنصة</p>
    <p className="md:hidden text-2xl font-bold text-center mt-10">شرح عن المنصة</p>

        {/* Desktop*/}
        <div className="hidden md:flex flex-row-reverse pr-40 pl-40 pt-20  gap-10" id="description">
          <div className=" flex-col text-end w-1/2">
              <p className="text-2xl text-start leading-loose" style={{ direction: 'rtl' }}
              >اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .</p>
          </div>
          <img className="transition-transform duration-300 ease-in-out hover:scale-105" src={laptop} />
          <div className="flex flex-col gap-10">
              <img className="transition-transform duration-300 ease-in-out hover:scale-105" src={book} />
              <img className="transition-transform duration-300 ease-in-out hover:scale-105" src={graduate} />
             </div>
          </div>

      {/* mobile*/}
      <div className="md:hidden flex flex-col p-5 items-center text-center pt-10 gap-5" id="description">
          <div className="flex flex-col text-end ">
              <p className="text-sm text-start leading-loose" style={{ direction: 'rtl' }}
              >اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .</p>
          </div>
          <div className="flex flex-row gap-1 h-60 ">
          <img className="w-40 h-60 transition-transform duration-300 ease-in-out hover:scale-105 z-50" src={laptop} />
          <div className="flex flex-col justify-between">
              <img className="w-48 h-28 transition-transform duration-300 ease-in-out hover:scale-105 z-50" src={book} />
              <img className="w-48 h-28 transition-transform duration-300 ease-in-out hover:scale-105 z-50" src={graduate} />
          </div>
          </div>
      </div>
      </>
  )
}

export default Description