import React, { useEffect, useState } from "react";

let count = 0;

const UseEffect = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    let newTaskList = [...taskList, { id: Date.now(), task: task }];
    setTaskList(newTaskList);
    setTask("");
  };

  //   useEffect(() => {
  //     console.log("I will execute after every render !!!");
  //   }); // componentDidMount ,  componentDidUpdate ,componenetWillUnmount , state change hogi

  //   useEffect(() => {
  //     console.log("I will run after first render !!!");
  //   }, []); //componentDidMount

  useEffect(() => {
    console.log("I will run when the taskList updates !!!", count);
    count++;
    return function () {
      console.log("I am a cleanup function !!!!", count);
    };
  }, [taskList]); //componentDidMount

  return (
    <div className="tasks-container">
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {taskList.map((taskObj) => {
          return <div key={taskObj.id}>{taskObj.task}</div>;
        })}
      </div>
    </div>
  );
};

export default UseEffect;
