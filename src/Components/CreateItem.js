import InputItem from "./InputItem";
const CreateItem = (props) => {
    const createNewItem = (enterNewItem) => {
        const addNewItem = {
            ...enterNewItem,
            id:`i${props.allItems.length + 1}`,
        };
        props.itemHandler(addNewItem);
      };
    return(
        <div>
            <InputItem addItem = {createNewItem} />
        </div>
    );
};
export default CreateItem;