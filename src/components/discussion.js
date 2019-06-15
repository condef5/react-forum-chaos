/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Discussion({ discussion }) {
  return (
    <li
      css={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        padding: "20px 15px",
        lineHeight: "20px",
        a: {
          textDecoration: "none"
        }
      }}
    >
      <Link to={`/discussion/${discussion.id.toString()}`}>
        {discussion.title}
      </Link>
      <div css={{ color: "#999", fontSize: ".85em" }}>
        <span>by {discussion.author} </span>
        <span>{new Date(discussion.date).toLocaleDateString()}</span>
        <span>| {1} comments</span>
      </div>
    </li>
  );
}

export default Discussion;
