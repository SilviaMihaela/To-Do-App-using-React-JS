import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm.jsx";
import { useState } from "react";
import TaskFilter from "../TaskFilter/TaskFilter.jsx";
import "./ControlPanel.css";

function ControlPanel(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = (task) => {
    props.onAddTask(task);
    closeModal();
  };

  return (
    <>
      <div className="control-panel d-flex">
        <div className="left">
          <h1>Tasks</h1>
          <h4>Your tasks in your space.</h4>
          <TaskFilter />
        </div>
        <Button
          textBtn="Create Task"
          onClickFunction={openModal}
          // isValid="true" - ii punem manual true ca sa nu fie  disabled
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CreateTaskForm addTask={handleAddTask} />
      </Modal>
    </>
  );
}

export default ControlPanel;
