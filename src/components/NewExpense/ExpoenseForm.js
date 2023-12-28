import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.target.value };
		// });
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.target.value };
		// });
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
		// setUserInput(()=>{

		// })
	};

	// 공용함수로 만들경우
	// onChange={(event) => inputChangeHandler('title', event.target.value)}
	const inputChangeHandler = (identifier, value) => {
		if (identifier === 'title') {
			setEnteredTitle(value);
		} else if (identifier === 'date') {
			setEnteredDate(value);
		} else {
			setEnteredAmount(value);
		}
	};
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseDate(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;

//	<input type='date' min='2019-01-01' max='2022-12-31' />
// 시작과 종료 날짜는 정하는 이유는 2019~2022년도 까지의 연도만 제공하는 필터를 추가할 계획이기 때문
// form 안에 submit button이 있어야 폼이 제출된다.
/**  
 * ⭐️ 이전 상태에 의존해 상태를 업데이트 할 경우 아래 함수 양식을 사용하세요.
 * 
 * const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

 * setUserInput({
			...userInput,
			enteredTitle: event.target.value,
		});
*/
