import styles from "./HomeThirdRow.module.css";
import PagePulseLogo from "../../../images/PagePulseLogo.png";

export const HomeThirdRow = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftItem}>
          <img src={PagePulseLogo} alt="PagePulse Logo" />
        </div>
        <div className={styles.rightItem}>
          <h5 className={styles.title}>About PagePulse</h5>
          <div className={styles.desc}>
            Welcome to PagePulse, your ultimate destination for book lovers and
            literary enthusiasts. Our mission is to bring you the best in books,
            offering a curated collection that spans genres and interests.
            <br />
            At PagePulse, we believe that every book has a unique heartbeat, a
            story that resonates with the reader. Our platform is designed to
            foster a love for reading and provide a space where book enthusiasts
            can discover, share, and connect.
            <br />
            <br />
            <strong>What We Offer:</strong>
            <ul>
              <li>
                🌟 A vast selection of genres from fiction to non-fiction.
              </li>
              <li>📚 Curated book lists to help you find your next read.</li>
              <li>📝 In-depth reviews and ratings by fellow readers.</li>
              <li>
                📅 Regularly updated blog with author interviews, book
                recommendations, and more.
              </li>
              <li>🛒 Easy and secure online ordering process.</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
