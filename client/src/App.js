import { useEffect, useState } from "react";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import OurWork from "./pages/OurWork";

import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

//animation
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	const history = useHistory();
	const pageLocation = history.location;
	//ScrollTop
	useEffect(() => {
		window.scroll({
			top: 10,
			left: 0,
		});
	}, [pageLocation]);

	return (
		<div className="App">
			<GlobalStyle />

			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/work" exact>
						<OurWork />
					</Route>
					<Route path="/work/:id">
						<MovieDetail />
					</Route>
					<Route path="/contact">
						<ContactPage />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
