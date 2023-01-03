import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css'
import TodoSearch from './components/partials/TodoSearch';
import TodoList from './components/partials/TodoList';




function App({ datalist, setDataList }) {

  console.log(datalist)
  //navigate
  const navigate = useNavigate()

  const [itemShow, setItemShow] = useState('all')
  const [search, setSearch] = useState('')

  //Delete Task
  const deleteTask = (id) => {
    let newTask = datalist.filter(task => task.id !== id)
    setDataList(newTask)
  }

  //Mark Done
  const markDone = (id) => {
    let newTask = datalist.map(task => {
      if (task.id === id) {
        return ({ ...task, complete: !task.status })
      }
      return task
    })
    setDataList(newTask)
    setItemShow('done')
  }


  //handle edit
  const handleEdit = (id) => {
    navigate(`/update/${id}`)
  }

  //handle delete done task
  const deleteAllDone = () => {
    const data = datalist.filter((item) => {
      return item.complete !== true;
    });
    setDataList(data);
  };

  //handle delete all
  const deleteAll = () => {
    setDataList("");
    datalist = [];
  };


  //handle button todo
  const handleTodo = () => {
    const todo = datalist.filter((item) => item.complete === false)
    setDataList(todo)
  }


  //handle done
  const handleDone = () => {
    const done = datalist.filter((item) => item.complete === true)
    setDataList(done)
  }

  // handle checked 
  const checkbox = (id) => {
    const filteredItems = datalist.map(item => {
      item.id === id && (item.complete = !item.complete)
      return item;
    })
    setDataList(filteredItems);
  }


  //handle filter
  const handleFilter = (isFilter) => {
    setItemShow(isFilter)
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
  }



  let items = []
  items = datalist;
  if (itemShow === 'all') {
    items = datalist
  } else if (itemShow === 'done') {
    items = datalist.filter(item => item.complete)
  } else if (itemShow === 'todo') {
    items = datalist.filter(item => !item.complete)
  }

  console.log(items)

  return (
    <div className="container App">
      <TodoSearch
        datas={items}
        keyword={search}
        onSearch={onSearch}
      />
      <TodoList
        wordSearch={search}
        datas={items}
        markDone={markDone}
        deleteTask={deleteTask}
        deleteAllDone={deleteAllDone}
        deleteAll={deleteAll}
        handleTodo={handleTodo}
        handleDone={handleDone}
        handleFilter={handleFilter}
        checkbox={checkbox}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
