import react, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () =>{

    const [inputlist, setInputList] = useState(" ");
    const[Items, setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value)
    }
 
    const listOfItems = () =>{
        setItems((oldItems) => {
            return[...oldItems, inputlist];
        });

        setInputList("");
    };
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='add a Items'onChange={itemEvent} />
                <button onClick={listOfItems}> + </button>
                <ol>
                    {/* <li>{inputlist}</li> */}
                  {Items.map((itemval) => {
                        return <ToDoList text={itemval} />;
                        
                 })}
                </ol>

            </div>

        </div>
        </>
    )
}


export default App;