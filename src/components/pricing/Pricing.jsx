import { useState } from "react";
import "./pricing.css";
import { FaArrowRight } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState("1Bedroom");

  const pricingPlans = {
    "1Bedroom": [
      {
        title: "Outright Payment",
        price: "₦45,000,000",
        features: [
          "Portland stone-clad walls",
          "Wrought iron balustrading",
          "Spacious living area",
          "High-end amenities",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "₦47,000,000",
        features: [
          "Initial Deposit: ₦10,000,000",
          "Flexible payment terms",
          "Includes premium amenities",
        ],
      },
    ],
    "2Bedroom": [
      {
        title: "Outright Payment",
        price: "₦70,000,000",
        features: [
          "Portland stone-clad walls",
          "Elegant wrought iron balustrading",
          "Spacious interiors with modern finishes",
          "Luxurious amenities",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "₦75,000,000",
        features: [
          "Initial Deposit: ₦15,000,000",
          "Flexible payment terms",
          "Includes premium amenities",
        ],
      },
    ],
    "3Bedroom": [
      {
        title: "Outright Payment",
        price: "₦100,000,000",
        features: [
          "Portland stone-clad walls",
          "Elegant wrought iron balustrading",
          "Expansive interiors with luxury finishes",
          "Access to exclusive amenities",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "₦105,000,000",
        features: [
          "Initial Deposit: ₦20,000,000",
          "Flexible payment terms",
          "Includes premium amenities",
        ],
      },
    ],
  };

  const currentPlans = pricingPlans[selectedOption];

  return (
    <motion.div className='pricing_container'>
      <div className='container'>
        <motion.section className='pricing_cont'>
          {/* Pricing Header */}
          <motion.div
            className='price_header'
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Pricing</h1>
            <p>Choose the perfect apartment plan that suits your lifestyle</p>
          </motion.div>

          {/* Price Selector */}
          <div className='pac'>
            <motion.div
              className='price_action'
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className={selectedOption === "1Bedroom" ? "active" : ""}
                onClick={() => setSelectedOption("1Bedroom")}
              >
                1 Bedroom
              </button>
              <button
                className={selectedOption === "2Bedroom" ? "active" : ""}
                onClick={() => setSelectedOption("2Bedroom")}
              >
                2 Bedroom
              </button>
              <button
                className={selectedOption === "3Bedroom" ? "active" : ""}
                onClick={() => setSelectedOption("3Bedroom")}
              >
                3 Bedroom
              </button>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            className='prices'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                className='pricing-card'
                key={index}
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                <div className='wrap'>
                  <h2>{plan.title}</h2>
                  <div className='long'></div>
                </div>
                <p className='price'>{plan.price}</p>
                <ul className='price_features'>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <BsPatchCheckFill className='iconp' /> {feature}
                    </li>
                  ))}
                </ul>
                <button className='cta-button'>
                  <h4>
                    <FaArrowRight className='iconpo' /> Choose Plan
                  </h4>
                  <div className='long'></div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Pricing;
