import { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = function (props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onSubmit(enteredValue);
    setEnteredValue("");
  };
  const inputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label
        className={`${styles.label} ${!isValid && styles["invalid-label"]}`}
      >
        {" "}
        Course Goal
      </label>
      <input
        type={"text"}
        className={`${styles.input} ${!isValid && styles.invalid}`}
        onChange={inputChangeHandler}
        value={enteredValue}
      />

      <button className={styles.button}>Add Goal</button>
    </form>
  );
};

export default InputForm;
