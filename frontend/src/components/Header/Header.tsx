import styles from "./Header.module.scss";
// import logo from "../../assets/logo-siteWeb-Hello-texte-vectorise-transparent.png";
import logo from "../../assets/logo-siteWeb-Hello-texte-vectorise-transparent.png";
import AnimatedText from "../AnimatedText/AnimatedText";
import Button from "../Button/Button";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoNameContaine}>
          <div>
            <p className={styles.name}>Céline Renault</p>
            <AnimatedText></AnimatedText>
            <p>Disponible sur Lyon-Villeurbanne, ses alentours et en full-remote.</p>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo-celine-renault"></img>
          </div>
        </div>
      <Button text="Ateliers passés"></Button>
      </div>

    </>
  );
}
export default Header;
