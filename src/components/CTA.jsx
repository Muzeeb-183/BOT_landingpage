export default function CTASection() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 text-white text-center px-4 sm:px-6 md:px-10"
      data-aos="fade-up"
      id="cta"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
        💸 Start Saving While You Spend!
      </h2>

      <p className="mb-10 text-base sm:text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
        Join 1000+ students earning real cashback — no signups, no spam, just sweet rewards. Don’t shop without it!
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        <a
          href="https://t.me/SSM_Cashback_Bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 sm:px-8 py-3 bg-white text-black font-bold text-base sm:text-lg rounded-lg hover:bg-gray-100 transition shadow-md">
            🚀 Try SSM Bot Now
          </button>
        </a>

        <a
          href="https://t.me/SSM_CashBack_Official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 sm:px-8 py-3 bg-black text-black font-bold text-base sm:text-lg rounded-lg hover:bg-gray-900 transition shadow-md">
            📢 Join Updates Channel
          </button>
        </a>

        <a
          href="https://t.me/@SSM_customer_care"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 sm:px-8 py-3 bg-orange-100 text-black font-bold text-base sm:text-lg rounded-lg hover:bg-orange-200 transition shadow-md">
            💬 Talk to Support
          </button>
        </a>
      </div>
    </section>
  );
}
