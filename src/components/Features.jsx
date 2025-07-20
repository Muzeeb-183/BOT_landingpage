import { FaBolt, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBolt className="text-orange-500 text-3xl sm:text-4xl" />,
      title: "Instant Cashback Magic",
      desc: "✅ Save on stuff you were already buying — no signup, no ads.",
    },
    {
      icon: <FaHeart className="text-orange-500 text-3xl sm:text-4xl" />,
      title: "Student-Friendly Vibes",
      desc: "✅ Super fast replies – like your crush replying instantly.",
    },
    {
      icon: <FaShoppingBag className="text-orange-500 text-3xl sm:text-4xl" />,
      title: "Many Stores, One Bot",
      desc: "✅ Flipkart, Myntra, Nykaa, Shopsy & so on — all in one place.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white text-black" id="features">
      <div className="text-center mb-12 px-4" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Why Choose SSM Bot?</h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Built with 💛 for the student community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-16">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 hover:bg-orange-50 rounded-xl shadow-md transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-orange-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
