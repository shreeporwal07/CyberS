import React from "react";
import classes from "../Styles/CartItem.module.css";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = (props) => {
  return (
    <div className={classes["cart-products"]}>
      <div className={classes["cart-product"]}>
        <div className={classes["img-container"]}>
          <img
            src={props.image}
            alt="product"
          />
        </div>
        <div className={classes["prod-details"]}>
          <span className={classes["name"]}>{props.tittle}</span>
          <CloseIcon className={classes["close-btn"]} />

          <div className={classes["quantity-buttons"]}>
            <button className={classes["quantity-btn"]} onClick={props.onRemove}>-</button>
            <span className={classes["quantity"]}>{props.amount}</span>
            <button className={classes["quantity-btn"]}onClick={props.onAdd}>+</button>
          </div>
          <div className={classes.text}>
            <span >{props.amount}</span>
            <span>x</span>
            <span className={classes.highlight} >&#8377;{props.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
