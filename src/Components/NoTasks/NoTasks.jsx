import noTasks from "../../Assets/no-tasks.png";

function NoTasks() {
  return (
    <div className="no-tasks">
      {/* <img src="/images/no-tasks.png" alt="" /> */} imagine importata din
      folderul public
      <img src={noTasks} alt="noTasksImage" />
      <h3>No Tasks Yet</h3>
      <p>You have no task created in your workspace yet.</p>
      <p>Get productive. Create a Task Now.</p>
    </div>
  );
}
// rfce sau rfc ca sa ne inceapa automat componenta
export default NoTasks;
