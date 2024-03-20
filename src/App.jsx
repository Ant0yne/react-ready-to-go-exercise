import { useState } from "react";

import Header from "./components/Header";
import Switch from "./components/Switch";
import Signal from "./components/Signal";
import Footer from "./components/Footer";

import logoRocket from "./assets/img/logoRocket.png";

import "./App.css";

function App() {
	const [switchTop, setSwitchTop] = useState(false);
	const [switchMiddle, setSwitchMiddle] = useState(false);
	const [switchBottom, setSwitchBottom] = useState(false);

	return (
		<>
			<Header />
			<main>
				<Switch switchVar={switchTop} setSwitch={setSwitchTop} />
				<Switch switchVar={switchMiddle} setSwitch={setSwitchMiddle} />
				<Switch switchVar={switchBottom} setSwitch={setSwitchBottom} />
				<Signal
					switchTop={switchTop}
					switchMiddle={switchMiddle}
					switchBottom={switchBottom}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
