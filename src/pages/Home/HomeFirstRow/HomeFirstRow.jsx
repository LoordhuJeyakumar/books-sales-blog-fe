/* import styles from "./HomeFirstRow.module.css";
import { Link, useNavigate } from "react-router-dom";
import book from "../../../images/firstBook.png";

export const HomeFirstRow = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.firstContainer}>
      <div className={styles.firstInner}>
        <div className={styles.textWrapper}>
          <p className={styles.bestSellerTitle}>best seller </p>

          <article className={styles.bestArticle}>
            <h2>Books are uniquely portable magic</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </article>
          <div className={styles.buttonGroup}>
            <button onClick={() => navigate("/products")}>Order Today</button>
            <Link>Read Free Demo</Link>
          </div>

          <div className={styles.info}>
            <div>
              <b></b>
              <p>
                Pages: <span>586 pages</span>
              </p>{" "}
            </div>
            <div>
              <b></b>
              <p>
                Length: <span>10 Hours</span>
              </p>{" "}
            </div>
            <div>
              <b></b>
              <p>
                Rating: <span>4.5/5 (305 ratings)</span>
              </p>
            </div>
          </div>
        </div>

        <img className={styles.book} src={book} alt="the dark light" />
      </div>
    </section>
  );
};
 */

import styles from "./HomeFirstRow.module.css";
import { Link, useNavigate } from "react-router-dom";
import book from "../../../images/firstBook.png";

export const HomeFirstRow = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.firstContainer}>
      <div className={styles.firstInner}>
        <div className={styles.textWrapper}>
          <p className={styles.bestSellerTitle}>Best Seller</p>

          <article className={styles.bestArticle}>
            <h2>Discover Your Next Great Adventure</h2>
            <p>
              Dive into a world where every page turns into a new journey. Our
              books are not just stories; they&apos;re portals to different
              realms, packed with magic, mystery, and insight. Join our
              community of avid readers and let the tales begin.
            </p>
          </article>
          <div className={styles.buttonGroup}>
            <button onClick={() => navigate("/products")}>Order Today</button>
            <Link to="/read-demo">Read Free Demo</Link>
          </div>

          <div className={styles.info}>
            <div>
              <b></b>
              <p>
                Pages: <span>586 pages</span>
              </p>
            </div>
            <div>
              <b></b>
              <p>
                Length: <span>10 Hours</span>
              </p>
            </div>
            <div>
              <b></b>
              <p>
                Rating: <span>4.5/5 (305 ratings)</span>
              </p>
            </div>
          </div>
        </div>

        <img className={styles.book} src={book} alt="the dark light" />
      </div>
    </section>
  );
};
