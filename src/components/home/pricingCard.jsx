const PricingCard = ({ title, price, features, isPopular = false }) => {
  return (
    <div className={`bg-white rounded-2xl p-8  shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative `}>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2 ">{title}</h3>
      <div className=" mb-6 pb-4 border-b border-gray-200">
        <span className="text-4xl font-bold text-[#E11D48]">${price}</span>
        <span className="text-gray-600"> per month</span>
      </div>
      <ul className="mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-3">
            <span className="mr-2 mt-1">✔</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
     <div className="border-t  border-gray-200 pt-8">
         <button className={`w-full py-3  rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-[#E11D48] to-[#A51CA9] text-white hover:shadow-lg`}>
        Choose this Plan
      </button>
     </div>
    </div>
  );
};

export default PricingCard