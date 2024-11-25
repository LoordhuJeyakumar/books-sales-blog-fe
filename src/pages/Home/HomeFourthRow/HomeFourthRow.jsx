import styles from "./HomeFourthRow.module.css";
import img1 from "../../../images/Photo.png";
import img2 from "../../../images/book-clubimage.png";
import { Link } from "react-router-dom";

const HomeFourthRow = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <h4 className={styles.topTitle}>Explore Our Literary Blog</h4>
            <p className={styles.topText}>
              Welcome to our literary blog, where we delve into the world of
              books. Discover in-depth articles, author interviews, book
              recommendations, and much more. Perfect for avid readers and
              literary enthusiasts.
            </p>
            <Link className={styles.topButton} to="/blog">
              Explore Now
            </Link>
          </div>
          <div className={styles.topRight}>
            <img src={img1} alt="Explore Our Literary Blog" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <h5 className={styles.bottomTitle}>What You&apos;ll Discover</h5>
          <div className={styles.bottomContent}>
            <div className={styles.bottomLeft}>
              <div className={styles.box}>
                <div>01</div>
                <p>
                  In-depth book reviews that provide insight and critical
                  analysis.
                </p>
              </div>
              <div className={styles.box}>
                <div>02</div>
                <p>
                  Author interviews giving you a peek into the minds behind the
                  stories.
                </p>
              </div>
              <div className={styles.box}>
                <div>03</div>
                <p>Curated book lists to help you find your next great read.</p>
              </div>
              <div className={styles.box}>
                <div>04</div>
                <p>
                  Literary news and updates to keep you informed about the
                  latest in the book world.
                </p>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <img src={img2} alt="What You'll Discover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourthRow;
