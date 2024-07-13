import styles from "./ProjectCard.module.scss";

type projectCardProps = {
  text?: string;
};
const ProjectCard = ({ text }: projectCardProps) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div>
          <p>{text}</p>
        </div>
        <img src="" alt="" />
      </div>
    </>
  );
};

export default ProjectCard;
