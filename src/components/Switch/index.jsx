import "./switch.css";

const Switch = ({ switchVar, setSwitch }) => {
	return (
		<>
			<div>
				<button
					className={switchVar ? "activate" : "deactivate"}
					onClick={() => {
						!switchVar && setSwitch((switchVar = true));
					}}>
					ON
				</button>
				<button
					onClick={() => {
						switchVar && setSwitch((switchVar = false));
						return;
					}}
					className={!switchVar ? "activate" : "deactivate"}>
					OFF
				</button>
			</div>
		</>
	);
};

export default Switch;
