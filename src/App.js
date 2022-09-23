import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Datauser from './data.json'
import './App.css'
import TodoSearch from './components/partials/TodoSearch';
import TodoList from './components/partials/TodoList';



function App() {
  //navigate
  const navigate = useNavigate()

  const [datas, setData] = useState(Datauser)
  const [itemShow, setItemShow] = useState('all')

  //TempState

  const [updateTask, setUpdateTask] = useState('')


  //Add Task
  // const addTask = () => {
  //   if (newTask) {
  //     let num = datas.length + 1;
  //     let newEntry = {
  //       id: num,
  //       task: newTask,
  //       complete: false
  //     }
  //     setData([...datas, newEntry])
  //     navigate('/')
  //   }
  // }

  //Delete Task
  const deleteTask = (id) => {
    let newTask = datas.filter(task => task.id != id)
    setData(newTask)
  }

  //Mark Done
  const markDone = (id) => {
    let newTask = datas.map(task => {
      if (task.id === id) {
        return ({ ...task, complete: !task.status })
      }
      return task
    })
    setData(newTask)
    setItemShow('done')
  }

  //Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateTask.id,
      task: e.target.value,
      complete: updateTask.complete ? true : false
    }
    setUpdateTask(newEntry)
  }

  const cancelEdit = () => {
    setUpdateTask('')
  }

  //edit/update Task
  const editTask = () => {
    let filterRecords = [...datas].filter(task => task.id !== updateTask.id);
    let updateObject = [...filterRecords, updateTask]
    setData(updateObject)
    setUpdateTask('')
  }

  //handle delete done task
  const deleteAllDone = () => {
    const data = datas.filter((item) => {
      return item.complete !== true;
    });
    Datauser = datas;
    setData(data);
  };

  //handle delete all
  const deleteAll = () => {
    setData("");
    datas = [];
  };


  //handle button todo
  const handleTodo = () => {
    const todo = datas.filter((item) => item.complete === false)
    setData(todo)
  }


  //handle done
  const handleDone = () => {
    const done = datas.filter((item) => item.complete === true)
    Datauser = datas
    setData(done)
  }

  // let items = []
  // items = datas;
  // if (itemShow === 'all') {
  //   items = datas
  // } else if (itemShow === 'done') {
  //   items = datas.filter(item => item.complete)
  // } else {
  //   items = datas.filter(item => !item.complete)
  // }


  return (
    <div className="container App">
      <TodoSearch />
      <TodoList
        datas={datas}
        setData={setData}
        markDone={markDone}
        setUpdateTask={setUpdateTask}
        deleteTask={deleteTask}
        deleteAllDone={deleteAllDone}
        deleteAll={deleteAll}
        handleTodo={handleTodo}
        handleDone={handleDone}
      />

    </div>
  );
}

export default App;
