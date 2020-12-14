import React from "react";
//import MetaTags from 'react-meta-tags';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";
import AppProvider from "./Context/AppContext";
import App from "./App";

const store = configureStore();
ReactDOM.render(
	//<React.StrictMode>
	<AppProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</AppProvider>,
	//</React.StrictMode>,
	document.getElementById("root")
);
