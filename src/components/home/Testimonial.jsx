const Testimonial = () => {
  return (
    <section className="py-16 px-4  bg-pink-100">
      <div className="max-w-6xl  flex flex-col md:flex-row mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2/3 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See What Users <br/> <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">Think of Dotheyswipe®</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Do They Swipe is a platform designed to help individuals discreetly and anonymously check if their partners or others they know are actively using dating apps.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-1/3 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm  mx-auto">
          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg mb-6 text-center">
            "I suspected something was off and decided to give this a try. Within minutes, I had answers. Life-changing!"
          </p>
          
          {/* Rating Stars */}
          <div className="flex justify-center mb-3">
            <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent text-xl mr-1">✰</span>
            <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent text-xl mr-1">✰</span>
            <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent text-xl mr-1">✰</span>
            <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent text-xl mr-1">✰</span>
            <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent text-xl">✰</span>
          </div>
          
          {/* User Name */}
          <p className="text-gray-900 font-medium text-center">
            Sandra W
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;