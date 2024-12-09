import styles from "../styles/Joining.module.css";
import Transparency from "../assets/transparency.svg";
import Efficiency from "../assets/efficacy (1).svg";
import GainInsights from "../assets/community.svg";
import BuildConnections from "../assets/networking.svg";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import p3 from "../assets/p3.png";
import plus from "../assets/add.png";

let Joining = () => {
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);
  let [activeIndex, setActiveIndex] = useState(null); // To track which accordion item is active

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

  let data = [
    {
      question:
        "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid, eligendi? Quisquam, facilis.",
    },
    {
      question:
        "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod",
      answer:
        "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid, eligendi? Quisquam, facilis.",
    },
    {
      question:
        "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod",
      answer:
        "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid, eligendi? Quisquam, facilis.",
    },
    {
      question:
        "4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod",
      answer:
        "4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid, eligendi? Quisquam, facilis.",
    },
    {
      question:
        "5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod",
      answer:
        "5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid, eligendi? Quisquam, facilis.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle between showing and hiding the selected accordion item
  };

  return (
    <div className={styles.joiningParent} id="courses">
      <img src={p3} className={styles.p3} />
      <img src={p3} className={styles.p4} />
      <div
        className={`${styles.innerJoining} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <h1 ref={aboutRef}>FAQ's Heading here</h1>
        <p className={styles.faqDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, facilis
          eveniet? Laudantium nemo omnis ullam necessitatibus quod. Commodi
          architecto iusto laborum, nisi assumenda nostrum ea enim. Aliquid,
          eligendi? Quisquam, facilis.
        </p>
      </div>

      <div
        className={`${styles.features} ${styles.animationSection} ${
          isFirstView ? styles.showAnimationSection : ""
        }`}
      >
        <div className={styles.accordionContainer}>
          {data.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.question}</h4>
                <img
                  src={plus}
                  className={`${styles.plusIcon} ${
                    activeIndex == index ? styles.activePlusIcon : null
                  }`}
                />
              </div>
              <div
                className={`${styles.accordionContent} ${
                  activeIndex == index ? styles.showContent : null
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joining;
