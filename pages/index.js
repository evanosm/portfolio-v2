import { motion, AnimatePresence } from "framer-motion";
import { useParallax, Parallax } from "react-scroll-parallax";

import { Link, animateScroll as scroll } from "react-scroll";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { useState } from "react";

const index = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const parallax = useParallax({
    speed: 10,
  });

  const parallaxSlower = useParallax({
    speed: 5,
  });

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="hero">
      <div className="hero-content">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#5692fe",
              },
            },
            fpsLimit: 144,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 15,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="nav-buttons">
          <a href="/api/getResume">
            <motion.button
              initial={{ y: -200 }}
              animate={{ y: 0, transition: { type: "spring", duration: 0.5 } }}
              transition={{ type: "spring", duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="download"
            >
              Download resume
            </motion.button>
          </a>
          <a href="/contact">
            <motion.button
              initial={{ y: -200 }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 0.5, delay: 0.2 },
              }}
              transition={{ type: "spring", duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="contact"
            >
              Contact me
            </motion.button>
          </a>
        </div>

        <motion.h1
          ref={parallax.ref}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, bounce: 0.6 }}
          className="name"
        >
          Evan OSMONT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={parallaxSlower.ref}
        >
          Next.js + Firebase enjoyer 🚀
        </motion.p>

        <div className="button-wrapper">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
            ignoreCancelEvents={true}
          >
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", duration: 3, bounce: 0.6 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="to-about"
            >
              Who am I ? 🐱‍👤
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1654677256">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const About = () => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const parallax = useParallax({
    speed: 10,
  });

  return (
    <div className="about" id="about">
      <motion.h1
        onViewportEnter={() => {
          setIsOnScreen(true);
        }}
        className="about-title"
        ref={parallax.ref}
      >
        About me...
      </motion.h1>
      {isOnScreen ? (
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{type: 'spring', duration: 2, delay: 0.5}}
          className="card">
            <div className="item">
              <h2 className="item-title">Frontend</h2>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>80%</div>
              </div>
            </div>
            
            <div className="item">
              <h2 className="item-title">Backend</h2>
              <div className="progress">
                <div className="progress-bar" style={{ width: "30%" }}>30%</div>
              </div>
            </div>
            
            <div className="item">
              <h2 className="item-title">Video Editing</h2>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>80%</div>
              </div>
            </div>
            
            <div className="item">
              <h2 className="item-title">React</h2>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}>80%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{type: 'spring', duration: 2, delay: 1}} className="card">
            <p>
              I'm a web developer with a passion for building things that people
              love.
            </p>
          </motion.div>

          <div className="card">
            <p>
              I'm a web developer with a passion for building things that people
              love.
            </p>
          </div>

          <div className="card">
            <p>
              I'm a web developer with a passion for building things that people
              love.
            </p>
          </div>

          <div class="custom-shape-divider-bottom-1654692644">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default index;
