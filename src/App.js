
import React, { useState } from "react";
const App=()=>{
  const [name,setName]=useState('');
  const[items,setItem]=useState([])
  function itemName(e){
    //console.log('hie')
    setName(e.target.value);
  }
  function addItem(e){
   // e.preventDefault();
   if (!name){
    alert(' Please Add an Item ');
    return;
   }
  setItem([...items,name]);
  //console.log(items)
  setName('');
  setTimeout(()=>{
    alert('Your Item added successfully')
  },500);
  
  }
  function deleteItem(index){
    // Decision Making
    let result=window.confirm('Are You want to delete this item ? ');
   // console.log(result)
   //console.log(index);
   if(result===true){
    setItem(items.filter((item,i)=>{
      return(
        i!==index
      )
     }));
   }
   else{
    return;
   }
   
    
  
  }
  
return(
  <div className="main_div">
      <div className="center_div">
        <h1 className="todo_heading">ToDo-List</h1>
        <hr className="hr_line" />
        <div className="input_container">
          <input
            className="input_field"
            onChange={itemName}
            type="text"
            placeholder="Add Your Item"
            value={name}
          />
          <button onClick={addItem} className="add_button">
            ➕
          </button>
        </div>
        <hr className="hr_line" />
        <ol className="todo_list">
          {items.map((item, index) => (
            <li key={index + 1} className="list_item">
              {item}
              <span>
                <button
                  onClick={() => {
                    deleteItem(index);
                  }}
                  type="button"
                  className="delete_button"
                >
                  ❎
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
)
}
export default App;