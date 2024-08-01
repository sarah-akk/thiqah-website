import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/logo.png";
import { NavData } from "../data/NavigationData";

const NavBar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            NavData.forEach((item, index) => {
                const section = document.getElementById(item.link);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                        setActiveMenuItem(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Desktop Navigation Bar */}
            <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 flex-row justify-center items-center shadow-md bg-white">
                <div className="flex flex-row-reverse gap-24 p-4 items-center">
                    <img src={logo} className="" alt="Logo" />
                    {NavData.map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onClick={() => setActiveMenuItem(index)}
                        >
                            <div className={`flex items-center justify-center h-10 px-4 text-lg font-bold rounded-lg cursor-pointer
                                 ${activeMenuItem === index ? 'bg-orange-400 text-white' : 'text-gray-900'} 
                                 hover:${activeMenuItem === index ? 'bg-orange-500' : 'bg-orange-400'}`}>
                                {item.heading}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Sidebar */}
            <img src={logo} className="ml-40 p-2 w-20" alt="Logo" />
            <div className="md:hidden relative inset-0 z-60">
                <button
                    onClick={toggleSidebar}
                    className="p-4 text-black bg-opacity-50 bg-white text-xl font-bold fixed top-4 right-4"
                >
                   ☰
                </button>
                <div
                    className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex flex-col p-4  items-center justify-center z-100">
                        <img src={logo} className="mb-10 w-28" alt="Logo" />
                        {NavData.map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                                onClick={() => {
                                    setActiveMenuItem(index);
                                    setIsSidebarOpen(false);
                                }}
                                className={`block py-2 px-4 text-lg font-bold rounded-lg cursor-pointer
                                    ${activeMenuItem === index ? 'bg-orange-400 text-white' : 'text-gray-900'}
                                    hover:${activeMenuItem === index ? 'bg-orange-500' : 'bg-orange-400'}`}
                            >
                                {item.heading}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
