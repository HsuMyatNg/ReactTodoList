// import React, {useState} from "react";
import SingleItem from "./SingleItem";
import classes from "./DisplayItems.module.css";
import InputItem from "./InputItem";


const DisplayItem =(props) => {
    
    return(
        <div>
            <div>
        <InputItem onSubmit = {props.itemHandler}  />
        </div>
        <div className={classes["todo-wrapper"]}>
            {props.items.map((item) =>{                               
                return(
                    <SingleItem 
                        key = {item.id}
                        id = {item.id}
                        title = {item.title}
                        isCompleted = {item.isCompleted}
                        date = {item.date}
                        onComplete = {props.onComplete}
                        onRemove = {props.onRemove}
                        onUpdate = {props.onUpdate}
                       
                    />
                )
            })}
        </div>
        </div>
    );
};
export default DisplayItem;