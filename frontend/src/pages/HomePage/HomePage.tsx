import styles from "./HomePage.module.scss";
import logo from "./../../assets/logo-siteWeb-cre.png";

function HomePage() {
	return (
		<div className={styles.mainSection}>
			<div className={styles.info}>
				<div className={styles.identity}>
					<h1>Céline Renault</h1>
					<a
						href="mailto:renault.celine@icloud.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.customContact}
					>
						renault.celine@icloud.com
					</a>
					<h2>+33 06 74 86 42 23</h2>
					<a
						href="https://www.instagram.com/celine_renault_"
						target="_blank"
						rel="noreferrer"
						className={styles.customContact}
					>
						Instagram
					</a>
					<h2 className={styles.job}>
						Graphisme • Développement Web • Ateliers
					</h2>
				</div>
				<div className={styles.logo}>
					<img src={logo} alt="logo-celine-renault"></img>
				</div>
			</div>

			<div className={styles.workshop}>
				<h3>Ateliers passés</h3>
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
			</div>
			<div className={styles.mendatoryIndication}>
				<p>Conception graphique et développement du site par Céline Renault.</p>
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
	);
}
export default HomePage;
