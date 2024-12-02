import styles from "../styles/Joining.module.css";
import Transparency from "../assets/transparency.svg";
import Efficiency from "../assets/efficacy (1).svg";
import GainInsights from "../assets/community.svg";
import BuildConnections from "../assets/networking.svg";

let Joining = () => {
  return (
    <div className={styles.joiningParent}>
    <div className={styles.innerJoining}>
      <h1>What Makes Joining Valuable</h1>
      <h3>Become aware of the inside-out details of the IELTS Exam</h3>
    </div>
    <div className={styles.features}>
      <div className={styles.feature}>
        <div className={styles.icon}><img src={Transparency} alt="Transparency" /></div>
        <h3>Transparency</h3>
        <p>
          We believe in providing honest and straightforward information
          throughout your immigration process. You won't have to worry about
          hidden fees or unexpected costs. 
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}><img src={Efficiency} alt="Efficiency" /></div>
        <h3>Efficiency</h3>
        <p>
          Our team of experts has streamlined the process, guiding you every
          step of the way. We'll help you fill out forms, gather
          documentation, and meet deadlines, making your journey hassle-free.
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}><img src={GainInsights} alt="GainInsights" /></div>
        <h3>Gain Insights</h3>
        <p>
          You can learn about different immigration requirements and
          eligibility requirements from our webinars. Also, you can clear
          your doubts on immigration.
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.icon}><img src={BuildConnections} alt="BuildConnections" /></div>
        <h3>Build Connections</h3>
        <p>
          You can interact and understand the doubts and wishes of candidates
          like you and build better connections. Building connection is an
          integral part of current times.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Joining;
