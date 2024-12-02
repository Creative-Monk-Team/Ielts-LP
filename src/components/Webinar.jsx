import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>Lorem, ipsum dolor.</h1>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsam nisi obcaecati temporibus atque et quae velit itaque illo cupiditate?</p>
          <Button text={"Enquire Now"}/>
        </div>
      </div>
    </>
  );
};

export default Webinar;
