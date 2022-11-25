import styles from "./CourseList.module.css";

const CourseList = function (props) {
  const clickHandler = (event) => {
    props.onDelete(event.target.id);
  };

  return (
    <ul className={styles.list}>
      {props.list.map((item, index) => (
        <li
          id={index}
          key={index}
          className={styles["list-item"]}
          onClick={clickHandler}
        >
          {item.task}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
