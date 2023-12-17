import React from "react";
import classes from "./Products.module.css";
// import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  // const [{basket},dispatch]=useStateValue();
  // const addToBasket=()=>{
  //   //add item to basket
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item:{
  //       id,
  //       title,
  //       price,
  //       rating,
  //       image,
  //     },
  //   });
  // };
  return (
    <div className={classes.product}>
      <img src={image} alt=""></img>
      <div className={classes.product_info}>
        <p>{title}</p>
        <p className={classes.product_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product_rating}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button >Add to basket</button>
      {/* product id,title,price,rating,image */}
    </div>
  );
}

export default Product;
