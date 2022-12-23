import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import api from "../lib/api";
import useHttp from "../hooks/use-http";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();
	const { quoteId } = params;
	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(api.getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (!loadedQuote) {
		return <p>No Quote Found</p>;
	}
	return (
		<>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
