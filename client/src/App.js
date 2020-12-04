import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { COLORS } from "./constants";

// contexts
import { LanguageContextProvider } from "./Context/LanguageContext";

function App() {
	return (
		<>
			<APPWrapper className="App">
				<LanguageContextProvider>
					<RouteWrapper>
						<Router>
							<NavBar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
							</Switch>
						</Router>
					</RouteWrapper>
					<Footer />
				</LanguageContextProvider>
			</APPWrapper>
			<GlobalStyle />
		</>
	);
}

const APPWrapper = styled.div`
	background: ${COLORS.lightPurple};
`;
const RouteWrapper = styled.div`
	min-height: 1000px;
`;
export default App;
