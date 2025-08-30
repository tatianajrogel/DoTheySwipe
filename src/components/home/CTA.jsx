import girl from "./../../assets/images/girlImage.jfif"
const CTASection = () => {
  return (
    <section className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto px-8 rounded-xl bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] flex flex-col md:flex-row items-center justify-between">
        {/* Text Content - Left Side */}
        <div className="md:w-2/3 py-16 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get the Clarity You Deserve.
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Search millions of profiles quickly and securely
          </p>
            <div className="flex items-center justify-between rounded-2xl px-6 py-4 ">
              <button className="bg-white flex gap-2 rounded-full  px-6 py-3 font-semibold hover:shadow-lg transition-all duration-300">
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#gradientStroke)"
  strokeWidth={2}
>
  <defs>
    <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#E11D48" />
      <stop offset="33%" stopColor="#CC1D6B" />
      <stop offset="66%" stopColor="#B81C8B" />
      <stop offset="100%" stopColor="#A51CA9" />
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  />
</svg>

                 <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">Search on Tinder</span>
              </button>
            </div>
   
        </div>

       {/* Image - Right Side */}
<div className="md:w-1/3 flex justify-center">
  <img 
    src={girl} 
    className="object-cover max-h-[400px] w-full rounded-2xl" 
    alt="Profile" 
  />
</div>
      </div>
    </section>
  );
};

export default CTASection;