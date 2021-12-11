// import ItemDate from "./ItemDate";
import React,{ useState } from "react";
import InputItem from "./InputItem";
import classes from "./SingleItem.module.css";
const SingleItem = (props) => {
    const [update , setUpdate] = useState({
        id: null,
        title: '',
    })
    const submitUpdate = title => {
        props.onUpdate(update.id, title);
        setUpdate({
            id: null,
            title: '',           
        });
    }
    if(update.id){
        return<InputItem update={update} onSubmit = {submitUpdate} />
    }
    return(
       
            <div className={classes["todo-item"]}>             
                {props.isCompleted? (
                    <>
                    <h3 className={classes.completeTitle}>{props.title} </h3>
                    <div className={classes["button-container"]}>
                    {/* <ItemDate date = {props.date} /> */}
                 
                        <button 
                    className={classes["incomplete-button"]}
                    onClick={() => props.onComplete(props.id)}
                    
                    >InComplete</button>
                   
                    <button 
                    className={classes["remove-button"]} 
                    onClick={() => props.onRemove(props.id)}
                    >Delete</button>
                    <button 
                    className={classes["update-button"]}
                    onClick={() => setUpdate({id: props.id, title: props.title}) }
                    >Edit</button>   
                </div>
                </>
                ):(
                    <>
                    <h3>{props.title} </h3>
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
                </>
                )}
                
            </div>
    
    );
};
export default SingleItem;