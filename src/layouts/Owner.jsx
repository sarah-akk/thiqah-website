import owner from "../assets/owner.png";

const Owner = () => {
  return (
    <div  id="owner">

         {/* Desktop*/}      
          <div className="hidden md:flex flex-row text-end pr-40" >
                <div className="flex flex-col pr-40 pl-40 pt-40 mt-10 gap-10" id="description">
                <p className="text-5xl font-bold text-end">  صاحب المنصة</p>
              <p className="text-2xl text-start leading-loose" style={{ direction: 'rtl' }}
              >اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .</p>
          </div>
          <img className="flex mt-48 transition-transform duration-300 ease-in-out hover:scale-105" src={owner} />
        </div>

      {/* mobile*/}
            <div className="md:hidden flex flex-col text-end " >
                  <div className="mt-10 flex flex-col p-2" id="description">
                  <p className="text-2xl font-bold text-center">  صاحب المنصة</p>
              <p className="mt-10 text-md text-start leading-loose p-2" style={{ direction: 'rtl' }}
              >اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .اكتشف طريقة أكثر ذكاءً للتعلم والتدريس والنمو باستخدام منصتنا المتقدمة .</p>
          </div>
          <img className="flex " src={owner} />
        </div>

      </div>
  )
}

export default Owner