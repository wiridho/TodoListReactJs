import { FiEdit3 } from "react-icons/fi";

const UpdateForm = ({ updateTask, changeTask, editTask, cancelEdit }) => {
    return (
        <>
            {/* Update task */}


            <div className='addContainer'>
                <div className='addWrapper'>
                    <h5>Todo Update</h5>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FiEdit3 /></span>
                        <input
                            value={updateTask && updateTask.task}
                            onChange={(e) => changeTask(e)}
                            className='form-control ' />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button className='btn btn-primary'
                            onClick={editTask}>
                            Update Task
                        </button>
                        <button
                            className='btn btn-danger'
                            onClick={cancelEdit}>
                            Cancel
                        </button>
                    </div>

                </div>

            </div >


        </>
    )
}

export default UpdateForm;