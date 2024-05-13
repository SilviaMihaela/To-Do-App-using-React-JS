// import { createContext } from "react";
import "./App.css";
import ContainerBox from "./Components/ContainerBox/ContainerBox";
import { TaskProvider } from "./Context/TaskContext";

// export const TaskManagerContext = createContext();

function App() {
  return (
    // <TaskManagerContext.Provider value={[1, 2, 3]}>
    <TaskProvider>
      <div className="App">
        <ContainerBox />
      </div>
    </TaskProvider>
    // </TaskManagerContext.Provider>
  );
}

export default App;
