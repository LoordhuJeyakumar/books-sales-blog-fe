import PropTypes from "prop-types";
import styles from "./HomeFiftRow.module.css";
import ArticleCard from "../../../components/UI/ArticleCard";

const HomeFiftRow = ({ blogs }) => {
  return (
    <section className={styles.latestContainer}>
      <div className={styles.innerContainer}>
        <h5 className={styles.latestTitle}>Latest Articles</h5>
        {blogs?.length ? (
          <>
            <p className={styles.subtitle}>
              Discover the latest in literary insights, book reviews, and author
              interviews. Stay updated with our most recent articles below.
            </p>
            <div className={styles.cardsWrapper}>
              {blogs.map((blog) => (
                <ArticleCard key={blog._id} {...blog} />
              ))}
            </div>
            <div className={styles.viewMore}>
              <a className={styles.viewMoreLink} href="/blog">
                View All Articles
              </a>
            </div>
          </>
        ) : (
          <p className={styles.noArticlesMessage}>
            No articles available at the moment. Check back later for new
            content or explore our book collection!
          </p>
        )}
      </div>
    </section>
  );
};

HomeFiftRow.propTypes = {
  blogs: PropTypes.array,
};

export default HomeFiftRow;
