import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import styles from "./QuoteForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
	const [isEntering, setIsEntering] = useState(false);
	const authorInputRef = useRef();
	const textInputRef = useRef();

	const submitFormHandler = (event) => {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	};

	const finishEnteringHandler = () => {
		setIsEntering(false);
	};

	const formFocusHandler = () => {
		setIsEntering(true);
	};

	return (
		<>
			<Prompt
				when={isEntering}
				message={(location) =>
					"Are you sure you want to leave? All your entered data will be lost!"
				}
			/>
			<Card>
				<form
					className={styles.form}
					onFocus={formFocusHandler}
					onSubmit={submitFormHandler}
				>
					{props.isLoading && (
						<div className={styles.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={styles.control}>
						<label htmlFor="author">Author</label>
						<input type="text" id="author" ref={authorInputRef} />
					</div>
					<div className={styles.control}>
						<label htmlFor="text">Text</label>
						<textarea id="text" rows="5" ref={textInputRef}></textarea>
					</div>
					<div className={styles.actions}>
						<button onClick={finishEnteringHandler} className="btn">
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default QuoteForm;
