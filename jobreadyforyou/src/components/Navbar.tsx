import React from "react";
import jobreadyuleft from "../images/JobReadyU.png";
import jobreadyuRight from "../images/emptyImage.png";


const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#121212] w-full max-w-[1251px] mx-auto h-[90px] rounded-lg border border-[#2c2c2c] flex items-center justify-between px-6">
            {/* Left Logo */}
            <img
                src={jobreadyuleft}
                alt="JobReadyU Left"
                className="w-[106px] h-[106px] object-contain"
            />

            {/* Spacer to push right content to the end */}
            <div className="flex-1" />

            {/* Right Section: Dropdown + Login + Right Logo */}
            <div className="flex items-center gap-6">
                {/* Dropdown + Login */}
                <div className="flex items-center gap-25">
                    <span className="flex items-center gap-[9px] text-sm text-white cursor-pointer whitespace-nowrap">
                        Your JobReady Kit
                        <i className="fas fa-caret-down text-sm text-white"></i>
                    </span>
                    <button
                        className="bg-[#5013DF] hover:bg-white text-white hover:text-[#F6A622] 
             w-[93px] h-[46px] rounded-[6px] 
             text-[16px] font-extrabold leading-[100%] 
             text-center flex items-center justify-center 
             transition-colors duration-200 font-[Plus Jakarta Sans]"

                    >
                        Login
                    </button>
                </div>

                {/* Right Logo */}
                <img
                    src={jobreadyuRight}
                    alt="JobReadyU Right"
                    className="w-[106px] h-[106px] object-contain"
                />
            </div>
        </nav>
    );
};

export default Navbar;
