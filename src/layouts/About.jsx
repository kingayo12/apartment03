import Shape from "../assets/imgs/triangle-shape.png";
import RightImg from "../assets/imgs/imgright.png";
import LeftImg from "../assets/imgs/imgleft.png";
import BottomImg from "../assets/imgs/imgbottom.png";
import { FaPlay, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import Myvids from "../assets/videos/Gentry Ikoyi.mp4";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoShow = () => {
    setShowVideo(false);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className='about_container'>
      <div className='circlebig1'></div>
      <div className='circlebig2'></div>
      <div className='bg_blur'>
        <img src={Shape} alt='' className='triangle_shape1' />
        <img src={Shape} alt='' className='triangle_shape12' />

        <div className='about container'>
          {/* Animate the title */}
          <motion.div
            className='about_title'
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.div>

          <div className='about_other'>
            <motion.div
              className='left'
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className='big_text'>
                The Gentry Ikoyi <br /> Luxury Apartment
              </div>
              <small>
                The Gentry is situated on the corner of Webb Road abutting Thompson Avenue.
                Cloistered by Bourdillion, Glover, and Kingsway. The Gentry enjoys the best of both
                worlds—access to the emerging center of commerce, in Lagos on Kingsway and to the
                residential dwellings of Old Ikoyi with its rich heritage. Moments from everywhere
                you want to be. <br /> The Gentry offers Luxury apartments with Portland stone-clad
                walls, elegant wrought iron balustrading, and beautiful amenities for a modern
                lifestyle.
              </small>

              <div className='boxed'>
                <div className='box'>
                  <div className='topic'>Exclusive Living in Prime Locations</div>
                  <div className='article'>
                    Perfectly located, The Gentry offers easy access to the city’s finest
                    attractions, while providing serene surroundings.
                  </div>
                </div>
                <div className='box'>
                  <div className='topic'>An Investment in Luxury</div>
                  <div className='article'>
                    Your home at The Gentry is not just a place to live—it’s a statement of success
                    and a secure investment for the future.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='right'
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className='images'>
                {/* Right Image - animates from the right */}
                <motion.div
                  className='about__thumb-single'
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -100, opacity: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={RightImg} alt='Image' />
                </motion.div>

                {/* Left Image - animates from the left */}
                <motion.div
                  className='about__thumb-single'
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={LeftImg} alt='Image' />
                </motion.div>

                {/* Bottom Image - animates from the bottom */}
                <motion.div
                  className='about__thumb-single'
                  whileInView={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={BottomImg} alt='Image' />
                </motion.div>

                {/* Video play button */}
                <motion.div
                  className='video-btn-wrapper'
                  onClick={handleVideoShow}
                  whileHover={{ scale: 1.1 }}
                >
                  <a target='_blank' title='video Player' className='open-video-popup'>
                    <FaPlay className='iconvids' />
                  </a>
                </motion.div>
              </div>

              {/* Video Overlay */}
              {showVideo && (
                <div className='video-overlay'>
                  <div className='vide_wrapper'>
                    <div className='close-button' onClick={handleVideoClose}>
                      <FaTimes />
                    </div>
                    <video className='video-element' controls>
                      <source src={Myvids} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
