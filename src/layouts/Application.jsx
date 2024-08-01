import application from  "../assets/application.png";
import googleplay from  "../assets/googleplay.png";
import strings from "../assets/strings.png";
import Ellipse1 from "../assets/Ellipse1.png";

const Application = () => {
  return (

  <div className="text-black text-center" id="application">

   {/* Desktop*/}      
    <div className="hidden md:flex bg-blue-100 w-full h-80  flex-row items-center gap-10 pl-96 mt-40">
    <img
            src={strings}
            className=" w-1/2 translate-y-14 overflow-hidden object-contain absolute"
            alt="strings"
          />
    <img
    src={application}
     className="transition-transform duration-300 ease-in-out hover:scale-105"
    alt="bgAsset"
      />

   <div className="bg-blue-100 w-full flex flex-col  items-center p-10 gap-10">
   <p className="text-5xl font-bold text-start leading-loose" style={{ direction: 'rtl' }}>
    حمل تطبيقنا الأن
    </p>
   <div className="transition-transform duration-300 ease-in-out hover:scale-105">
    <img
    src={googleplay}
    className="transition-transform duration-300 ease-in-out hover:scale-105"
    alt="bgAsset"
    />
    </div> 
    </div> 
  </div> 


   {/* mobile*/}
   <img src={Ellipse1} 
     className="md:hidden w-10 absolute translate-y-8 translate-x-10"
          />

  <div className="md:hidden bg-blue-100 w-full h-full flex flex-col p-10 items-center  mt-10">
    <img
    src={application}
     className="transition-transform duration-300 ease-in-out hover:scale-105 z-50"
    alt="bgAsset"
      />
  <img src={Ellipse1} 
     className="md:hidden w-10 absolute translate-y-80 translate-x-40"
          />
   <p className="text-3xl font-bold mb-10" style={{ direction: 'rtl' }}>
    حمل تطبيقنا الأن
    </p>

   <div className="transition-transform duration-300 ease-in-out hover:scale-105 z-50">
    <img
    src={googleplay}
    className=""
    alt="bgAsset"
     />
    </div> 
  </div>
</div>
  )
}

export default Application