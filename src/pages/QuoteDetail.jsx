import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
	const params = useParams();
	
	return (
		<>
			<p>{params.quoteId}</p>
			<Route path="/quotes/:quoteId/comments">
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;
