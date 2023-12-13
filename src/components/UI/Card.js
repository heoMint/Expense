import './Card.css';
// ExpenseItem이나 Expenses 콘텐츠를 둘러싸는 껍질 역할
// ExpenseItem의 div를 Card 컴포넌트로 대체
const Card = (props) => {
	const classes = 'card ' + props.className; // 외부로부터 className으로 받는 모든 게 이 문자열에 추가 됨

	// ExpenseItem retrun 안의 Card 컴포넌트 사이의 콘텐츠 들을 props.children에 제공
	return <div className={classes}>{props.children}</div>;
};

export default Card;
