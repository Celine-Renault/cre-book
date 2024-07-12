import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <p className={styles.design}>Graphisme</p>
        <p className={styles.dev}>Développement Web</p>
        <p className={styles.workshop}>Ateliers</p>
        <p className={styles.workshop}>À propos</p>
        <p className={styles.contact}>Contact</p>
      </div>
    </>
  );
}
export default Navbar;
