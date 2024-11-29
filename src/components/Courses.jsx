import styles from '../styles/Courses.module.css';

const courses = [
  {
    title: "IELTS Writing Task 2: Essay Writing Strategies (Dec 2024)",
    date: "2024-12-16",
    time: "20:00 (IST)",
    language: "English",
    instructor: "Nimita Singh",
    price: "Free",
  },
  {
    title: "IELTS Reading: Techniques for Skimming and Scanning (Dec 2024)",
    date: "2024-12-23",
    time: "20:00 (IST)",
    language: "English",
    instructor: "Nimita Singh",
    price: "Free",
  },
  {
    title: "IELTS Listening Test Day Tips (Dec 2024)",
    date: "2024-12-30",
    time: "20:00 (IST)",
    language: "English",
    instructor: "Nimita Singh",
    price: "Free",
  },
];

const CoursesCard = () => {
  return (
    <>
  <div className={styles.containerParent}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Upcoming Courses</h2>
      <div className={styles.cardContainer}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.image}></div>
            <div className={styles.details}>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.info}>
                <span className={styles.label}>Date:</span> {course.date}
              </p>
              <p className={styles.info}>
                <span className={styles.label}>Time:</span> {course.time}
              </p>
              <p className={styles.info}>
                <span className={styles.label}>Language:</span> {course.language}
              </p>
              <p className={styles.info}>
                <span className={styles.label}>Instructor:</span> {course.instructor}
              </p>
              <p className={styles.info}>
                <span className={styles.label}>Price:</span> {course.price}
              </p>
              <button className={styles.button}>Enroll for Free</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default CoursesCard;
