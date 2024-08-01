import logo from "../assets/logo.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import Ellipse1 from "../assets/Ellipse1.png"
import bgAsset from "../assets/bgAsset.png"
import whatsapp from "../assets/whatsapp.png"

const Contact = () => {
  return (
    <div id="contact">

      <img src={bgAsset} 
         className="hidden md:flex absolute right-0 -translate-y-20 -translate-x-20"
          />
      <img src={Ellipse1} 
        className="hidden md:flex absolute -translate-y-10 translate-x-32"
      />

     <img src={bgAsset} 
       className="md:hidden w-20 absolute right-0 -translate-y-40 -translate-x-10"
          />
      <img src={Ellipse1} 
      className="md:hidden w-10 absolute -translate-y-20 translate-x-14"
      />

    <p className="items-center text-4xl font-bold mt-40 text-center ">تواصل معنا</p>

 {/* Desktop*/}      
    <div className="hidden md:flex flex-row mt-20">
          {/* Left Side - Logo and Contact Info */}
          <div className="w-1/2  flex flex-col items-center justify-center space-y-4">
              <img
                  src={logo}
                  alt="Logo"
                  className="mb-10 w-40" />
              <div className="text-center flex-col flex gap-10">
                  <div className="flex flex-row">
                  <p className="mt-2 text-2xl font-bold">+1 (555) 123-4567</p>
                  <img
                  src={phone}
                  alt="Logo"
                  className="ml-5" />
                  </div>
                  <div className="flex flex-row">
                  <p className="mt-2 text-2xl font-bold">trustinfo@gmail.com</p>
                  <img
                  src={mail}
                  alt="Logo"
                  className="ml-5" />
                  </div>
              </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-1/2 mr-32 flex flex-col justify-center " style={{ direction: 'rtl' }}>
              <form className="space-y-4">
                  <div>          
                      <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="الاسم /  الايميل"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="p-3 bg-slate-100 h-14 text-2xl mt-1 block w-full border-gray-300 rounded-md shadow-sm
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>

                  <div>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="رقم الهاتف"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="bg-slate-100 h-14 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>

                  <div className="">
                      <textarea
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="الرسالة"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="bg-slate-100 h-52 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                  </div>

                  <button
                      type="submit"
                      className="mt-4 w-full py-3 px-4 h-14 border border-transparent rounded-md shadow-sm text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                      ارسال
                  </button>
              </form>
          </div>
      </div>


 {/* mobile*/}
      <div className="md:hidden flex-col mt-20">
          {/* Left Side - Logo and Contact Info */}
          <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-center flex-col flex gap-10">
                  <div className="flex flex-row">
                  <p className="mt-2 text-2xl font-bold">+1 (555) 123-4567</p>
                  <img
                  src={mail}
                  alt="Logo"
                  className="ml-5" />
                  </div>
                  <div className="flex flex-row">
                  <p className="mt-2 text-2xl font-bold">trustinfo@gmail.com</p>
                  <img
                  src={phone}
                  alt="Logo"
                  className="ml-5" />
                  </div>
              </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-5 flex flex-col justify-center " style={{ direction: 'rtl' }}>
              <form className="space-y-4">
                  <div>          
                      <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="الاسم /  الايميل"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="p-3 bg-slate-100 h-14 text-2xl mt-1 block w-full border-gray-300 rounded-md shadow-sm
                           focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>

                  <div>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="رقم الهاتف"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="bg-slate-100 h-14 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>

                  <div className="">
                      <textarea
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="الرسالة"
                          required
                          style={{ fontSize: '1.25rem' }}
                          className="bg-slate-100 h-52 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                  </div>

                  <button
                      type="submit"
                      className="mt-4 w-full py-3 px-4 h-14 border border-transparent rounded-md shadow-sm text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                      ارسال
                  </button>
              </form>
          </div>
      </div>

      <img src={Ellipse1} 
                    className="hidden md:flex absolute translate-y-8 translate-x-10"
          />
       <img src={Ellipse1} 
                    className="md:hidden w-10 absolute translate-y-8 translate-x-10"
          />
         <img
        src={whatsapp}
        className="fixed bottom-20 left-16 w-20 h-20 z-50 cursor-pointer"
        alt="WhatsApp"
      />
      </div>
  )
}

export default Contact