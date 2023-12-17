import React from "react";
import classes from "../Styles/Products.module.css";
// import { useStateValue } from "./StateProvider";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function Product(props) {
  const cartCtx=useContext(CartContext)
  const price = props.price;
  const addItemToCartHandler= () =>
  {
     cartCtx.addItem({id:props.id,name:props.title,amount:1,price:props.price ,image:props.image})
  }

  return (
    <div className={classes.product} >
      <img src={props.image} alt=""></img>
      <div className={classes.product_info}>
        <p>{props.title}</p>
        <p className={classes.product_price}>
          <small></small>
          <strong>&#8377;{price}</strong>
        </p>
        <div className={classes.product_rating}>
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addItemToCartHandler} >Add to basket</button>
      {/* product id,title,price,rating,image */}
    </div>
  );
}

export default Product;
