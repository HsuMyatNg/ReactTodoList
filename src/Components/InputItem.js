import React, { useEffect, useRef, useState } from "react";
import classes from "./InputItem.module.css";
const InputItem = (props) => {
  
  const [titleValue,setTitleValue] = useState(props.update ? props.update.title :"");

  const inputRef = useRef(null);

  useEffect( () => {
    inputRef.current.focus();
  })
  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
};
  const submitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      title: titleValue,
    };
    props.addItem(newItem);
      setTitleValue("");
};
    return(
        <form className= {classes["new-todo"]} onSubmit={submitHandler}>
          {props.update ? (
            <>
               <input 
               className={classes["new-todo-input"]}
               type="text"  
               placeholder="Update Task title"
               value = {titleValue}
               onChange ={titleChangeHandler}         
               ref = {inputRef}
               />
             <div className={classes["button-container"]}>
               <button className={classes["add-button"]} type="submit"> Update Task</button>
             </div>
             </>
          )
          :(
            <>
            <input 
            className={classes["new-todo-input"]}
            type="text"  
            placeholder="Task title"
            value = {titleValue}
            onChange ={titleChangeHandler}         
            ref = {inputRef}
            />
          <div className={classes["button-container"]}>
            <button className={classes["add-button"]} type="submit"> Create Task</button>
          </div>
         </>
          ) 
     }
     
      </form>
    );
};
export default InputItem;