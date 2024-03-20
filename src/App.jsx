import { useState } from "react";

import Header from "./components/Header";
import Switch from "./components/Switch";
import Signal from "./components/Signal";
import Footer from "./components/Footer";
import Reset from "./components/Reset";

import logoRocket from "./assets/img/logoRocket.png";

import "./App.css";

function App() {
	const [switchTop, setSwitchTop] = useState(false);
	const [switchMiddle, setSwitchMiddle] = useState(false);
	const [switchBottom, setSwitchBottom] = useState(false);

	return (
		<>
			<Header logo={logoRocket} />
			<main>
				<Signal
					switchTop={switchTop}
					switchMiddle={switchMiddle}
					switchBottom={switchBottom}
				/>
				<div id="switchs">
					<Switch switchVar={switchTop} setSwitch={setSwitchTop} />
					<Switch switchVar={switchMiddle} setSwitch={setSwitchMiddle} />
					<Switch switchVar={switchBottom} setSwitch={setSwitchBottom} />
				</div>
				<Reset
					switchTop={switchTop}
					switchMiddle={switchMiddle}
					switchBottom={switchBottom}
					setSwitchTop={setSwitchTop}
					setSwitchMiddle={setSwitchMiddle}
					setSwitchBottom={setSwitchBottom}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
