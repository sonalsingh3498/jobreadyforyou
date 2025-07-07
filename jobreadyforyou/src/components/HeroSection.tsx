import React from "react";
import SidebarSocials from "./SidebarSocials";
import jobreadyuRight from "../images/emptyImage.png";
import MediamodifierDesign from '../images/MediamodifierDesign.svg'

const HeroSection: React.FC = () => {
  return (
<section className="w-[1440px] h-[797px] mx-auto relative border border-[#2c2c2c] text-white overflow-hidden">
      {/* Sidebar */}
      <SidebarSocials />

      {/* Hero Heading and Buttons */}
      <div className="w-[851px] h-[215px] mt-[80px] ml-[292px] z-10">
       <h1 className="text-[105px] leading-[95px] font-extrabold tracking-[-7.2px] text-white font-[Plus Jakarta Sans]">
        Be <span className="text-[#F6A622]">Job – Ready</span>.<br />
        Lead the<br />
        Future.
        </h1>
{MediamodifierDesign}


        <div className="mt-10 flex space-x-6 float-right">
         <button
  className="w-[248px] h-[73.5px] border border-[#F6A622] text-white 
             rounded-[62px] px-6 flex items-center justify-center space-x-3
             font-[Plus Jakarta Sans] text-[22px] font-extrabold leading-[100%]"
>
  <span>Start for Free</span>
  <span className="text-[#F6A622] text-2xl transform ">↓</span>
</button>



          <button
  className="h-[73.5px] bg-[#1D169D] text-white rounded-[62px] border border-[#1D169D] flex items-center justify-between px-6"
>
  <span className="text-[24px] font-extrabold leading-[100%] font-[Plus Jakarta Sans]">
    Explore
  </span>
  <img
  src={jobreadyuRight}
  alt="JobReadyU Right"
  className="w-[117px] h-[104px] object-contain -mr-4"
/>

</button>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
