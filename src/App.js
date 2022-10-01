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
    localStorage.setItem("Todo", JSON.stringify(todo))
  }, [todo])
   function handleAddTodo(e) {
    const name = todoNameref.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameref.current.value = null
  }
  return (
    <div className="App">
      <TodoList todo={todo} />
      <input ref={todoNameref}  type="text" />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
        <button type="button">Clear</button>
  
    </div>
  );
}

export default App;
