// components/SocialSidebar.tsx
import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-10 flex flex-col space-y-4 p-2 bg-white shadow-lg">
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-green-500 hover:text-green-600" size={30} />
      </a>
      <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 hover:text-blue-700" size={30} />
      </a>
      <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 hover:text-pink-600" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-500 hover:text-blue-600" size={30} />
      </a>
    </div>
  );
};

export default SocialSidebar;