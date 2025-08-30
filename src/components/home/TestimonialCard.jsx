// TestimonialCard Component
const TestimonialCard = ({ name, rating, text, role }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Rating Stars */}
      <div className="flex justify-center mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl">✰</span>
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg italic text-center mb-6">
        "{text}"
      </p>
      
      {/* User Info */}
      <div className="text-center">
        <p className="font-semibold text-gray-900">{name}</p>
        {role && <p className="text-sm text-gray-600">{role}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard
