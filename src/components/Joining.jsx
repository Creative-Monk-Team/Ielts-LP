import styles from "../styles/Joining.module.css";
import Transparency from "../assets/transparency.svg";
import Efficiency from "../assets/efficacy (1).svg";
import GainInsights from "../assets/community.svg";
import BuildConnections from "../assets/networking.svg";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import p3 from "../assets/p3.png"; 

let Joining = () => {
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFirstView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.joiningParent} id="courses">
      <img src={p3} className={styles.p3}/>
      <img src={p3} className={styles.p4}/>
      <div
        className={`${styles.innerJoining} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <h1 ref={aboutRef}>What Makes Joining Valuable</h1>
        <h3>Become aware of the inside-out details of the IELTS Exam</h3>
      </div>
      <div className={`${styles.features} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}>
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
      <Button text={"Book Your Slot Now"}/>
    </div>
  );
};

export default Joining;
