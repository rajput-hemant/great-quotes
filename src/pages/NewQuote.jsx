import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../lib/api";
import useHttp from "../hooks/use-http";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
	const history = useHistory();
	const { sendRequest, status } = useHttp(api.addQuote);

	useEffect(() => {
		if (status === "completed") {
			history.push("/quotes");
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
	};

	return (
		<QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
	);
};

export default NewQuote;
