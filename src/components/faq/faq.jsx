import { useState } from "react";
import "./faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
// import Img1 from "../../assets/images/banner-shape.png";
// import Img2 from "../../assets/images/dotted-bg.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is The Gentry?",
      answer:
        "The Gentry is a luxury apartment complex featuring modern amenities, spacious interiors, and prime architectural designs, all located in a prime urban area.",
    },
    {
      question: "What types of apartments are available?",
      answer:
        "We offer a variety of apartments including 1-bedroom, 2-bedroom, and 3-bedroom units, each designed with contemporary finishes and ample living space.",
    },
    {
      question: "What amenities are included?",
      answer:
        "Residents of The Gentry have access to premium amenities such as a rooftop pool, state-of-the-art fitness center, 24/7 concierge services, secure parking, and more.",
    },
    {
      question: "Is The Gentry eco-friendly?",
      answer:
        "Yes, The Gentry is committed to sustainable living, with energy-efficient lighting, smart climate control systems, and eco-conscious building materials integrated into its design.",
    },
    {
      question: "What is the security like at The Gentry?",
      answer:
        "The Gentry ensures residents' security with round-the-clock surveillance, controlled access, and smart home technologies for enhanced safety and privacy.",
    },
    {
      question: "Are payment plans available for purchasing apartments?",
      answer:
        "Yes, we offer flexible payment plans, including outright purchases and installment options spread across 6 to 12 months.",
    },
  ];

  return (
    <div className='faq-section' id='faq'>
      {/* <img src={Img1} alt='' className='banner-three__shape ' />
      <img src={Img2} alt='' className='banner-three__dotted' /> */}

      <section className='faq-container container'>
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className='faq-item'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <motion.div
                className='faq-answer'
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Faq;
