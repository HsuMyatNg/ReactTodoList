import { useState } from "react";
import DisplayItem from "./Components/DisplayItems";

   const items =() =>[
    {
        id: "i1",
        title: "Buy Milk",
        // date : new Date('2021/3/9'),
    },
    {
        id: "i2",
        title: "Nik",
        // date : new Date('2021/3/10'),
    },
    {
        id: "i3",
        title: "MongoDB Working",
        // date : new Date('2021/3/11')
    },
    {
        id: "i4",
        title: "Listening Language",
        // date : new Date('2021/3/12'),
    },
  ]

const App = () => {
  const [allItems,setAllItems] = useState(items);
  const itemHandler = (items) => {
    if(!items.title || /^\$*$/.test(items.title)){
      return;
    }
    const newItem = [items, ...allItems];
    setAllItems(newItem);
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
// const completeTodoHandler = id => {
//  const updatedTodo = allItems.map(items =>{
//    if(items.id === id) {
//      items.isCompleted = !items.isCompleted;
//    }
//    return items;
//  });
//  setAllItems(updatedTodo);
// };
  return (
    <div>
      <h1>Organize Your Work </h1>
      <div>
        <DisplayItem 
        items= {allItems} 
        itemHandler = {itemHandler}
        onComplete = {removeTodoHandler}
        onRemove ={removeTodoHandler}
        onUpdate = {updateTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;

