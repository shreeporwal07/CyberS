import React from "react";
import classes from "../Styles/Home.module.css";
import { motion } from "framer-motion";
import Products from "./Products";
import Product from "../Products/Product";
import ProductPage from "./ProductPage";
function Home() {
  function handleClick() {
    window.location.href = "/AppointmentForm";
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const imageUrl =
    "https://pngimg.com/uploads/headphones/headphones_PNG7652.png";
    const imageUrl1="https://www.pngarts.com/files/2/Black-Abstract-Lines-Transparent.png";
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
        alt="Background Image"
        className={classes.backgroundImage}
      />
        <div className={classes.gradientCircle1}></div>
          <div className={classes.headingContainer}>
            <h1 className={classes.heading}>Planet Musicians' Choice SH180BMM Stereo Headphones</h1>
            <p>Immerse yourself in exceptional audio with our premium headphones. Engineered for unparalleled sound quality, comfort, and style, these headphones deliver an immersive experience for music enthusiasts and audiophiles alike.</p>
            <button> See More </button>
          </div>
          <div className={classes.gradientCircle}></div>
          <img
            src={imageUrl}
            alt="Your Image"
            className={classes.outsideImage}
          />
          <div className={classes.fade_bottom}></div>
        </div>
        <div className={classes.home_row}>
          <Products
            id="12321341"
            title="Zebronics, ZEB-NC3300 USB Powered Laptop Cooling Pad with Dual Fan, Dual USB Port"
            price={599}
            rating={5}
            image="https://m.media-amazon.com/images/I/81aV57iUikL._AC_SY350_.jpg"
          />
          <Products
            id="12399021341"
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
            price={22000}
            rating={5}
            image="https://m.media-amazon.com/images/I/818nWWkwuAL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Products
            id="123344341"
            title="Vaseline Intensive Care Aloe Fresh Hydrating Body Lotion 400 ml, Daily Moisturizer for soft skin"
            price={435}
            rating={5}
            image="https://m.media-amazon.com/images/I/41VDFuklcSL._AC_SY350_.jpg"
          />
          <Products
            id="1234534341"
            title="PHILIPS BT3231/15 Smart Beard Trimmer - Power adapt technology for precise trimming- Quick Charge; 20 settings; 60 min run time, Green"
            price={1795}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81L3BIIbF-L._AC_UL320_SR320,320_.jpg"
          />
          <Products
            id="46421341"
            title="Supples Baby Wet Wipes with Aloe Vera and Vitamin E - 72 Wipes/Pack, (Pack of 3)"
            price={189}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/71b89yjg-FL._AC_UL320_SR320,320_.jpg"
          />
          <Products
            id="1233463441"
            title="Cadbury Dairy Milk Silk Valentine Heart Blush Chocolate Bar, 150 g"
            price={168}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/61og8iYvNZL._AC_UL320_SR320,320_.jpg"
          />
          <Products
            id="1244364341"
            title="Hershey's Kisses Everyday Moments Gift Pack 103.2g (Pink / Golden)"
            price={175}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51RLEKxmq1L._AC_UL320_SR320,320_.jpg"
          />
          <Products
            id="1236343341"
            title="Happilo 100% Natural Premium 200g Whole Cashews | Whole Crunchy Cashew | Premium Kaju nuts | Nutritious &amp; Delicious | Gluten Free | Source of Minerals &amp; Vitamins"
            price={229}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/71tYPz++3+L._AC_UL320_SR320,320_.jpg"
          />
        </div>
        <ProductPage />
      </motion.div>
    </>
  );
}

export default Home;
