import React from "react";

const ToDoList = (probs) =>{
    return ( 
        <>
        <div className="todo_list">
        <li>{probs.text}</li>
        </div>
        </>
    )

};

export default ToDoList;