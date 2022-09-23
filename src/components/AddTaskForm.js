import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { MdOutlineInput } from "react-icons/md";


const AddTaskForm = ({ datas, setData }) => {
    const [newTask, setNewTask] = useState('')
    const navigate = useNavigate();

    const addTask = () => {
        if (newTask) {
            let num = datas.length + 1;
            let newEntry = {
                id: num,
                task: newTask,
                complete: false
            }
            setData([...datas, newEntry])
            navigate("/")
        }
    }

    return (
        <>
            <div className='addContainer'>
                {/* Add task */}
                <div className='addWrapper'>
                    <h5>Todo Input</h5>
                    <div className=''>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><MdOutlineInput /></span>
                            <input
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                className='form-control'
                                type="text" placeholder='Input todo' aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                    <div className='d-grid gap-2'>
                        <button
                            onClick={addTask}
                            type='submit'
                            className='btn btn-primary'>
                            Add new task
                        </button>
                    </div>
                </div>

            </div >

        </>
    )
}

export default AddTaskForm;