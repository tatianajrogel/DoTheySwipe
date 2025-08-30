// SocialIcon.jsx
import React from "react";

const SocialIcon = ({ href,Icon  }) => {
  return (
    <div className="w-8 h-8 p-4 rounded-full flex justify-center items-center bg-white">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 transition-transform duration-200 hover:scale-110"
      >
        <Icon className={`text-sm text-slate-600 `} />
      </a>
    </div>
  );
};

export default SocialIcon;
