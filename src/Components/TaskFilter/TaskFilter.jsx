import FilterItem from "../FilterItem/FilterItem.jsx";
import "./TaskFilter.css";
import { useTaskContext } from "../../Context/TaskContext";

const TaskFilter = () => {
  const filterTitles = [
    "All Tasks",
    "To Do",
    "Pending",
    "In Progress",
    "Completed",
  ];

  const { taskList, selectedStatus, setSelectedStatus } = useTaskContext();

  const getCountFilter = (status) => {
    if (status === "All Tasks") {
      return taskList.length;
    }
    let filterList = taskList.filter((task) => task.status === status);

    return filterList.length;
  };

  console.log(selectedStatus);

  return (
    <div className="task-filter">
      {filterTitles.map((title) => (
        <FilterItem
          status={title}
          count={getCountFilter(title)}
          selectStatus={() => setSelectedStatus(title)}
          active={selectedStatus === title}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
