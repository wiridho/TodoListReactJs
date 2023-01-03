import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = ({ datalist, setDataList }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const selectData = datalist.find(item => item.id === Number(id))
    const [task, setTask] = useState(selectData.task)

    const handleChange = (value) => {
        setTask(value)
    }

    const editTask = () => {
        const newData = datalist.map(item => {
            if (item.id === selectData.id) {
                return {
                    id: item.id,
                    task: task,
                    complete: item.complete
                }
            }
            return item;
        })
        setDataList(newData);
        navigate('/')
    }

    const backHome = () => {
        navigate('/')
    }

    return (
        <>
            {/* Update task */}
            <div className='addContainer'>
                <div className='addWrapper'>
                    <h5>Todo Update</h5>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FiEdit3 /></span>
                        <input
                            value={task}
                            onChange={(e) => handleChange(e.target.value)}
                            className='form-control ' />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button
                            className='btn btn-primary'
                            onClick={editTask} >
                            Update Task
                        </button>
                        <button
                            className='btn btn-danger'
                            onClick={backHome} >
                            Cancel
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default UpdateForm;