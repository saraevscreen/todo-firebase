import './App.css';
import Title from './Title';
import AddTodo from './AddTodo';
import Todo from './Todo';
import { db } from './firebase'
import React from 'react';
import {
  collection,
  onSnapshot,
  query,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

function App() {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsub()
  }, [])


  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, 'todos', todo.id), { title: title })
  }

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className='todo_container'>
        {todos.map((todo) => (
          <Todo 
            key={ todo.id }
            todo={ todo }
            toggleComplete = { toggleComplete }
            handleEdit = { handleEdit }
            handleDelete = { handleDelete }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
