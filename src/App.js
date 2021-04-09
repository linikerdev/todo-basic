import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { saveTodo } from './store/todo/todo.action'


function App() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos)
  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }
  const salvar = () => dispatch(saveTodo(form))


  return (
    <div className="App">
      <header className="App-header">
       TODO LIST 
       

       <div><input onChange={handleChange} name="todo" value={form.todo || ""} type="text"/><button onClick={salvar}>Salvar</button></div>
       <ul>
         {todos?.map((todo,i) => (
           <li key={i}>{todo}</li>
         ))}
       </ul>
      </header>
    </div>
  );
}

export default App;
