import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./Components/Reusable/ScrollToTop";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Adoption from "./Components/Adoption/Adoption";
import OurCalendar from "./Components/Calendar/OurCalendar";
import Contact from "./Components/Contact/Contact";
import Feed from "./Components/Feed/Feed";
import OurCats from "./Components/OurCats/OurCats";
import Volunteer from "./Components/Volunteer/Volunteer";
import LogIn from "./Components/LogIn/LogIn";
import Donation from "./Components/Donation/Donation";
import Education from "./Components/Education/Education";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import { COLORS, mediaQueries } from "./constants";

// contexts
import { LanguageContextProvider } from "./Context/LanguageContext";
import { CalendarContextProvider } from "./Context/CalendarContext";
import { PostContextProvider } from "./Context/PostContext";
import { MediaContextProvider } from "./Context/MediaContext";

function App() {
	return (
		<>
			<APPWrapper className="App">
				<LanguageContextProvider>
					<MediaContextProvider mediaQueries={mediaQueries}>
						<Router>
							<ScrollToTop />
							<NavBar />
							<RouteWrapper>
								<Switch>
									<Route exact path="/about" component={About} />
									<Route exact path="/donation" component={Donation} />
									<Route exact path="/adoption" component={Adoption} />
									<Route exact path="/ourcats" component={OurCats} />
									<Route exact path="/calendar">
										<CalendarContextProvider>
											<OurCalendar />
										</CalendarContextProvider>
									</Route>
									<Route exact path="/updates">
										<PostContextProvider>
											<Feed />
										</PostContextProvider>
									</Route>
									<Route exact path="/volunteer" component={Volunteer} />
									<Route exact path="/contact" component={Contact} />
									<Route exact path="/login" component={LogIn} />
									<Route exact path="/education" component={Education} />
									<Route exact path="/" component={Home} />
								</Switch>
							</RouteWrapper>
							<Footer />
						</Router>
					</MediaContextProvider>
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
	//border: 3px solid black;
	height: auto;
	width: 100vw;
	padding-bottom: 100px;
	min-height: 70vh;
`;
export default App;
