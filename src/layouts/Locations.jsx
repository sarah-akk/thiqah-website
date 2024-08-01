import place from "../assets/place.png";
import Ellipse1 from "../assets/Ellipse1.png";

const Locations = () => {
  return (
    <div className="text-black text-center relative" id="locations">
      <p className="items-center text-4xl font-bold mt-20">اماكن تواجدنا</p>
      <div className="overflow-auto mt-10 ">

      {/* Desktop*/}
        <div className="hidden md:flex flex-row-reverse items-center justify-center gap-28  p-5">
          {/* Card 1 */}
          <div className="w-80 h-80 border-orange-600 border-solid border-2 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-2xl">دمشق - باب توما</p>
            <p className="text-2xl">+963-987 654 321</p>
          </div>
          
          {/* Card 2 */}
          <div className="w-80 h-80 border-orange-600 border-solid border-2 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-2xl">دمشق - باب توما</p>
            <p className="text-2xl">+963-987 654 321</p>
          </div>
          
          {/* Card 3 */}
          <div className="w-80 h-80 border-orange-600 border-solid border-2 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-2xl">دمشق - باب توما</p>
            <p className="text-2xl">+963-987 654 321</p>
          </div>
          
          {/* Card 4 */}
          <div className="w-80 h-80 border-orange-600 border-solid border-2 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-2xl">دمشق - باب توما</p>
            <p className="text-2xl">+963-987 654 321</p>
          </div>
        </div>


      {/* mobile*/}
        <div className="md:hidden grid grid-cols-2 grid-rows-2 items-center justify-center gap-2 p-5">
          {/* Card 1 */}
          <div className="w-40 h-40 border-orange-600 border-solid border-2 flex flex-col items-center justify-center  
          transition-transform duration-300 ease-in-out  hover:scale-105 hover:bg-orange-600 hover:text-white z-50">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-lg">دمشق - باب توما</p>
            <p className="text-sm">+963-987 654 321</p>
          </div>
          
          {/* Card 2 */}
          <div className="w-40 h-40 border-orange-600 border-solid border-2 flex flex-col items-center justify-center  
          transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white z-50">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-lg">دمشق - باب توما</p>
            <p className="text-sm">+963-987 654 321</p>
          </div>
          
          
          {/* Card 3 */}
          <div className="w-40 h-40 border-orange-600 border-solid border-2 flex flex-col items-center justify-center  
          transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white z-50">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-lg">دمشق - باب توما</p>
            <p className="text-sm">+963-987 654 321</p>
          </div>
          
          
          {/* Card 4 */}
          <div className="w-40 h-40 border-orange-600 border-solid border-2 flex flex-col items-center justify-center  
          transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white z-50">
            <img src={place} alt="Location" className="w-16 h-16" />
            <p className="text-lg">دمشق - باب توما</p>
            <p className="text-sm">+963-987 654 321</p>
          </div>
      
        </div>
        <img
        src={Ellipse1}
        className="md:hidden w-10 absolute translate-y-20 translate-x-10"
        alt="Ellipse1"
      />
      </div>


      <img
        src={Ellipse1}
        className="hidden md:flex translate-y-20 translate-x-10"
        alt="Ellipse1"
      />
    </div>
  );
}

export default Locations;
