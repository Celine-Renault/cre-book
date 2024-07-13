import styles from "./HomePage.module.scss";
// import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <>
      <div className={styles.mainSection}>
        <Header></Header>
        <Navbar></Navbar>
        {/* <Button text="Ateliers passés"></Button> */}

        <div className={styles.mendatoryIndication}>
          <p>
            Conception graphique et développement du site par Céline Renault.
          </p>
          <p>
            Typographies&nbsp;:&#160;
            <a
              href="https://typotheque.genderfluid.space/poppins.html"
              target="_blank"
              rel="noreferrer"
              className={styles.websiteFont}
            >
              BBB Poppins par Eugénie Bidaut & Camille Circlude{" "}
            </a>
            &#160;et&#160;
            <a
              href="http://www.lettres-simples.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.websiteFont}
            >
              LS-VG5000 version 1.0 par Justin Bihan.
            </a>
          </p>
          <p>
            Toute reproduction, intégrale ou partielle, des images ou de
            quelconque élément de ce site est formellement interdite sans
            permission de l'auteur.
          </p>
          <p> Dernière mise à jour&nbsp;: mai 2024.</p>
          <p>&#169; Céline Renault 2024</p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
