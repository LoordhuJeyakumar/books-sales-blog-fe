import { useState } from "react";
import styles from "./HomeSecondRow.module.css";
import image from "../../../images/firstBook.png";
import { useNavigate } from "react-router-dom";
import AtomicsOnebookcover from "../../../images/AtomicsOnebookcover.jpeg";
//import TheLightDarkbookcover from "../../../images/TheLightDarkbookcover.jpeg";
import EchoesOfEternitybookcover from "../../../images/EchoesofEternitybokcover.jpeg";
import WhispersInTheWindbookcover from "../../../images/WhispersintheWindbookcover.jpeg";
import CelestialChroniclesbookcover from "../../../images/CelestialChroniclesbookcover.png";
import MidnightReflectionsbookcover from "../../../images/MidnightReflectionsbookcover.png";
import SavannahsSecretbookcover from "../../../images/SavannahsSecretbookcover.png";
import GalacticGatewaybookcover from "../../../images/GalacticGatewaybookcover.png";

const HomeSecondRow = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      title: "Atomic's One",
      description:
        "Explore the intricate dance of atoms and their profound impact on our daily lives. This book delves into the unseen yet fascinating world of atomic interactions, altering your perception forever.",
      pages: "499",
      image: AtomicsOnebookcover,
    },
    {
      title: "The Light Dark",
      description:
        "Navigate the mysterious realms where light and dark converge. An enthralling journey through shadows and illumination, this book will keep you on the edge of your seat from start to finish.",
      pages: "395",
      image: image,
    },
    {
      title: "Echoes of Eternity",
      description:
        "Journey through time and space with this epic tale of love, loss, and redemption. From ancient civilizations to futuristic societies, this book weaves together narratives that span millennia.",
      pages: "540",
      image: EchoesOfEternitybookcover,
    },
    {
      title: "Whispers in the Wind",
      description:
        "Set in a world where nature speaks, follow the protagonist as they uncover secrets hidden in the whispers of the wind. This book combines adventure, mystery, and a touch of magic.",
      pages: "420",
      image: WhispersInTheWindbookcover,
    },
    {
      title: "Celestial Chronicles",
      description:
        "Embark on an interstellar adventure with the Celestial Chronicles. This sci-fi saga takes readers on a thrilling journey across galaxies, exploring the unknown and challenging the boundaries of human imagination.",
      pages: "610",
      image: CelestialChroniclesbookcover,
    },
    {
      title: "Midnight Reflections",
      description:
        "Dive into the depths of human psyche with Midnight Reflections. This psychological thriller will keep you guessing at every turn, exploring the fine line between reality and illusion.",
      pages: "380",
      image: MidnightReflectionsbookcover,
    },
    {
      title: "Savannah's Secret",
      description:
        "Unravel the mysteries of Savannah's Secret, where hidden pasts and untold stories intertwine. This gripping novel will keep you hooked from the first page to the last.",
      pages: "450",
      image: SavannahsSecretbookcover,
    },
    {
      title: "Galactic Gateway",
      description:
        "Step through the Galactic Gateway and explore the wonders of distant galaxies. This book offers a perfect blend of science fiction and adventure, transporting readers to uncharted territories.",
      pages: "560",
      image: GalacticGatewaybookcover,
    },
  ]);

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <h3
          className={styles.title}
        >{`Best Sellers in ${new Date().getFullYear()}`}</h3>
        <div className={styles.booksWrapper}>
          {data.map((book, index) => {
            return (
              <div className={styles.bookContainer} key={index}>
                <img
                  src={book.image}
                  alt="placeholder"
                  className={styles.book}
                />

                <div className={styles.bookInfo}>
                  <h5 className={styles.bookTitle}>{book.title}</h5>
                  <p className={styles.bookDesc}>{book.desciption}</p>
                  <div className={styles.bookPages}>
                    <b></b>
                    <p>
                      Pages: <br /> <span>{book.pages}</span>
                    </p>
                  </div>
                  <button
                    className={styles.orderButton}
                    onClick={() => navigate("/products")}
                  >
                    Order Today
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSecondRow;
