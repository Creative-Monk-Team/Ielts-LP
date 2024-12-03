import styles from "../styles/Joining.module.css";
import Transparency from "../assets/transparency.svg";
import Efficiency from "../assets/efficacy (1).svg";
import GainInsights from "../assets/community.svg";
import BuildConnections from "../assets/networking.svg";

let Joining = () => {
  return (
    <div className={styles.joiningParent} id="courses">
      <div className={styles.innerJoining}>
        <h1>What Makes Joining Valuable</h1>
        <h3>Become aware of the inside-out details of the IELTS Exam</h3>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src={BuildConnections} alt="BuildConnections" />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa
            optio hic dolores magnam consequuntur beatae vel expedita recusandae
            commodi?Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src={BuildConnections} alt="BuildConnections" />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa
            optio hic dolores magnam consequuntur beatae vel expedita recusandae
            commodi?Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src={BuildConnections} alt="BuildConnections" />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa
            optio hic dolores magnam consequuntur beatae vel expedita recusandae
            commodi?Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src={BuildConnections} alt="BuildConnections" />
          </div>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa
            optio hic dolores magnam consequuntur beatae vel expedita recusandae
            commodi?Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joining;
