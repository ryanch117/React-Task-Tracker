import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import {useState} from 'react'
import AddTask from './Components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([/*tasks is the name of the variable, setTasks is a method used to update the variable tasks*/
    {
      id: 1,
      text: 'Hi, this is a default task. Click "Add" to add your first task :)',
      day: 'Saturday, July 30, 2022, 10:41 p.m.',
      reminder: true,
    }
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className = 'container'>
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? //one line if statement that determines how the tasks are displayed
        <Tasks 
          tasks = {tasks} 
          onDelete = {deleteTask} 
          onToggle = {toggleReminder}
        /> : 'No tasks here.'}
    </div>
  );
}

export default App;
