import "./reset.css";

const Reset = ({
	switchTop,
	switchMiddle,
	switchBottom,
	setSwitchTop,
	setSwitchMiddle,
	setSwitchBottom,
}) => {
	return (
		<>
			<div id="reset">
				<button
					onClick={() => {
						switchTop && setSwitchTop((switchTop = false));
						switchMiddle && setSwitchMiddle((switchMiddle = false));
						switchBottom && setSwitchBottom((switchBottom = false));
					}}>
					RESET
				</button>
			</div>
		</>
	);
};

export default Reset;
