import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { default as Alert } from "./components/Alert";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Button } from "./components/Button";
export { default as Icon } from "./components/Icon";
export { default as Input } from "./components/Input";
export { default as Menu } from "./components/Menu";
export { default as MenuItem } from "./components/Menu/menuItem";
export { default as Submenu } from "./components/Menu/submenu";
export { default as Transition } from "./components/Transition";
