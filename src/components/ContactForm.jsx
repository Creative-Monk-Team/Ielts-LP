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
import WhyImage from "../assets/whychooseus.png";
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
            <h1>Real Estate Inquiry Form</h1>
            <p className={styles.ContactFormContentPara}>
              As the complexity of buildings increases
            </p>
            <form className={styles.ContactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="inquiryType">
                  <h3>Inquiry Type</h3>
                </label>
                <select id="inquiryType" name="inquiryType">
                  <option value="">--Please choose an option--</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                  <option value="sell">Sell</option>
                </select>
              </div>

              {/* How to Address and Your Name in Same Line */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="address">
                    <h3>How to Address</h3>
                  </label>
                  <select id="address" name="address">
                    <option value="">--Please choose an option--</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <h3>Your Name</h3>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email */}
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

              {/* Personnel Role */}
              <div className={styles.formGroup}>
                <label htmlFor="role">
                  <h3>Personnel Role</h3>
                </label>
                <select id="role" name="role">
                  <option value="">--Please choose an option--</option>
                  <option value="buyer">Buyer</option>
                  <option value="agent">Agent</option>
                  <option value="owner">Owner</option>
                </select>
              </div>

              {/* Max Price and Min Size in Same Line */}
              <div className={styles.rowFlex}>
                <div className={styles.formGroup}>
                  <label htmlFor="maxPrice">
                    <h3> Max Price</h3>
                  </label>
                  <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="e.g. 500"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="minSize">
                    <h3>Min Size (sq ft)</h3>
                  </label>
                  <input
                    type="number"
                    id="minSize"
                    name="minSize"
                    placeholder="e.g. 20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div
            className={`${styles.ContactFormImage} ${styles.animationSection} ${
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
