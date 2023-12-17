import React from "react";

import classes from "../Styles/Home.module.css";
import { motion } from "framer-motion";
import Products from "./Products";
import { useEffect } from "react";


function Home(props) {
  useEffect(() => {
    const gradientCircle = document.querySelector(`.${classes.gradientCircle}`);

    const updateGradientCirclePosition = () => {
      const scrollPosition = window.scrollY;
      const circleTop = 0 + scrollPosition * 0.1;
      const circleRight = 0 - scrollPosition * 0.1;

      gradientCircle.style.bottom = `${circleTop}vh`;
      gradientCircle.style.right = `${circleRight}vh`;
    };

    window.addEventListener("scroll", updateGradientCirclePosition);

    return () => {
      window.removeEventListener("scroll", updateGradientCirclePosition);
    };
  }, []);
  useEffect(() => {
    const gradientCircle1 = document.querySelector(
      `.${classes.gradientCircle1}`
    );

    const updateGradientCirclePosition = () => {
      const scrollPosition = window.scrollY;
      const circleTop = -20 + scrollPosition * 0.1;
      const circleRight = -10 - scrollPosition * 0.1;

      gradientCircle1.style.top = `${circleTop}vh`;
      gradientCircle1.style.left = `${circleRight}vh`;
    };

    window.addEventListener("scroll", updateGradientCirclePosition);

    return () => {
      window.removeEventListener("scroll", updateGradientCirclePosition);
    };
  }, []);

  function handleClick() {
    window.location.href = "/AppointmentForm";
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  console.log(props.products);
  const imageUrl =
    "https://pngimg.com/uploads/headphones/headphones_PNG7652.png";
  const imageUrl1 =
    "https://www.pngarts.com/files/2/Black-Abstract-Lines-Transparent.png";
  return (
    <>
      <motion.div
        className={classes.home}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={classes.home_image}>
          <img
            src={imageUrl1}
            alt="Background"
            className={classes.backgroundImage}
          />
          <div className={classes.gradientCircle1}></div>
          <div className={classes.headingContainer}>
            <h1 className={classes.heading}>
              Planet Musicians' Choice SH180BMM Stereo Headphones
            </h1>
            <p>
              Immerse yourself in exceptional audio with our premium headphones.
              Engineered for unparalleled sound quality, comfort, and style,
              these headphones deliver an immersive experience for music
              enthusiasts and audiophiles alike.
            </p>
            <button> See More </button>
          </div>
          <div className={classes.gradientCircle}></div>
          <img
            src={imageUrl}
            alt="Your"
            className={classes.outsideImage}
          />
          <div className={classes.fade_bottom}></div>
        </div>
        <div className={classes.home_row}>
          {props.products.map((product) => (
              <Products
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))
        }
        </div>
      </motion.div>
    </>
  );
}

export default Home;
