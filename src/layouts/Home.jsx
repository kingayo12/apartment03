import { FaPlay, FaTimes } from "react-icons/fa";
import Genhero1 from "../assets/imgs/genhero1.png";
import { useState } from "react";
import { motion } from "framer-motion";
import Myvids from "../assets/videos/Gentry Ikoyi.mp4";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoShow = () => {
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className='home_container' id='home'>
      <div className='circles'></div>
      <div className='hero_cont container'>
        <div className='fake_cont'></div>
        <div className='hero container'>
          <motion.div
            className='left'
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='company'>
              <div className='box'></div>
              <p>The Gentry Ikoyi</p>
            </div>

            <motion.div
              className='hero_title'
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Luxury Apartments <br /> For Your Perfect <br /> Lifestyle
            </motion.div>

            <motion.div
              className='play_vids'
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              onClick={handleVideoShow}
            >
              <div className='video_play_button'>
                <FaPlay className='iconp' />
              </div>
              <p>Click to play video</p>
            </motion.div>

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

          <motion.div
            className='right'
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className='img_con'>
              <img src={Genhero1} alt='bg1' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
