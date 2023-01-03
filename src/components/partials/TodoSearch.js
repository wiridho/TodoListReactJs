import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

const TodoSearch = ({ onSearch, keyword }) => {
	return (
		<>
			<div className='row search_container'>
				<h3>Todo Search</h3>
				<div className='col-8 search_left'>
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1"><FiSearch /></span>
						<input
							value={keyword}
							onChange={onSearch}
							className='form-control'
							type="text" placeholder='Search Todo...'
							aria-label="Username"
							aria-describedby="basic-addon1" />
					</div>
				</div>
				<div className='search_button'>
					<button className="btn btn-primary btn_search" type="button">Search</button>
					<Link to='add' className="btn btn-primary">Add New Task</Link>
				</div>
			</div>
		</>
	)

}

export default TodoSearch;