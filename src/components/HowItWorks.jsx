export default function HowItWorks() {
  const steps = [
    {
      emoji: "🔗",
      text: "Paste your product link into the bot.",
    },
    {
      emoji: "🛒",
      text: "Buy using the cashback link we give you.",
    },
    {
      emoji: "📸",
      text: "Upload your order screenshot.",
    },
    {
      emoji: "💰",
      text: "Once the order is delivered & verified, you get real cashback — up to 25%!",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-100 text-black" id="howitworks">
      <div className="text-center mb-12 px-4" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Just 4 steps. Easy as ordering Maggi 🍜.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-10 lg:px-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="text-4xl mb-4">{step.emoji}</div>
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              <span className="font-bold text-orange-600">Step {index + 1}:</span> {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
