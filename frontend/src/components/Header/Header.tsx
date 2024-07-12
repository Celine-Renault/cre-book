import styles from "./Header.module.scss";
import logo from "../../assets/logoInstaCRE.png";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoNameContaine}>
          <div className={styles.logo}>
            <img src={logo} alt="logo-celine-renault"></img>
          </div>
          <p>Céline Renault</p>
        </div>
        <Navbar></Navbar>
      </div>
    </>
  );
}
export default Header;
