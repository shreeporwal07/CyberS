import React from "react";
import classes from "../Styles/Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Cart = (props) => {

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemsAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

 const cartItems = (
     <>
      {cartCtx.items.map((items) => (
        <CartItem
          kay={items.id}
          image={items.image}
          tittle={items.name}
          amount={items.amount}
          price={items.price}
          totalAmount={items.amount * items.price}
          onRemove={cartItemsRemoveHandler.bind(null, items.id)}
          onAdd={cartItemsAddHandler.bind(null, items)}
        />
      ))}
    </>
  );
  return (
    <div className={classes.cartpanel}>
      <div
        className={classes.opaclayer}
        onClick={() => props.setShowCart(false)}
      ></div>
      <div className={classes.cartcontent}>
        <div className={classes.cartheader}>
          <span className={classes.heading}>Shopping Cart</span>
          <span className={classes.close}>
            <span
              className={classes.text}
              onClick={() => props.setShowCart(false)}
            >
              <CloseIcon onClick={() => props.setShowCart(false)}/>
              close{" "}
            </span>
          </span>
        </div>
       
        { !hasItems && (
          <div className={classes.emptycart}>
            <AddShoppingCartIcon style={{ fontSize: "100px" }} />
            <span className={classes.emptycarttext}>Your Cart is Empty</span>
            <button className={classes.returncta}onClick={() => props.setShowCart(false)}>Continue Shopping</button>
          </div>
        ) }

         { hasItems && <>
           {cartItems}
            <div className={classes.cartfooter}>
              <div className={classes.subtotal}>
                <span className={classes.text}>SubTotal:</span>
                <span className={classes.texttotal}> &#8377; {totalAmount}</span>
              </div>
              <div className={classes.abutton}>
                <button className={classes.checkoutcta}>Checkout</button>
              </div>
            </div>
          </>}
        
      </div>
    </div>
  );
};

export default Cart;
