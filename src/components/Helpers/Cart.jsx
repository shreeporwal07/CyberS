import React from "react";
import classes from "../Styles/Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Cart = (props) => {
  return (
    <div className={classes.cartpanel}>
      <div className={classes.opaclayer} onClick={()=>props.setShowCart(false)}></div>
      <div className={classes.cartcontent}>
        <div className={classes.cartheader}>
          <span className={classes.heading}>Shopping Cart</span>
          <span className={classes.close}>
            <CloseIcon />

            <span
              className={classes.text}
              onClick={() => props.setShowCart(false)}
            >
              close{" "}
            </span>
          </span>
        </div>
        {/* <div className={classes.emptycart}>
          <AddShoppingCartIcon style={{ fontSize: "100px" }} />\
          <span className={classes.emptycarttext}>Your Cart is Empty</span>
          <button className={classes.returncta}>Continue Shopping</button>
        </div> */}
        <>
          <CartItem />
          <div className={classes.cartfooter}>
            <div className={classes.subtotal}>
              <span className={classes.text}>SubTotal:</span>
              <span className={classes.texttotal}> &#8377; 0.00</span>
            </div>
            <div className={classes.abutton}>
              <button className={classes.checkoutcta}>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
