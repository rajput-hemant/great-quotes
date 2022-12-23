import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((a, b) => {
		if (ascending) {
			return a.id > b.id ? 1 : -1;
		} else {
			return a.id < b.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	const history = useHistory();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const isSortAsc = queryParams.get("sort") === "asc";
	const sortedQuotes = sortQuotes(props.quotes, isSortAsc);

	const changeSortHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `sort=${isSortAsc ? "desc" : "asc"}`,
		});
	};

	return (
		<>
			<div className={styles.sorting}>
				<button onClick={changeSortHandler}>
					Sort {isSortAsc ? "Descending" : "Ascending"}
				</button>
			</div>
			<ul className={styles.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</>
	);
};

export default QuoteList;
