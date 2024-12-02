// import styles from "../styles/ContactForm.module.css";
// import WhyImage from "../assets/whychooseus.png";

// const ContactForm = () => {
//   return (
//     <>
//       <div className={styles.ContactFormParent}>
//         <div className={styles.ContactFormChild}>
//           <div className={styles.ContactFormContent}>
//             <div className={styles.yellowLineFlex}>
//               <h5>Contact Form</h5>
//               <div></div>
//             </div>
//             <h1>Lorem ipsum dolor sit amet.</h1>
//             <p className={styles.ContactFormContentPara}>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             </p>

//         </div>

//           <div className={styles.ContactFormImage}>
//             <img className={styles.img1} src={WhyImage} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ContactForm;

import styles from "../styles/ContactForm.module.css";
import WhyImage from "../assets/banner02_Recent.jpg";
import { useState, useEffect, useRef } from "react";

const ContactForm = () => {
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
      <div className={styles.ContactFormParent}>
        <div className={styles.ContactFormChild} ref={aboutRef}>
          <div
            className={`${styles.ContactFormContent} ${
              styles.animationSection
            } ${isFirstView ? styles.showAnimationSection : ""}`}
          >
            <div className={styles.yellowLineFlex}>
              <h5>Querry</h5>
              <div></div>
            </div>
            <h1>Contact Us</h1>
            <p className={styles.ContactFormContentPara}>
              Please let us know your query!
            </p>
            <form className={styles.ContactForm}>
              {/* Name and Email in the Same Row */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <h3>Your Name</h3>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    <h3>Email</h3>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              {/* Query Field Below Name and Email */}
              <div className={styles.formGroup}>
                <label htmlFor="query">
                  <h3>Your Query</h3>
                </label>
                <textarea
                  id="query"
                  name="query"
                  placeholder="Type your query here..."
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div
            className={`${styles.imageSec} ${styles.ContactFormImage} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <img className={styles.img1} src={WhyImage} alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;


