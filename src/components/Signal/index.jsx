import "./signal.css";

const Signal = ({ switchTop, switchMiddle, switchBottom }) => {
	return (
		<>
			<div
				className={`${
					switchTop && switchMiddle && switchBottom ? "go" : "no-way"
				} signal`}>
				<p>{switchTop && switchMiddle && switchBottom ? "Go!" : "No way!"}</p>
			</div>
		</>
	);
};

export default Signal;
