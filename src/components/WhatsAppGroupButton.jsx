import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const WhatsAppGroupButton = ({
  groupLink = "https://chat.whatsapp.com/G19OxJKfAOU49BtcrGq7YF",
  text = "Join Free WhatsApp Group",
  className = "",
}) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => setShowPopup(false), 10000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <div
      className={`fixed z-50 bottom-2 right-2 sm:bottom-4 sm:right-4 flex flex-col items-end ${className} hover:cursor-pointer`}
      style={{ minWidth: 0 }}
    >
      {showPopup && (
        <div className="relative mb-1 sm:mb-2 px-3 py-1 bg-white text-green-700 rounded-lg shadow text-xs sm:text-sm font-medium border border-green-200 whitespace-nowrap animate-fadeInUp flex items-center">
          <span>{text}</span>
          <button
            className="ml-2 p-0.5 rounded hover:bg-green-100 transition"
            onClick={() => setShowPopup(false)}
            aria-label="Close"
            type="button"
          >
            <IoMdClose className="text-red-600 text-base sm:text-lg" />
          </button>
        </div>
      )}
      <a
        href={groupLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-gradient-to-r from-[#24B224] to-green-700 text-white rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200 p-2 sm:p-2.5"
        style={{ minWidth: 0 }}
      >
        <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppGroupButton;
