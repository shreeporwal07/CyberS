import { useState } from "react";
// import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import RelatedProducts from "./RelatedProducts/RelatedProducts";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "../Styles/ProductPage.module.css";
import prod from "../../assets/img/logo.png"
import { useEffect } from "react";
const ProductPage = (props) => {
  useEffect(() => {
    const gradientCircle = document.querySelector(`.${classes.gradientCircle}`);

    const updateGradientCirclePosition = () => {
      const scrollPosition = window.scrollY;
      const circleTop = -40 + scrollPosition * 0.1;
      const circleRight = 30 - scrollPosition * 0.1;

      gradientCircle.style.top = `${circleTop}vh`;
      gradientCircle.style.right = `${circleRight}vh`;
    };

    window.addEventListener("scroll", updateGradientCirclePosition);

    return () => {
      window.removeEventListener("scroll", updateGradientCirclePosition);
    };
  }, []);
  

  // const [quantity, setQuantity] = useState(1);
  // const { id } = useParams();
  //   const { handleAddToCart } = useContext(Context);
  //   const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  // let data = null;
  // const decrement = () => {
  //   setQuantity((prevState) => {
  //     if (prevState === 1) return 1;
  //     return prevState - 1;
  //   });
  // };
  // const increment = () => {
  //   setQuantity((prevState) => prevState + 1);
  // };

  // if (!data) return;
  // const product = data?.data?.[0]?.attributes;

  return (
    <div className={classes["single-product-main-content"]}>
      <div className={classes["layout"]}>
        <div className={classes["single-product-page"]}>
        <div className={classes.gradientCircle}></div>
          <div className={classes["left"]}>
            <img
              src={prod}
              alt="props.altname"
            />
          </div>
          <div className={classes["right"]}>
            {/* <span className={classes["name"]}>{product.title}</span>
            <span className={classes["price"]}>&#8377;{product.price}</span>
            <span className={classes["desc"]}>{product.description}</span> */}
            <span className={classes["name"]}>mic</span>
            <span className={classes["price"]}>&#8377;20</span>
            <span className={classes["desc"]}>sounds GOOD</span>

            <div className={classes["cart-buttons"]}>
              {/* <div className={classes["quantity-buttons"]}>
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div> */}
              <button
                className={classes["add-to-cart-button"]}
                // onClick={() => {
                //   //   handleAddToCart(data?.data?.[0], quantity);
                //   setQuantity(1);
                // }}
              >
                <AddShoppingCartIcon size={20} />
                ADD TO CART
              </button>
            </div>

            <span className={classes["divider"]} />
            <div className={classes["info-item"]}>
              {/* <span className={classes["text-bold"]}>
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span> */}
              <span className={classes["text-bold"]}>
                Share:
                <span className={classes["social-icons"]}>
                  <FacebookIcon size={16} />
                  <TwitterIcon size={16} />
                  <InstagramIcon size={16} />
                  <LinkedInIcon size={16} />
                  <PinterestIcon size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        /> */}
      </div>
    </div>
  );
};

export default ProductPage;
