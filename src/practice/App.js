import { useState } from "react";
import InputForm from "./CourseInputForm/InputForm";
import CourseList from "./CourseList/CourseList";

const App = function () {
  const [tasks, setTasks] = useState([]);
  const submitHandler = (data) => {
    const current_value = { task: data };
    setTasks((prevState) => [current_value, ...prevState]);
  };

  const deleteHandler = (id) => {
    setTasks((prevState) =>
      prevState.filter((_, index) => String(index) !== id)
    );
  };
  return (
    <>
      <InputForm onSubmit={submitHandler}></InputForm>
      <CourseList list={tasks} onDelete={deleteHandler}></CourseList>
    </>
  );
};

export default App;
