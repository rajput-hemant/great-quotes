import styles from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
	return (
		<figure className={styles.quote}>
			<p>{props.text}</p>
			<figcaption>{props.author}</figcaption>
		</figure>
	);
};

export default HighlightedQuote;
