import bgAsset from "../assets/bgAsset.png";
import Ellipse2 from "../assets/Ellipse2.png"; 
import credibility from "../assets/credibility.png";
import credibility2 from "../assets/credibility2.png";

const Features = () => {
  return (
    <>
      <img
        src={bgAsset}
        className="hidden md:flex absolute left-0 -translate-y-34 translate-x-10"
        alt="bgAsset"
      />
      <img
        src={Ellipse2}
        className="hidden md:flex absolute right-0 translate-y-14 -translate-x-32"
        alt="Ellipse2"
      />

<img
        src={bgAsset}
        className="md:hidden absolute w-20 left-0 translate-x-2"
        alt="bgAsset"
      />
      <img
        src={Ellipse2}
        className="md:hidden w-10 absolute right-0 translate-y-14 -translate-x-12"
        alt="Ellipse2"
      />


      <div className="text-black text-center relative" id="features">
        <p className="text-4xl font-bold mt-20">ميزاتنا</p>
        <div className="mt-5 flex justify-center overflow-x-auto">

         {/* Desktop*/}
          <div className="hidden md:flex space-x-20 px-4 p-10">
            {/* Card 1 */}
            <div className="relative w-80 h-80 flex flex-col items-center justify-center bg-white  rounded-lg 
               transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-gray-30 hover:shadow-lg ">
              <div className="relative flex items-center justify-center w-24 h-24">
                <img src={credibility} alt="credibility" className="w-full h-full object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-16 h-16" />
              </div>
              <p className="text-2xl font-bold mt-4">المصداقية</p>
              <p className="text-lg text-gray-600 mt-2 px-4 text-center">
                شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="relative w-80 h-80 flex flex-col items-center justify-center bg-white  rounded-lg 
               transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-gray-30 hover:shadow-lg ">              <div className="relative flex items-center justify-center w-24 h-24">
                <img src={credibility} alt="credibility" className="w-full h-full object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-16 h-16" />
              </div>
              <p className="text-2xl font-bold mt-4">المصداقية</p>
              <p className="text-lg text-gray-600 mt-2 px-4 text-center">
                شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="relative w-80 h-80 flex flex-col items-center justify-center bg-white  rounded-lg 
               transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-gray-30 hover:shadow-lg ">              <div className="relative flex items-center justify-center w-24 h-24">
                <img src={credibility} alt="credibility" className="w-full h-full object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-16 h-16" />
              </div>
              <p className="text-2xl font-bold mt-4">المصداقية</p>
              <p className="text-lg text-gray-600 mt-2 px-4 text-center">
                شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="relative w-80 h-80 flex flex-col items-center justify-center bg-white  rounded-lg 
               transition-transform duration-300 ease-in-out hover:scale-105 hover:border hover:border-gray-30 hover:shadow-lg ">              <div className="relative flex items-center justify-center w-24 h-24">
                <img src={credibility} alt="credibility" className="w-full h-full object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-16 h-16" />
              </div>
              <p className="text-2xl font-bold mt-4">المصداقية</p>
              <p className="text-lg text-gray-600 mt-2 px-4 text-center">
                شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القسم شرح عن القس شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
          </div>

        {/* mobile*/}
        <div className="md:hidden grid grid-cols-2 grid-rows-2  items-center justify-center gap-7 p-3 z-50">
            {/* Card 1 */}
            <div className="relative w-44 h-44 flex flex-col items-center justify-center bg-white  rounded-lg gap-1
               transition-transform duration-300 ease-in-out hover:scale-105 z-50 hover:border hover:border-gray-30 hover:shadow-lg ">
              <div className="relative flex items-center justify-center p-2">
                <img src={credibility} alt="credibility" className="w-14 h-14 object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-7 h-7" />
              </div>
              <p className="text-sm font-bold">المصداقية</p>
              <p className="text-sm text-gray-600 text-center px-4">
                شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="relative w-44 h-44 flex flex-col items-center justify-center bg-white  rounded-lg gap-1
               transition-transform duration-300 ease-in-out hover:scale-105 z-50 hover:border hover:border-gray-30 hover:shadow-lg ">
              <div className="relative flex items-center justify-center p-2">
                <img src={credibility} alt="credibility" className="w-14 h-14 object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-7 h-7" />
              </div>
              <p className="text-sm font-bold">المصداقية</p>
              <p className="text-sm text-gray-600 text-center px-4">
                شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
  
            
            {/* Card 3 */}
            <div className="relative w-44 h-44 flex flex-col items-center justify-center bg-white  rounded-lg gap-1
               transition-transform duration-300 ease-in-out hover:scale-105 z-50 hover:border hover:border-gray-30 hover:shadow-lg ">
              <div className="relative flex items-center justify-center p-2">
                <img src={credibility} alt="credibility" className="w-14 h-14 object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-7 h-7" />
              </div>
              <p className="text-sm font-bold">المصداقية</p>
              <p className="text-sm text-gray-600 text-center px-4">
                شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="relative w-44 h-44 flex flex-col items-center justify-center bg-white  rounded-lg gap-1
               transition-transform duration-300 ease-in-out hover:scale-105 z-50 hover:border hover:border-gray-30 hover:shadow-lg ">
              <div className="relative flex items-center justify-center p-2">
                <img src={credibility} alt="credibility" className="w-14 h-14 object-cover" />
                <img src={credibility2} alt="credibility2" className="absolute w-7 h-7" />
              </div>
              <p className="text-sm font-bold">المصداقية</p>
              <p className="text-sm text-gray-600 text-center px-4">
                شرح عن القسم شرح عن القسم شرح عن القسم
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
