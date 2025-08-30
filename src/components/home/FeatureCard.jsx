const FeatureCard = ({ cardImage, title, description, imageFirst = true }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      {imageFirst ? (
        // Image on top, text below
        <>
          <div className="flex ">
            <div className="w-full h-72 rounded-lg overflow-hidden">
              <img 
                src={cardImage} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mt-4 mb-4 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </>
      ) : (
        // Text on top, image below
        <>
          <div className=" mb-6">
            <h3 className="text-2xl font-bold  mb-4 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex ">
            <div className="w-full h-72 rounded-lg overflow-hidden">
              <img 
                src={cardImage} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureCard;
