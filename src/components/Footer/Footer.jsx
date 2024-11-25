import { useState } from "react";
import styles from "./Footer.module.css";
import photo from "../../images/Vector.png";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const [mess, setMess] = useState("");

  function keepInTouchHandler(e) {
    e.preventDefault();
    setMess("The message has been received");
    setTimeout(() => {
      setMess("");
    }, 2000);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerLogos}>
              <img src={photo} alt="logo" />
              <a href="/">PagePulse</a>
            </div>
            <p className={styles.footerDescription}>
              PagePulse is your ultimate destination for book lovers and
              literary enthusiasts. Stay connected with us to discover new
              books, read insightful articles, and join a community that shares
              your passion for reading.
            </p>
            <div className={styles.footerSocials}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p1} alt="facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img src={p2} alt="twiter" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p3} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p4} alt="instagram" />
              </a>
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <h4>Keep In Touch</h4>
            <div>
              <p>Loordhu Jeyakumar</p>
              <div className={styles.social}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/loordhujeyakumar"
                  rel="noreferrer"
                >
                  <AiFillLinkedin color="white" fontSize={40} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/LoordhuJeyakumar/"
                  rel="noreferrer"
                >
                  <BsGithub color="white" fontSize={34} />
                </a>
              </div>
            </div>
            <form onSubmit={keepInTouchHandler} className={styles.form}>
              {mess ? (
                <div className={styles.mess}>{mess}</div>
              ) : (
                <textarea placeholder="Keep in touch"></textarea>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 PagePulse. All Rights Reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
