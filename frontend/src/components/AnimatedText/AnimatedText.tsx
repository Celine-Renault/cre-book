import { useEffect, useState } from "react";
import styles from "./AnimatedText.module.scss";

const sentencesJobs = [
    { startSentence: "Je suis", job: "designer graphique", stylesJob: styles.designJob },
    { startSentence: "Je suis", job: "développeuse web", stylesJob: styles.devJob },
    {
        // startSentence: "Je conçois des",
        startSentence: "Je suis",
        // job: "ateliers participatifs, pédagogiques et ludiques",
        job: "médiatrice culturelle",
        stylesJob: styles.workshopJob
    },
];


function AnimatedText() {
  const [myJob, setMyJob] = useState(sentencesJobs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyJob((prevJob) => {
        const nextIndex = (sentencesJobs.indexOf(prevJob) + 1) % sentencesJobs.length;
        return sentencesJobs[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p className={styles.customJob}>
        {myJob.startSentence} <span className={myJob.stylesJob}>{myJob.job}</span>.
      </p>
    </>
  );
}

export default AnimatedText;
