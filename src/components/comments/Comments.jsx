import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../lib/api";
import useHttp from "../../hooks/use-http";
import styles from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
	const params = useParams();
	const { quoteId } = params;
	const {
		sendRequest,
		status,
		data: loadedComments,
		error,
	} = useHttp(api.getAllComments);
	const [isAddingComment, setIsAddingComment] = useState(false);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addedCommentHandler = useCallback(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	let comments;

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

	if (status === "completed" && (loadedComments || loadedComments.length > 0)) {
		comments = <CommentsList comments={loadedComments} />;
	}
	if (
		status === "completed" &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p>No Comments were added yet!</p>;
	}

	return (
		<section className={styles.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm
					quoteId={quoteId}
					onAddedComment={addedCommentHandler}
				/>
			)}
			<p>{comments}</p>
		</section>
	);
};

export default Comments;
