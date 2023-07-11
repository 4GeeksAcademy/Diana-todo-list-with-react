import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Input = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);


    //const validateInput = () => {
    //    
    //    else console.log("All perfect");
    //};
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          if (task) {
            setTaskList((prevTaskList) => [...prevTaskList, task]);
            setTask("");
          } if (event.key === "Enter" && task === "") alert("The fill is empty!");
        }
      };

    const handleErase = (index) => {
      const updatedTaskList = [...taskList];
      updatedTaskList.splice(index, 1);
      setTaskList(updatedTaskList);
    };

    const handleCheck = () => {

    }

    return (
        <>
        <input id="inputField" type="text" value={task} placeholder="Add your task" onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyDown}/>

        <ul id="inputList" className="justify-content-center" >
        {taskList.map((item, index) => (
          <li className= " justify-content-center m-4 p-1"  key={index}>
            
            {item} <FontAwesomeIcon className="float-end p-1 ml-2" icon={faTimes}
            style={{ "--fa-primary-color": "#000000", "--fa-secondary-color": "#000000" }} 
            onClick={handleErase} />
          </li>
        ))}
      </ul>

        </>
    );
};

export default Input;
