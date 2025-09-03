import youngCouple from "./../../assets/images/young-couple.png"
import vector from "./../../assets/images/vector.png"
import backgroundImage from "../../assets/images/background-image.png"
const Contact = () => {
  return (
    <section className="py-16 mt-8 md:mt-20 mx-auto px-4 flex justify-center bg-cover bg-center "

    >
      <div className="max-w-6xl mx-auto ">
        

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 "
        >
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col order-2 md:order-1 text-white bg-cover bg-center rounded-2xl lg:text-left bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] "
          
              style={{backgroundImage:`linear-gradient(to right,#E11D48,#CC1D6B,#B81C8B,#A51CA9),url(${vector})`}}
          >
            
            <div className="" 
            style={{backgroundImage:`url(${vector})`}}
            >
                <div className=" pt-8 text-center text-white "
            >
                 <h2 className="text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-lg ">
            Can't find the answer you're looking for?
          </p>
            </div>
           

            <img src={youngCouple} alt="" className=" object-cover w-full h-auto" />
             </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex flex-col order-1 md:order-2 gap-6 rounded-2xl p-8  bg-white shadow-md">
            <div className="">
                 <h3 className="text-4xl font-bold text-slate-900 mb-3">
              Get in <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">touch</span>
            </h3>
            <p className="text-lg text-slate-900">
              Our friendly team would love to hear from you.
            </p> 
            </div>
            <form className=" flex flex-col gap-4">
              {/* First Name */}
              <div className="flex flex-col ">
                <label htmlFor="firstName"  className="block text-lg font-medium text-gray-700 mb-2">
                  First name<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <input

                  type="text"
                  id="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
                />
              </div>

              {/* Email */}
               <div className="flex flex-col ">
                <label htmlFor="email"  className="block text-lg font-medium text-gray-700 mb-2">
                  Email<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <input

                  type="text"
                  id="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
                />
              </div>

              {/* Phone Number */}
               <div className="flex flex-col ">
                <label htmlFor="phoneNo"  className="block text-lg font-medium text-gray-700 mb-2">
                  Phone Number<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <input

                  type="text"
                  id="phoneNo"
                  required
                  placeholder="+1 (555) 000-000"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring focus:ring-[#E11D48] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col ">
                <label htmlFor="message"  className="block text-lg font-medium text-gray-700 mb-2">
                  Message<span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">*</span> 
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)]  text-white py-3 px-6 rounded-full font-semibold hover:bg-[#CC1D6B] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;