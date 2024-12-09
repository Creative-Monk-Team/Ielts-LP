import styles from "../styles/Features.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";
import BannerImage4 from "../assets/banner04_Recent.jpg";

const Features = () => {
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
    <>
      <div className={styles.FeaturesParent} id="whyChooseUs">
        <div className={styles.FeaturesChild}>
          <div
            className={`${styles.FeaturesImage} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
            ref={aboutRef}
          >
            {/* <img className={styles.img2} src={featImg2} alt="" /> */}
            <img className={styles.img1} src={BannerImage4} alt="" />
          </div>
          <div
            className={`${styles.FeaturesContent} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Elevate Your Learning</h5>
            </div>
            <h1>Key Features & Benefits of Joining This Webinar</h1>
            <p className={styles.FeaturesContentPara}>
              Join our exclusive IELTS webinar to gain expert insights, proven
              strategies, and practical tips for all test sections. Boost your
              performance, access study materials, and interact with experienced
              trainers to prepare confidently for a high band score.
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>Lorem ipsum dolor amet.</p>
            </div>
            <span className={styles.encquireNowButton}>
              <Button text={"Learn More"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
