import { useState } from "react";
import styles from "./Button.module.scss";

type buttonProps = {
  text?: string;
};

const Button = ({ text }: buttonProps) => {
  const [showContent, setShowContent] = useState(true);
  return (
    <>
      <div className={styles.workshop}>
        <button
          onClick={() => setShowContent(!showContent)}
          className={styles.workshopButton}
          type="button"
        >
          {text}
        </button>
        {showContent && (
          <div className={styles.infoWorkshop}>
            <p className={styles.titleWorkshop}>Cherchez la petite bête... </p>
            <p>
              <span>&#x26F3;</span> Le Pavillon - La Filature
            </p>
            <p>10 Rue du Pérou, 69100 Villeurbanne </p>
            <p>
              <span>&#x2600;</span> Mercredi 12 juin 2024 de 16h à 18h
            </p>
            <p>
              <span>&#x2192;</span> dès 5 ans ...
            </p>
            <p className={styles.worshopRegistration}>
              Informations et inscription par{" "}
              <a
                href="mailto:renault.celine@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactWorkshop}
              >
                mail
              </a>
              , téléphone et/ou{" "}
              <a
                href="https://www.instagram.com/celine_renault_"
                target="_blank"
                rel="noreferrer"
                className={styles.contactWorkshop}
              >
                instagram
              </a>
              <span> &#x2661;</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Button;
