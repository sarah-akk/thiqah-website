import video from "../assets/video.png"; 
import Ellipse1 from "../assets/Ellipse1.png"; 
import Ellipse2 from "../assets/Ellipse2.png"; 

export const Video = () => {
  return (
    <>
    <div className="items-center flex flex-col" id="Video">
    <p className="md:hidden items-center text-2xl font-bold mt-10">فيديو تعريفي</p>
    <p className="hidden md:flex items-center text-4xl font-bold mt-20">فيديو تعريفي</p>

    {/* Desktop*/}
    <div className="hidden md:flex flex-col mt-20" id="Video">
    <img
          src={Ellipse1}
          className="absolute translate-y-40 translate-x-10"
          alt="bgAsset" />
    <img
          src={Ellipse2}
          className="absolute right-0 translate-y-20 -translate-x-7"
          alt="bgAsset" />

          <div className=" items-center justify-center flex" >
              <img
                  src={video}
                  className=""
                 alt="bgAsset" />
          </div>
      <img
          src={Ellipse1}
          className="absolute right-0 translate-y-96 -translate-x-40"
          alt="bgAsset" />
      </div>


       {/* modile*/}
      <div className="md:hidden mt-20" id="Video">
    <img
          src={Ellipse1}
          className="absolute w-10 -translate-y-10 translate-x-10"
          alt="bgAsset" />
    <img
          src={Ellipse2}
          className="absolute right-0 w-5 -translate-y-10 -translate-x-7"
          alt="bgAsset" />

          <div className="items-center justify-center flex" >
              <img
                  src={video}
                  className="w-full p-5"
                 alt="bgAsset" />
          </div>
      <img
          src={Ellipse1}
          className="absolute w-10 right-0  -translate-x-40"
          alt="bgAsset" />
      </div>

      </div>
   </>
  )
}
