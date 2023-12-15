import React from "react";
import classes from "../Styles/Home.module.css";
import { motion } from "framer-motion";
function Home() {
  function handleClick() {
    window.location.href = "/AppointmentForm";
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        className={classes.home}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={classes.th}>
          <h4>Name it!</h4>
          <h1>"....."</h1>
          <p>
            ....
          </p>
          <button onClick={handleClick} className={classes.btn}>
            Button
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
