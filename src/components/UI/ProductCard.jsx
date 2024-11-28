import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { updateUserBasket } from "../../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import BasketLoading from "../../Loading/BasketLoading";
import { getUser } from "../../store/userSlice";

const API_BASE_URL = process.env.REACT_APP_URL || "http://localhost:3333";
const ProductCard = ({
  title,
  description,
  price,
  pages,
  image,
  category,
  ratingsAverage,
  ratingsQuantity,
  slug,
  imageUrl,
  _id,
}) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    setClick(true);
    const items = {
      title,
      description,
      price,
      pages,
      image,
      category,
      ratingsAverage,
      ratingsQuantity,
      slug,
    };
    dispatch(updateUserBasket(items)).then((res) => setClick(false));
  };

  return (
    <Link to={`${slug}`} className={styles.container}>
      <div className={styles.image}>
        <img
          src={`${API_BASE_URL}api/v1/products/image/${image}`}
          alt={title}
          onError={() => console.error("Image failed to load:", imageUrl)}
        />
      </div>
      <div className={styles.productDetail}>
        <div className={styles.title}>
          <h4>{title}</h4>
          <span>${price}</span>
          <p>{description}</p>
        </div>
        <div className={styles.cardBottom}>
          <p> pages: {pages}</p>
          {click ? (
            <button className={styles.addCard}>
              <BasketLoading />
            </button>
          ) : (
            <button
              disabled={user.length === 0}
              onClick={addToCart}
              className={styles.addCard}
            >
              Add to Card
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  pages: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  ratingsAverage: PropTypes.number,
  ratingsQuantity: PropTypes.number,
  slug: PropTypes.string,
  _id: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ProductCard;
