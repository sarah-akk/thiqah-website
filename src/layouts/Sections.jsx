import CardImg from "../assets/CardImg.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png"; 
import bgAsset from "../assets/bgAsset.png";

const Sections = () => {
  return (
    <div className="text-black text-center relative" id="Sections">
      <p className="items-center text-3xl font-bold mt-20">الأقسام</p>

      {/* Desktop*/}
      <div className="overflow-x-auto mt-10">
        <div className="hidden md:flex flex-row-reverse space-x-20">
          {/* Card 1 */}
          <div className="relative w-96 h-96 rounded-2xl m-20 bg-cover bg-center 
          transition-transform duration-300 ease-in-out hover:scale-105" style={{ backgroundImage: `url(${CardImg})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-5 text-white p-2">
              <img src={Ellipse3} className="w-40" alt="Ellipse3" />
              <p className="text-2xl font-bold">اسم القسم</p>
              <p>شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-96 h-96 rounded-2xl m-20 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105" style={{ backgroundImage: `url(${CardImg})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-5 text-white p-2">
              <img src={Ellipse3} className="" alt="Ellipse3" />
              <p className="text-2xl font-bold">اسم القسم</p>
              <p>شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-96 h-96 rounded-2xl m-20 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105" style={{ backgroundImage: `url(${CardImg})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-5 text-white p-2">
              <img src={Ellipse3} className="" alt="Ellipse3" />
              <p className="text-2xl font-bold">اسم القسم</p>
              <p>شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-96 h-96 rounded-2xl m-20 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105" style={{ backgroundImage: `url(${CardImg})` }}>
            <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-5 text-white p-2">
              <img src={Ellipse3} className="" alt="Ellipse3" />
              <p className="text-2xl font-bold">اسم القسم</p>
              <p>شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
            </div>
          </div>
        </div>
      </div>

{/* mobile */}
<div className="md:hidden mt-5 items-center justify-center flex">
  <div className="grid grid-cols-2 grid-rows-2 gap-5">
    {/* Card 1 */}
    <div className="relative w-40 h-40 rounded-md bg-cover bg-center 
         transition-transform duration-300 ease-in-out hover:scale-105 z-50" 
      style={{ backgroundImage: `url(${CardImg})` }}>
      <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-1 text-white p-2">
        <img src={Ellipse3} className="w-10" alt="Ellipse3" />
        <p className="text-sm font-bold">اسم القسم</p>
        <p className="text-xs">شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
      </div>
    </div>
    
    {/* Card 2 */}
    <div className="relative w-40 h-40 rounded-md bg-cover bg-center 
      transition-transform duration-300 ease-in-out hover:scale-105 z-50" 
      style={{ backgroundImage: `url(${CardImg})` }}>
      <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-1 text-white p-2">
        <img src={Ellipse3} className="w-10" alt="Ellipse3" />
        <p className="text-sm font-bold">اسم القسم</p>
        <p className="text-xs">شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative w-40 h-40 rounded-md bg-cover bg-center 
      transition-transform duration-300 ease-in-out hover:scale-105 z-50" 
      style={{ backgroundImage: `url(${CardImg})` }}>
      <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-1 text-white p-2">
        <img src={Ellipse3} className="w-10" alt="Ellipse3" />
        <p className="text-sm font-bold">اسم القسم</p>
        <p className="text-xs">شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative w-40 h-40 rounded-md bg-cover bg-center 
      transition-transform duration-300 ease-in-out hover:scale-105 z-50" 
      style={{ backgroundImage: `url(${CardImg})` }}>
      <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-1 text-white p-2">
        <img src={Ellipse3} className="w-10" alt="Ellipse3" />
        <p className="text-sm font-bold">اسم القسم</p>
        <p className="text-xs">شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم</p>
      </div>
    </div>
  </div>
</div>

{/* Dots Container */}
<div className="flex justify-center space-x-3 mt-5">
  {Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 bg-orange-500 rounded-full ${
        index === 0 ? 'opacity-100' : 'opacity-50'
      }`}
    ></div>
  ))}
</div>

      <img
        src={Ellipse4}
        className="absolute w-10 left-0 translate-y-4 translate-x-4"
        alt="Ellipse4"
      />
      <img
        src={bgAsset}
        className="absolute w-14 right-0 -translate-x-5"
        alt="bgAsset"
      />
    </div>
  );
}

export default Sections;
