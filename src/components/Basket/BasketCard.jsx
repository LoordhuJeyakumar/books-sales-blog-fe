import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Basket.module.css";
import { removeItemFromBasket } from "../../store/basketSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const BasketCard = ({
  title,
  price,
  quantity,
  image,
  slug,
  basketToggle,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const API_BASE_URL = process.env.REACT_APP_URL || "http://localhost:3333";

  const removeItem = async (event) => {
    event.preventDefault();
    dispatch(removeItemFromBasket({ title }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img
          src={`${API_BASE_URL}api/v1/products/image/${image}`}
          alt={title}
        />
        <div className={styles.titleGroup}>
          <Link
            onClick={(e) => {
              basketToggle(e);
              navigate(`/products/${slug}`);
            }}
          >
            <p>{title}</p>
          </Link>
          <span>
            ${price} x {quantity} = ${price * quantity}
          </span>
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
      <div className={styles.productRight}>
        <input
          disabled
          min="1"
          type="number"
          value={itemQuantity || 1}
          onChange={(event) => setItemQuantity(event.target.value)}
        />
      </div>
    </div>
  );
};

BasketCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
  slug: PropTypes.string,
  basketToggle: PropTypes.func,
  imageUrl: PropTypes.string,
};

export default BasketCard;
