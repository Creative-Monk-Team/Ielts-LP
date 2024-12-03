import styles from "../styles/FeatureProperty.module.css";
import { useState, useEffect, useRef } from "react";
import BannerImage3 from "../assets/banner03_Recent.jpg";
import Button from "./Button";
import p2 from "../assets/p2.png";

let FeatureProperty = () => {
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
    <div className={styles.FeatureProperty} id="speaker">
      <img src={p2} className={styles.p2}/>
      <div className={styles.innerFeatureProperty}>
        <div
          className={`${styles.FeaturePropertyContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}
        >
          <div className={styles.yellowLineFlex}>
            <h5>Event's Keynote Speaker </h5>
            <div></div>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            mollitia!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ad officiis consequuntur distinctio unde itaque eligendi suscipit
            laboriosam quod nostrum quas et ea laudantium reiciendis
            exercitationem omnis cupiditate pariatur laborum, saepe sapiente!
            Inventore et rem voluptatem similique beatae dolores aliquam
            maiores, distinctio nesciunt blanditiis mollitia praesentium odit,
            natus exercitationem nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consectetur magni quisquam dolorem perspiciatis non fugit. Tenetur,
            dolorum natus eaque nam inventore facere pariatur accusamus
            aspernatur nesciunt quibusdam exercitationem eligendi?
          </p>
          <Button text={"Book Your Slot Now"}/>
        </div>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img alt="First Image" className={styles.bigImage} src={BannerImage3} />
           
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
