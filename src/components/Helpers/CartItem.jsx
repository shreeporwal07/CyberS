import React from "react";
import classes from "../Styles/CartItem.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
const CartItem = () => {
  return (
    <div className={classes["cart-products"]}>
      <div className={classes["cart-product"]}>
        <div className={classes["img-container"]}>
          <img
            src="https://scalebranding.com/wp-content/uploads/2022/02/Tiger-8.jpg"
            alt="props.altname"
          />
        </div>
        <div className={classes["prod-details"]}>
          <span className={classes["name"]}>Product</span>
          <CloseIcon className={classes["close-btn"]} />

          <div className={classes["quantity-buttons"]}>
            <button className={classes["quantity-btn"]}>-</button>
            <span className={classes["quantity"]}>1</span>
            <button className={classes["quantity-btn"]}>+</button>
          </div>
          <div className={classes.text}>
            <span >Free Delivery</span>
            <span>x</span>
            <span className={classes.highlight} >&#8377; 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
