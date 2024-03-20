import "./header.css";

const Header = ({ logo }) => {
	return (
		<>
			<header>
				<img src={logo} alt="Un logo de fusée" />
				<h1>Ready To Go</h1>
			</header>
		</>
	);
};

export default Header;
