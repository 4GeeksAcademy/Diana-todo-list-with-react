import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Input = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task) {
        setTaskList((prevTaskList) => [...prevTaskList, { task: task, showIcon: false }
        ]);
        setTask("");
      } else {
        alert("The fill is empty!");
      }
    }
  };

  const handleErase = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const handleMouseEnter = (index) => {
    setTaskList((prevTaskList) => {
      if (!prevTaskList[index].showIcon) {
        return prevTaskList.map((item, i) =>
          i === index ? { ...item, showIcon: true } : item
        );
      };
      return prevTaskList;
    });
  };

  const handleMouseLeave = (index) => {
    setTaskList((prevTaskList) => {
      if (prevTaskList[index].showIcon) {
        return prevTaskList.map((item, i) =>
          i === index ? { ...item, showIcon: false } : item
        );
      }
      return prevTaskList;
    });
  };


  return (
    <>
      <input id="inputField"
        type="text"
        value={task}
        placeholder="Add your task"
        onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyDown} />

      <ul
        className="list__container" >
          <hr className="custom-hr" />
        {taskList.map((item, index) => (

            <li
            className="task"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}>

            {item.task}{" "}
            {item.showIcon && (
              <i className="icono"><FontAwesomeIcon
                icon={faTimes}
                onClick={() => handleErase(index)}
              /></i>
            )}
          </li>

        ))}
      </ul>
      <p className="items__counter">{taskList.length} task left</p>
    </>
  );
};

export default Input;
