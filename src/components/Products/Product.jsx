import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Styles/Product.module.css";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className={classes["product-card"]}
            onClick={() => navigate("/product/" + id)}
        >
            <div className={classes["thumbnail"]}>
                {/* <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.image.data[0].attributes.url
                    }
                /> */}
            </div>
            <div className={classes["prod-details"]}>
                {/* <span className={classes["name"]}>{data.title}</span>
                <span className={classes["price"]}>&#8377;{data.price}</span> */}
                <span className={classes["name"]}>hehe</span>
                <span className={classes["price"]}>&#8377;20</span>
            </div>
        </div>
    );
};

export default Product;