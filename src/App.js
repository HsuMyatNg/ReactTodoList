import { useState } from "react";
import DisplayItem from "./Components/DisplayItems";
import CreateItem from "./Components/CreateItem";

const items = [
  {
      id: "i1",
      title: "Buy Milk",
      isCompleted:false,
      // date : new Date('2021/3/9'),
  },
  {
      id: "i2",
      title: "Nik",
      isCompleted:false,
      // date : new Date('2021/3/10'),
  },
  {
      id: "i3",
      title: "MongoDB Working",
      isCompleted:false,
      // date : new Date('2021/3/11')
  },
  {
      id: "i4",
      title: "Listening Language",
      isCompleted:false,
      // date : new Date('2021/3/12'),
  },
];
const App = () => {
  const [allItems,setAllItems] = useState(items);
  const itemHandler = (getNewItem) => {
    setAllItems((preventItems) => {
        return [getNewItem, ...preventItems];
    });
};
const updateTodoHandler = (newId, newTitle) => {
  if(!newTitle.title || /^\S*$/.test(newTitle.title)){
    return;
  }
  setAllItems(prev => prev.map(item => (item.id === newId ? newTitle : item)));
}
const removeTodoHandler = id =>{
  const removeArr = [...allItems].filter(items => items.id !== id);
  setAllItems(removeArr);
};
const completeTodoHandler = id => {
 const updatedTodo = allItems.map(items =>{
   if(items.id === id) {
     items.isCompleted = !items.isCompleted;
   }
   return items;
 });
 setAllItems(updatedTodo);
};

  return (
    <div>
      <h1>Organize Your Work </h1>
      <div>
        <CreateItem  
          allItems = {allItems}
          itemHandler = {itemHandler}/>
      </div>
      <div>
        <DisplayItem 
        items= {allItems} 
        onComplete = {completeTodoHandler}
        onRemove ={removeTodoHandler}
        onUpdate = {updateTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;

