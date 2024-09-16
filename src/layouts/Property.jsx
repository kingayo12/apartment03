import { FaArrowRight } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { motion } from "framer-motion";
import Imgs1 from "../assets/imgs/hero10.png";
import Imgs2 from "../assets/imgs/hero1.jpg";
import Imgs3 from "../assets/imgs/hero11.png";
import Imgs4 from "../assets/imgs/primel.png";
import Imgs5 from "../assets/imgs/hero12.png";
import Imgs6 from "../assets/imgs/hero13.png";

// Property data array with images, titles, and descriptions
const propertyData = [
  {
    id: 1,
    img: Imgs1,
    title: "Architectural Excellence",
    description:
      "The Gentry features Portland stone-clad external walls and wrought iron balustrading, combining timeless elegance with modern design.",
    className: "p_three",
  },
  {
    id: 2,
    img: Imgs2,
    title: "Security and Privacy",
    description:
      "Round-the-clock surveillance, controlled access, and smart home technologies ensure safety and peace of mind for residents.",
    className: "p_three",
  },
  {
    id: 3,
    img: Imgs3,
    title: "Spacious and Modern Interiors",
    description:
      "Open-plan living areas with large floor-to-ceiling windows, high-end finishes, and luxurious fixtures provide the perfect blend of comfort and style.",
    className: "p_four",
  },
  {
    id: 4,
    img: Imgs4,
    title: "Prime Location",
    description:
      "Located near business centers, fine dining, shopping, and schools, The Gentry offers a strategic location that combines convenience with exclusivity.",
    className: "p_one",
  },
  {
    id: 5,
    img: Imgs5,
    title: "Eco-Friendly Design",
    description:
      "The Gentry incorporates energy-efficient lighting, smart climate control systems, and water-saving fixtures, minimizing its environmental impact.",
    className: "p_two",
  },
  {
    id: 6,
    img: Imgs6,
    title: "World-Class Amenities",
    description:
      "Amenities include a rooftop pool, state-of-the-art fitness center, 24/7 concierge services, and secure underground parking for residents.",
    className: "p_one",
  },
];

// Component for displaying each property
const PropertyCard = ({ img, title, description, screenHandle, className }) => (
  <motion.div
    className={className}
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 100, opacity: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.2 }}
  >
    <FullScreen handle={screenHandle}>
      <img src={img} alt={title} />
    </FullScreen>
    <div className='iconp' onClick={screenHandle.enter}>
      <FaArrowRight className='icon_p' />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const Property = () => {
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  const screen3 = useFullScreenHandle();
  const screen4 = useFullScreenHandle();
  const screen5 = useFullScreenHandle();
  const screen6 = useFullScreenHandle();

  const screens = [screen1, screen2, screen3, screen4, screen5, screen6];

  return (
    <div className='property_wrapper'>
      <div className='circlebig1'></div>
      <div className='circlebig2'></div>
      <div className='bg_blur'>
        <div className='container'>
          <div className='title'>
            <div className='big_text'>Explore Property</div>
          </div>
          <div className='property'>
            {propertyData.map((property, index) => (
              <PropertyCard
                key={property.id}
                img={property.img}
                title={property.title}
                description={property.description}
                screenHandle={screens[index]}
                className={property.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
