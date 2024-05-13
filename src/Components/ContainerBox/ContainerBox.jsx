import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useTaskContext } from "../../Context/TaskContext";

const ContainerBox = () => {
  const { taskList, setTaskList, selectedStatus } = useTaskContext();
  const onAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        ...newTask,
        status: "To do",
      },
    ]);
  };

  //scriere filtrare mod 1

  const displayTasksByStatus = () => {
    if (selectedStatus === "All Tasks") {
      return taskList;
    }
    let filterList = taskList.filter((task) => task.status === selectedStatus);
    return filterList;
  };

  const list = displayTasksByStatus();

  //scriere filtrare mod 2

  const displayTaskList = taskList.filter((task) => {
    if (selectedStatus === "All Tasks") {
      return true; //toate elementele din array au trecut de filtrare
    }
    return task.status === selectedStatus; // face verificarea si returneaza un array
  });

  return (
    //randare conditionata
    <div className="container-box">
      <ControlPanel onAddTask={onAddTask} />
      <div className="d-flex">
        {taskList.length > 0 ? (
          <div className="tasks">
            {displayTaskList.map((task, index) => (
              <TaskCard
                key={index}
                name={task.taskName}
                status={task.status}
                desc={task.taskDate}
                date={task.taskDescription}
              />
            ))}
          </div>
        ) : (
          <>
            <NoTasks />
          </>
        )}

        {/* <CreateTaskForm addTask={onAddTask} /> */}
      </div>
    </div>
  );
};

export default ContainerBox;
