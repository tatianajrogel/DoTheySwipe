import { Zap, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";
// import girl from "../assets/images/girlImage.jfif"
import girl from "./../../assets/images/girlImage.jfif"
// FastAndAccurate Section
const FastAndAccurate = () => {
  const features = [
    {
      cardImage: girl,
      title: "Fast & Accurate Searches",
      description: "Our advanced algorithm delivers results within minutes.",
      imageFirst: true
    },
    {
      cardImage: girl,
      title: "Complete Anonymity",
      description: "The person you search for will never know.",
      imageFirst: false
    }
  ];

  return (
    <section className=" max-w-6xl mx-auto py-6 px-4 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              cardImage={feature.cardImage}
              title={feature.title}
              description={feature.description}
              imageFirst={feature.imageFirst}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastAndAccurate;

