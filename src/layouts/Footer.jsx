import logo2 from "../assets/logo2.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>

     {/* Desktop*/}      
    <div className="hidden md:flex flex-row-reverse justify-center mt-40 pt-10 shadow-md bg-white items-center gap-28"
          style={{
              boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)'
          }}>
          {/* Logo Section */}
          <div className="flex items-center  ml-20">
              <img src={logo2} alt="Logo" className="w-60 h-64" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col text-end gap-4 mr-20 text-2xl">
              <p>الأقسام</p>
              <p>فيديو تعريفي</p>
              <p>نبذة عنا</p>
              <p>الرئيسية</p>
          </div>

          <div className="flex flex-col text-end gap-4 mr-20 text-2xl">
              <p>تواصل معنا</p>
              <p>صاحب المنصة</p>
              <p>ميزاتنا</p>
              <p>أماكن تواجدنا</p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center space-y-4 mr-20">
              <div className="flex flex-col gap-4">
                  <div className="flex flex-row-reverse items-center justify-center gap-4">
                      <img src={phone} alt="Phone Icon" className="w-6 h-6" />
                      <p className="text-2xl font-bold">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex  flex-row-reverse  items-center gap-4">
                      <img src={mail} alt="Mail Icon" className="w-6 h-6" />
                      <p className="text-2xl font-bold">trustinfo@gmail.com</p>
                  </div>
                  <div className="flex items-center flex-row gap-5 justify-center mt-5">
                      <img src={facebook} alt="Logo" className="" />
                      <img src={whatsapp} alt="Logo" className="w-14 h-14" />
                      <img src={instagram} alt="Logo" className="" />
                  </div>
              </div>
          </div>
      </div>


      {/* mobile*/}
       <div className="md:hidden flex flex-col justify-center mt-20 pt-10 shadow-md bg-white items-center gap-16"
          style={{
              boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)'
          }}>
          {/* Logo Section */}
          <div className="flex items-center justify-center">
              <img src={logo2} alt="Logo" className="w-40 h-40" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row justify-center items-center gap-10">
          <div className="flex flex-col text-end gap-4 text-2xl">
              <p>الأقسام</p>
              <p>فيديو تعريفي</p>
              <p>نبذة عنا</p>
              <p>الرئيسية</p>
          </div>

          <div className="flex flex-col text-end gap-4  text-2xl">
              <p>تواصل معنا</p>
              <p>صاحب المنصة</p>
              <p>ميزاتنا</p>
               <p>أماكن تواجدنا</p>
           </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-5">
              <div className="flex flex-col gap-4">
                  <div className="flex flex-row-reverse items-center justify-center gap-4">
                      <img src={phone} alt="Phone Icon" className="w-6 h-6" />
                      <p className="text-2xl font-bold">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex  flex-row-reverse  items-center gap-4">
                      <img src={mail} alt="Mail Icon" className="w-6 h-6" />
                      <p className="text-2xl font-bold">trustinfo@gmail.com</p>
                  </div>
                  <div className="flex items-center flex-row gap-5 justify-center mt-5">
                      <img src={facebook} alt="Logo" className="" />
                      <img src={whatsapp} alt="Logo" className="w-14 h-14" />
                      <img src={instagram} alt="Logo" className="" />
                  </div>
              </div>
          </div>
      </div>
      <p className="items-center text-center text-xl mt-5"> Copyright @ 2024 All Right Reserved</p>
      <p className="items-center text-center text-xl">  Developed and desigend by ICR</p>
      <p className="items-center text-center text-xl mb-10">IdeaCodeReality.ICR@gmail.com</p>
      </>

  );
};

export default Footer;
