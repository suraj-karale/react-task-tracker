import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
