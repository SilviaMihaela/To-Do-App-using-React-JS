import { useEffect, useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  // const [taskName, setTaskName] = useState("");
  // const [taskDate, setTaskDate] = useState("");
  // const [taskDescription, setTaskDescription] = useState("");

  const [taskData, setTaskData] = useState({
    taskName: "",
    taskDate: "",
    taskDescription: "",
  });

  const [formError, setFormError] = useState({
    nameError: "",
    dateError: "",
    descriptionError: "",
    isValid: true,
  });

  //pe acestea trei le-a inlocuit cel de dedesubt

  // useEffect(() => {
  //   if (taskData.taskName.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       nameError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       nameError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskName]);

  // useEffect(() => {
  //   if (taskData.taskDate.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       dateError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       dateError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskDate]);

  // useEffect(() => {
  //   if (taskData.taskDescription.length === 0) {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       descriptionError: "This field is required!",
  //       isValid: false,
  //     }));
  //   } else {
  //     setFormError((prevState) => ({
  //       ...prevState,
  //       descriptionError: "",
  //       isValid: true,
  //     }));
  //   }
  // }, [taskData.taskDescription]);

  useEffect(() => {
    let nameErrorMessage = "";
    let dateErrorMessage = "";
    let descriptionErrorMessage = "";
    let isFormValid = true;
    if (taskData.taskName.length === 0) {
      nameErrorMessage = "This field is required!";
      isFormValid = false;
    }

    if (taskData.taskDate.length === 0) {
      dateErrorMessage = "This field is required!";
      isFormValid = false;
    } else if (
      new Date(taskData.taskDate).setHours(0, 0, 0, 0) <
      new Date().setHours(0, 0, 0, 0)
    ) {
      dateErrorMessage = "Due date must not be in the past!";
      isFormValid = false;
    }

    if (taskData.taskDescription.length === 0) {
      descriptionErrorMessage = "This field is required!";
      isFormValid = false;
    } else if (
      taskData.taskDescription.length < 4 ||
      taskData.taskDescription.length > 20
    ) {
      descriptionErrorMessage =
        "This field must contain between 4 and 20 characters!";
      isFormValid = false;
    }

    setFormError({
      nameError: nameErrorMessage,
      dateError: dateErrorMessage,
      descriptionError: descriptionErrorMessage,
      isValid: isFormValid,
    });
  }, [taskData.taskName, taskData.taskDate, taskData.taskDescription]);

  // useEffect(() =>{}, [] ) -- asa se scrie useEffect

  // const handleTaskName = (event) => {
  //   setTaskName(event.target.value);
  // };

  // const handleTaskDate = (event) => {
  //   setTaskDate(event.target.value);
  // };

  // const handleTaskDescription = (event) => {
  //   setTaskDescription(event.target.value);
  // };

  // const resetState = () => {
  //   setTaskName("");
  //   setTaskDate("");
  //   setTaskDescription("");
  // };   le-am comentat pentru ca facem alta varianta

  const handleTaskName = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskName: event.target.value }; // functie care se foloseste pentru a pastra si inputurile precedente din obiect, care sunt valorile celorlalte proprietati ale obiectului
    });
  };

  const handleTaskDate = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskDate: event.target.value };
    });
  };

  const handleTaskDescription = (event) => {
    setTaskData((prevState) => {
      return { ...prevState, taskDescription: event.target.value };
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("submit");

    //   props.addTask({
    //     name: taskName,
    //     dueDate: taskDate,
    //     description: taskDescription,
    //   });

    props.addTask(taskData);

    //   resetState();
    setTaskData({
      taskName: "",
      taskDate: "",
      taskDescription: "",
    });
  };

  return (
    <div className="create-task-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={taskData.taskName}
          onChange={handleTaskName}
          className={formError.nameError ? "input-error" : ""}
          // className= {formError.nameError && "input-error"} se poate folosi cand avem doar o varianta de clasa
        />
        <p className="error-message">{formError.nameError}</p>

        <label htmlFor="taskDate">Due date</label>
        <input
          type="date"
          id="taskDate"
          value={taskData.taskDate}
          onChange={handleTaskDate}
          // required
          className={formError.dateError ? "input-error" : ""}
        ></input>
        <p className="error-message">{formError.dateError}</p>

        <label htmlFor="taskDesc">Task description</label>
        <textarea
          id="taskDesc"
          value={taskData.taskDescription}
          onChange={handleTaskDescription}
          className={formError.descriptionError ? "input-error" : ""}
        ></textarea>
        <p className="error-message">{formError.descriptionError}</p>

        <Button
          textBtn="Create Task"
          type="submit"
          isValid={formError.isValid}
        />
      </form>
    </div>
  );
};

export default CreateTaskForm;
