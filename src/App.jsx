import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/quotes"></Redirect>
			</Route>
			<Route path="/quotes" exact>
				<AllQuotes />
			</Route>
			<Route path="/quotes/:quoteId">
				<QuoteDetail />
			</Route>
			<Route path="/quotes/new-quote">
				<NewQuote />
			</Route>
		</Switch>
	);
};

export default App;
