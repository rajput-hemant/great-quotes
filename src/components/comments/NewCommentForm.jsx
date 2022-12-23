import { useEffect, useRef } from "react";

import api from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
	const commentTextRef = useRef();
	const { onAddedComment } = props;
	const { sendRequest, status, error } = useHttp(api.addComment);

	useEffect(() => {
		if (status === "completed" && !error) {
			onAddedComment();
		}
	}, [status, error, onAddedComment]);

	const submitFormHandler = (event) => {
		event.preventDefault();
		const enteredText = commentTextRef.current.value;
		sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
	};

	return (
		<form className={styles.form} onSubmit={submitFormHandler}>
			{status === "pending" && (
				<div className="centered">
					<LoadingSpinner />
				</div>
			)}
			<div className={styles.control} onSubmit={submitFormHandler}>
				<label htmlFor="comment">Your Comment</label>
				<textarea id="comment" rows="5" ref={commentTextRef}></textarea>
			</div>
			<div className={styles.actions}>
				<button className="btn">Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
