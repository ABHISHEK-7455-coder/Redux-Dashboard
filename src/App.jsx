import { useState } from 'react'
import './App.css'
import Header from './Header'
import TodoList from './TodoList'
import Sidebar from './Sidebar'
import Calendar from './Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appContainer'>
      <Header />
      <div className='main'>
        <div><Sidebar /></div>
        <div>
          <h1>Dashboard</h1>
          <Calendar />
          <TodoList />
        </div>
      </div>
      
    </div>
  )
}

export default App
