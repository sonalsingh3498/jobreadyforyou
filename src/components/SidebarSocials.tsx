import React from "react";

const SidebarSocials: React.FC = () => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-white">
      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-5 text-lg">
        <a href="#"><i className="fab fa-twitter" /></a>
        <a href="#"><i className="fab fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-linkedin-in" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
      </div>

      {/* Rotated Email */}
      <p className="mt-30 text-xs rotate-[-90deg] origin-center whitespace-nowrap">
        contact@jobreadyu.com
      </p>
    </div>
  );
};

export default SidebarSocials;
