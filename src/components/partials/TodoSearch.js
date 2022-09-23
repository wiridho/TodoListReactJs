import { Link, link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import AddTaskForm from '../AddTaskForm';
import { useState } from 'react';

const TodoSearch = (datas, setData) => {

    const [filterTodo, setFilterTodo] = useState(datas)
    const [search, setSearch] = useState('')

    const filter = (status) => {
        if (status === 'all') {
            setFilterTodo(datas)
        } else if (status === "done") {
            const filtered = datas.map((item) => item.complete)
            setFilterTodo(filtered)
        } else if (status === "todo") {
            const filtered = datas.map((item) => !item.complete)
            setFilterTodo(filtered)
        }
    }
    return (
        <>
            <div className='row search_container'>
                <h3>Todo Search</h3>
                <div className='col-8 search_left'>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FiSearch /></span>
                        <input
                            value=''
                            onChange=''
                            className='form-control'
                            type="text" placeholder='Search Todo...' aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="d-grid gap-2">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
                <div className='col search_right'>
                    <Link to='/add' className="btn btn-primary">Add New Task</Link>
                </div>
            </div>
        </>
    )

}

export default TodoSearch;