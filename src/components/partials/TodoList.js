import React from 'react';
import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";

const TodoList = ({ datas, deleteTask, setUpdateTask, deleteAll, deleteAllDone, handleTodo, handleDone, handleEdit, setData, checkbox }) => {
	return (

		<>
			<div className="todo_container mt-3">
				<h3>Todo List ReactJS</h3>
				<div className="todo__botton d-flex justify-content-center mt-3 mb-5">
					<button className='btn btn-primary w-25 me-3' onClick={() => setData(datas)} type="button">
						All
					</button>
					<button className='btn btn-primary w-25 ' onClick={handleDone} type="button">
						Done
					</button>
					<button className='btn btn-primary w-25 ms-3' onClick={handleTodo} type="button">
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

										{item.complete ? '' :
											<span
												className='edit'
												title='Edit'
												onClick={() => handleEdit(item.id)}
											>
												<FaEdit />
											</span>
										}
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