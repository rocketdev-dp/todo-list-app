
import './App.css';
import React  from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    console.log("Todo Deleted: ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    //to store todos to localstorage
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) =>{
    console.log("New Todo Added: ",title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    //to store todos to localstorage
    localStorage.setItem("todos",JSON.stringify(todos));


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])


  //static todos
//   const [todos, setTodos] = useState([
//     {
//       sno: 1,
//       title: "Monday",
//       desc: "Buy Vegetables"
//   },
//   {
//     sno: 2,
//     title: "Tuesday",
//     desc: "Buy Milk"
// },
// ]);
return ( 
  <> 
  <Router>
    <Header title="My Todos List" searchBar={true} /> 
    <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} /> 
          </>)
        }}>  
        </Route>
        <Route exact path="/about" component={About}>
        </Route> 
      </Switch> 
    <Footer />
  </Router>
  </>
);
}

export default App;

