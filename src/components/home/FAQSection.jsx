import FAQItem from "./FAQItem";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is DoTheySwipe?",
      answer:
        "DoTheySwipe is an online service that helps you discreetly and anonymously check if someone is using popular dating apps like Tinder. Our goal is to provide clarity and peace of mind.",
    },
    {
      question: "How does DoTheySwipe work?",
      answer:
        "Our advanced algorithm scans dating platforms using the information you provide while maintaining complete anonymity throughout the process.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we prioritize your privacy. All searches are completely confidential, and we never share your information with third parties.",
    },
    {
      question: "How accurate are the results?",
      answer:
        "Our results have a high accuracy rate thanks to our sophisticated matching algorithm and comprehensive database scanning.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
  ];

  return (
    <section className="py-16 px-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-scenter  mb-16">
         <div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">Asked Questions.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Answers to Common Questions About "DoTheySwipe"
          </p>
         </div>

          <div className="text-center mt-12">
          <button className="px-8 py-4 self-start  text-slate-950 border border-slate-700 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            View all FAQs
          </button>
        </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white px-5 rounded-xl">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
