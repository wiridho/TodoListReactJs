import React from 'react';
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ datas, deleteTask, deleteAll, deleteAllDone, handleEdit, setData, checkbox, handleFilter, wordSearch }) => {

	if (datas.length > 0) {
		datas = datas.filter(item => {
			return wordSearch === "" ? item : item.task.toLowerCase().includes(wordSearch.toLowerCase())
		})
	}

	return (
		<>
			<div className="todo_container mt-3">
				<h5>Todo List</h5>
				<div className="todo__botton d-flex justify-content-center mt-3 mb-5">
					<button className='btn btn-primary w-25 me-3' onClick={() => handleFilter('all')} type="button">
						All
					</button>
					<button className='btn btn-primary w-25 ' onClick={() => handleFilter('done')} type="button">
						Done
					</button>
					<button className='btn btn-primary w-25 ms-3' onClick={() => handleFilter('todo')} type="button">
						ToDo
					</button>
				</div>

				{datas && datas.length ? '' : 'No Tasks ....'}
				{datas && datas
					.sort((a, b) => a.id > b.id ? 1 : -1)
					.map((item, index) => {
						return (
							<React.Fragment key={item.id} >
								<div className='col taskBg'>
									<div className={item.complete ? 'done' : ''}>
										<span className='taskNumber'>{index + 1}.  </span>
										<span className='taskText '> {item.task} </span>
									</div>
									<div className='iconsWrap'>
										<input
											type='checkbox'
											value={item.complete}
											defaultChecked={item.complete}
											onClick={() => checkbox(item.id)} />
										<span
											className='edit'
											title='Edit'
											onClick={() => handleEdit(item.id)}
										>
											<FaEdit />
										</span>
										<span
											className='delete'
											title='Delete'
											onClick={() => deleteTask(item.id)}>
											<BsTrashFill />
										</span>
									</div>
								</div>
							</React.Fragment>
						)
					})}
				<div className='row justify-content-center'>
					<button className='col-5 me-1 p-2 my-2 btn btn-danger' onClick={deleteAllDone}>Delete Done Tasks</button>
					<button className='col-5 ms-1 p-2 my-2 btn btn-danger' onClick={deleteAll}>Delete All Tasks</button>
				</div>
			</div>
		</>
	)
}


export default TodoList;