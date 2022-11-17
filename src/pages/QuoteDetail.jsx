import { useParams } from "react-router-dom";

const QuoteDetail = () => {
	const params = useParams();
	return (
		<>
			<p>{params.quoteId}</p>
		</>
	);
};

export default QuoteDetail;
