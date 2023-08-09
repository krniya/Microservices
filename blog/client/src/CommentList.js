import React from "react";

const CommentList = ({ comments }) => {
    const renderedComment = comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return (
        <div>
            <ul>{renderedComment}</ul>
        </div>
    );
};

export default CommentList;
