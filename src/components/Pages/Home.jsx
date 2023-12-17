import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { get, ref, set } from "firebase/database";
import { db } from "../../firebase";
import classes from "../Styles/Home.module.css";
import { motion } from "framer-motion";
import Products from "./Products";
import Product from "../Products/Product";
import ProductPage from "./ProductPage";
import { useState, useEffect } from "react";
function Home() {
  const [productsData, setProductsData] = useState([]);
  const [showdata, setShowdata] = useState(false);



  // useEffect(() => {
  //   const productsRef = ref(db, "Products");
  //   console.log(productsRef);
  //   const fetchData = async () => {
  //     try {
  //       const snapshot = await productsRef.get();
  //       const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //       setProductsData(productList);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  //   console.log(productsData);
  //   setShowdata(true);
  // }, []);




  
  function handleClick() {
    window.location.href = "/AppointmentForm";
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
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
            alt="Background Image"
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
            alt="Your Image"
            className={classes.outsideImage}
          />
          <div className={classes.fade_bottom}></div>
        </div>
        <div className={classes.home_row}>
          {console.log(productsData)}
          {!showdata ? (
            <p>Loading </p>
          ) : (
            productsData.map((product) => (
              <Products
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product}
                image={product.image}
              />
            ))
          )}
        </div>
        <ProductPage />
      </motion.div>
    </>
  );
}

export default Home;
