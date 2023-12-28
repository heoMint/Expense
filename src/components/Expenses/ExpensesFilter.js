import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const yearChangeHandler = (event) => {
		// Expense에서 props로 내려받음
		props.onChangeFilter(event.target.value);
	};
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={yearChangeHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
