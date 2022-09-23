import React from 'react';
import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ datas, markDone, deleteTask, setUpdateTask, addTask }) => {
	return (
		<>
			<div className="todo_container">
				<h3>Todo List ReactJS</h3>
				{/* <div>
					<button className="btn" onClick={() => filter('all')}> All</button>
					<button className="btn" onClick={() => filter('done')}> Done</button>
					<button className="btn" onClick={() => filter('todo')}> Todo</button>
				</div> */}

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
										<span
											title='Completed / Not Completed'
											onClick={(e) => markDone(item.id)}>
											<BsCheckSquare />
										</span>

										{item.complete ? '' :
											<span className='edit'
												title='Edit'
												onClick={() => setUpdateTask({
													id: item.id,
													task: item.task,
													complete: item.complete ? true : false
												})}
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
			</div>
		</>
	)
}


export default TodoList;