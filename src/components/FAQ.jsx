import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "🧠 Is this legit?",
    answer: "100%. You earn from our affiliate commission. No cost to you.",
  },
  {
    question: "🔒 Is this safe or sus?",
    answer: "100% safe. No personal info. No bank links. Just affiliate magic.",
  },
  {
    question: "💰 How much can I earn?",
    answer: "Depends on your shopping – the more the product price, the more the cashback.",
  },
  {
    question: "🤑 How do you make money?",
    answer: "We earn from brands. You get a piece. Win-win.",
  },
  {
    question: "📝 Do I need to sign up?",
    answer: "Nope. Just tap, chat, and chill.",
  },
  {
    question: "📸 Any proof?",
    answer: "Only order screenshots, and happy users. Join and see for yourself!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-0 py-16 max-w-4xl mx-auto" id="faq">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white"
      >
        🧠 Real Talk – FAQs
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border border-gray-700 rounded-lg p-5 sm:p-6 bg-gray-900 text-white"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-gray-300 text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
