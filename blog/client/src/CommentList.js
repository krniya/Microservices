import React from "react";

const CommentList = ({ comments }) => {
    const renderedComment = comments.map((comment) => {
        console.log(comment);
        let content;
        if (comment.status === "approved") {
            content = comment.content;
        }
        if (comment.status === "pending") {
            content = "This comment is awaiting moderation";
        }
        if (comment.status === "rejected") {
            content = "This commnet has been rejected";
        }
        return <li key={comment.id}>{content}</li>;
    });

    return (
        <div>
            <ul>{renderedComment}</ul>
        </div>
    );
};

export default CommentList;
