// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";  
// import styles from "../styles/Testimonial.module.css";  

// const Testimonial = () => {
//   const [currentReview, setCurrentReview] = useState(0);  
//   const reviewData = [
//     {
//       image: "https://via.placeholder.com/150",
//       review: "This is an amazing product! I loved every feature and how easy it is to use.",
//       review_stars: 5,
//       person_name: "John Doe",
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       review: "Fantastic experience. The service was top-notch and exceeded my expectations.",
//       review_stars: 4,
//       person_name: "Jane Smith",
//     },
//     {
//       image: "https://via.placeholder.com/150",
//       review: "Great value for money! The quality is unbeatable.",
//       review_stars: 4,
//       person_name: "Samuel Brown",
//     },
    
//   ];

   
//   const handleNextReview = () => {
//     setCurrentReview((prev) => (prev + 1) % reviewData.length);
//   };

   
//   const handlePreviousReview = () => {
//     setCurrentReview((prev) => (prev - 1 + reviewData.length) % reviewData.length);
//   };

//   return (
//     <div className={styles.testimonialsSection}>
//       <div className={styles.testimonialsContentSection}>
//         <h2 className={styles.testHeading}>Testimonials</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut magnam reprehenderit velit illo commodi!</p>

//         <div className={styles.clientReviewsOverflowSection}>
//           <div className={styles.clientTestimonialsSection}>
//             <div className={styles.clientImageSection}>
//               <img
//                 src={reviewData[currentReview]?.image}
//                 alt={reviewData[currentReview]?.person_name}
//                 className={styles.clientImage}
//               />
//             </div>
//             <div className={styles.reviewDetails}>
//               <h4>{reviewData[currentReview]?.review}</h4>
//               <h3>{reviewData[currentReview]?.person_name}</h3>

              
//               <div className={styles.reviewsStarsSection}>
//                 {Array.from({ length: reviewData[currentReview]?.review_stars }, (_, i) => (
//                   <FaStar key={i} size={25} color="gold" />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation buttons */}
//         <div className={styles.reviewsPaginationSection}>
//           <button className={styles.prevButton} onClick={handlePreviousReview}>
//             <FaArrowLeft size={20} />
//           </button>
//           <p>{`${currentReview + 1} / ${reviewData.length}`}</p>
//           <button className={styles.nextButton} onClick={handleNextReview}>
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";  
import styles from "../styles/Testimonial.module.css";  

const Testimonial = () => {
  const [currentReview, setCurrentReview] = useState(0);  
  const reviewData = [
    {
      image: "https://via.placeholder.com/150",
      review: "This is an amazing product! I loved every feature and how easy it is to use.",
      review_stars: 5,
      person_name: "John Doe",
    },
    {
      image: "https://via.placeholder.com/150",
      review: "Fantastic experience. The service was top-notch and exceeded my expectations.",
      review_stars: 4,
      person_name: "Jane Smith",
    },
    {
      image: "https://via.placeholder.com/150",
      review: "Great value for money! The quality is unbeatable.",
      review_stars: 4,
      person_name: "Samuel Brown",
    },
  ];

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewData.length);
  };

  const handlePreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewData.length) % reviewData.length);
  };

  return (
    <div className={styles.testimonialsSection} id='testimonials'>
      <div className={styles.testimonialsContentSection}>
        <h2 className={styles.testHeading}>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut magnam reprehenderit velit illo commodi!</p>

        <div className={styles.clientReviewsOverflowSection}>
          <div className={styles.clientTestimonialsSection}>
            <div className={styles.clientImageSection}>
              <img
                src={reviewData[currentReview]?.image}
                alt={reviewData[currentReview]?.person_name}
                className={styles.clientImage}
              />
            </div>
            <div className={styles.reviewDetails}>
              <h4 >{reviewData[currentReview]?.review}</h4>
              <h3 className={styles.reviewPersonName}>{reviewData[currentReview]?.person_name}</h3>

              <div className={styles.reviewsStarsSection}>
                {Array.from({ length: reviewData[currentReview]?.review_stars }, (_, i) => (
                  <FaStar key={i} size={25} color="gold" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className={styles.reviewsPaginationSection}>
          <button className={styles.prevButton} onClick={handlePreviousReview}>
            <FaArrowLeft size={20} />
          </button>
          <p>{`${currentReview + 1} / ${reviewData.length}`}</p>
          <button className={styles.nextButton} onClick={handleNextReview}>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
