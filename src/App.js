// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faEnvelope, faPen
// } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import Datauser from './data.json'
import './App.css'
import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
function App() {

  const [datas, setData] = useState(Datauser)

  //TempState
  const [newTask, setNewTask] = useState('')
  const [updateTask, setUpdateTask] = useState('')


  //Add Task
  const addTask = () => {

  }

  //Delete Task
  const deleteTask = (id) => {

  }

  //Mark Done
  const markDone = (id) => {

  }

  //Change task for update
  const changeTask = (id) => {

  }

  return (
    <div className="container App">
      {/* Add task */}
      <div className='row'>
        <div className='col'>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='form-control form-control-lg mt-5' />
        </div>
        <div className='col auto'>
          <button className='btn btn-lg btn-success'>
            add task
          </button>
        </div>
      </div>

      <h4>To Do List App (ReactJs)</h4>
      {datas && datas.length ? '' : 'No Tasks ....'}
      {datas && datas.map((item, index) => {
        return (
          <React.Fragment key={item.id} >
            <div className='col taskBg'>
              <div className={item.complete ? 'done' : ''}>
                <span className='taskNumber'>{index + 1} . </span>
                <span className='taskText'> {item.task} </span>
              </div>
              <div className='iconsWrap'>
                <span title='Completed / Not Completed'>
                  <BsCheckSquare />
                </span>
                <span title='Edit'>
                  <FaEdit />
                </span>
                <span title='Delete'>
                  <BsTrashFill />
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default App;
