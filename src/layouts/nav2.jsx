import { FaHome } from "react-icons/fa";
import { FaMoneyBills, FaRegImage, FaRocket } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { GrHelpBook } from "react-icons/gr";
import { useEffect, useState } from "react";

const Nav2 = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.4, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className='nav2'>
      <div className='nav2_wrapper'>
        <div className='nav_links'>
          <a href='#' className={activeSection === "#" ? "active" : ""}>
            <FaHome />
            <p>Home</p>
          </a>
          <a href='#about' className={activeSection === "#about" ? "active" : ""}>
            <GiFamilyHouse />
            <p>About</p>
          </a>
          <a href='#explore' className={activeSection === "#explore" ? "active" : ""}>
            <FaRocket />
            <p>Explore</p>
          </a>

          <a href='#gallery' className={activeSection === "#gallery" ? "active" : ""}>
            <FaRegImage />
            <p>Gallery</p>
          </a>
          <a href='#pricing' className={activeSection === "#pricing" ? "active" : ""}>
            <FaMoneyBills />
            <p>Pricing</p>
          </a>
          <a href='#faq' className={activeSection === "#faq" ? "active" : ""}>
            <GrHelpBook />
            <p>Faq</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
