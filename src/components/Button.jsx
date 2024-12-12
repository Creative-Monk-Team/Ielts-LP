import React, { useContext } from "react";
import styles from "../styles/Button.module.css";
import { AuthContext } from "../context/AuthContextProvider";

let Button = ({ text }) => {
  let [showForm, setShowForm, setShowLoading] = useContext(AuthContext);
  return (
    <button
      onClick={() => {
        window.location.href="https://pages.razorpay.com/pl_PGpnUOOdwJUDnD/view";
      }}
      className={styles.buttonComponent}
    >
      {text}
    </button>
  );
};

export default Button;
