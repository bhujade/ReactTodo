import { useState } from "react";
import './App.css';

function App() {

  let[todolist,setTodolist] = useState([]);

  let saveTodoList = (event)=>{

    let todoName = event.target.todoName.value;

    if(!todolist.includes(todoName)){
      let finalTodolist = [...todolist,todoName]

      setTodolist(finalTodolist)

    }else{
      alert("todo Name Already exist")
    }

    event.preventDefault();
  }

  let list = todolist.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} todolist = {todolist} 
      setTodolist={setTodolist} indexNumber={index}/>
    )
  })

  return (
    <div className="App">
     <h1>Todo List</h1>
     <form onSubmit={saveTodoList}>
      <input type="text" name="todoName"/><button>Save</button>
     </form>

     <div className="outerDiv">
      <ul>
       {list}
      </ul>
     </div>
    </div>
  );
}

export default App;

function TodoListItems({value,todolist,setTodolist,indexNumber}){

  let[status,setStatus] = useState(false);

  let deleteRow = ()=>{
    let finalData = todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }

  let clearData =()=>{
    setStatus(!status);
  }

  return(
    <li className={status ? "completetodo" : ""} onClick={clearData}> {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}