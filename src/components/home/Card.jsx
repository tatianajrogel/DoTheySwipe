import React from 'react'

// Card Components
const Card = ({ icon, title, description}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-[#E11D48] to-[#A51CA9] rounded-full flex items-center justify-center text-white">
          {icon}
        </div>
        
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card