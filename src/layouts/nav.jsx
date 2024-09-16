import Logo1 from "../assets/imgs/logo.png";
import { useState, useEffect } from "react";
const nav = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      // Adjust '100' to when you want the nav to become sticky
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav_container ${isSticky ? "sticky" : ""}`}>
      <div className='nav'>
        <div className='logo'>
          <img src={Logo1} alt='' />
        </div>
      </div>
    </div>
  );
};

export default nav;
