import Card from "./Card.jsx"

import {User,MapPin, Search} from "lucide-react";
// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      icon: <User size={32} />,
      title: "Personal Info",
      description: "Provide their basic details to start the search.",
      stepNumber: "1"
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      description: "Select where you suspect they might be using Tinder.",
      stepNumber: "2"
    },
    {
      icon: <Search size={32} />,
      title: "Search",
      description: "Our system will give you a list of matching profiles.",
      stepNumber: "3"
    }
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 text-[#333333]   bg-gradient-to-b from-indigo-100 to-purple-50 rounded-xl">
      <div className=" container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
          How does it work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;