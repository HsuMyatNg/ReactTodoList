// import ItemDate from "./ItemDate";
import { useState } from "react";
import InputItem from "./InputItem";
import classes from "./SingleItem.module.css";
const SingleItem = (props) => {
    const [update , setUpdate] = useState({
        id: null,
        title: ''
    })
    const submitUpdate = title => {
        props.onUpdate(update.id, title);
        setUpdate({
            id: null,
            title: ''
        });
    }
    if(update.id){
        return<InputItem update={update} onSubmit = {submitUpdate} />
    }
    return(
       
            <div className={classes["todo-item"]}>
                {/* <li style={{textDecoration: props.isCompleted ? "line-through" : ""}}> */}
                    <h3>{props.title} </h3>
                {/* </li> */}
                <div className={classes["button-container"]}>
                    {/* <ItemDate date = {props.date} /> */}
                    <button 
                    className={classes["complete-button"]}
                    onClick={() => props.onComplete(props.id)}
                    >Complete</button>
                   
                    <button 
                    className={classes["remove-button"]} 
                    onClick={() => props.onRemove(props.id)}
                    >Delete</button>
                    <button 
                    className={classes["update-button"]}
                    onClick={() => setUpdate({id: props.id, title: props.title}) }
                    >Edit</button>
                </div>
            </div>
    
    );
};
export default SingleItem;