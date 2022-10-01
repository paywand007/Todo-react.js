import React,{ useState ,useRef,useEffect }  from 'react';   
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

//const LOCAL_STORAGE_KEY = ' todos'
function App() {
  const [todo, setTodos] = useState([])
  const todoNameref = useRef();



  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todo"))
    if (storedTodos) setTodos(storedTodos)
  }, [])
 
  useEffect(() => {
    if (todo.length !== 0){ localStorage.setItem("Todo", JSON.stringify(todo)) }
  }, [todo])
  
  function toggleTodo(id) {
    //IAM COPED THE STATE BCZ IN REACT WE SHOULD NEVER MODIFY STATE 
    const newTodos = [...todo];
    const todoos = newTodos.find(todo => todo.id === id)
    todoos.complete = !todoos.complete
    setTodos(newTodos)
  }
 
  
  
   function handleAddTodo(e) {
    const name = todoNameref.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id:uuidv4(), name: name, complete: false}]
    })
    todoNameref.current.value = null
   }
  function handleClearTods() {
    const newTodo = todo.filter(todo => !todo.complete)
    setTodos(newTodo)
  }
  return (
    <div className="App">
      <div><h2>My  Todo App</h2></div>
     
      <input ref={todoNameref}  type="text"   />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      <button type="button" onClick={handleClearTods} >Clear</button>
       <TodoList todo={todo} toggleTodo={toggleTodo} />
      <div>
      <p> Slected todos {todo.filter(todo=>!todo.complete).length} </p>
      </div>
    </div>
  );
}

export default App;
