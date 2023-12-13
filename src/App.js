import Expenses from './components/Expenses/Expenses';
const App = () => {
	const expenses = [
		{ id: 'e1', title: '과자구매', amount: 5.12, date: new Date(2020, 7, 14) },
		{ id: 'e2', title: '외식비', amount: 94.12, date: new Date(2020, 10, 14) },
		{ id: 'e3', title: '휴지구매', amount: 22.62, date: new Date(2020, 11, 14) },
		{ id: 'e4', title: '새로운 TV', amount: 450, date: new Date(2020, 11, 19) },
	];
	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses item={expenses} />
		</div>
	);
};

export default App;
