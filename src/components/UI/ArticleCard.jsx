import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/dateFormatter";
import styles from "./ArticleCard.module.css";
const ArticleCard = ({ createdAt, description, image, title, user, _id }) => {
  const API_BASE_URL = process.env.REACT_APP_URL || "http://localhost:3333";

  return (
    <Link className={styles.card} to={`/blog/${_id}`}>
      <img
        className={styles.cardImage}
        src={`${API_BASE_URL}api/v1/blogs/image/${image}`}
        alt=""
      />

      <div className={styles.cardArticle}>
        <h4 className={styles.title}>{title}</h4>
        {
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>
        }
      </div>
      <div className={styles.date}>
        <p>Author: {user.name}</p>
        <span> {formatDate(createdAt, "DD-MM-YYYY hh:mm")} </span>
      </div>
    </Link>
  );
};

ArticleCard.propTypes = {
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ArticleCard;
