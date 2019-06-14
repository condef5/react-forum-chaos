/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Navbar({ user }) {
  function deleteSession() {
    localStorage.removeItem("user");
    window.location = "/";
  }

  const linkStyles = {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: "24px",
    transition: "color .15s ease",
    fontWeight: "300",
    letterSpacing: "1px",
    marginLeft: "1.8em",
    "&:hover": {
      color: "#fff"
    }
  };

  return (
    <nav
      css={{
        background: "#f60",
        padding: "15px 5px",
        marginBottom: "2em"
      }}
    >
      <div
        css={{
          color: "#fff",
          alignitems: "center",
          display: "flex",
          maxWidth: "900px",
          margin: "auto",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Link to="/" css={{ ...linkStyles, margin: 0 }}>
          <span>Chaos News</span>
        </Link>
        <ul
          css={{
            listStyle: "none",
            display: "flex",
            margin: 0
          }}
        >
          <li>
            <Link css={linkStyles} to="/">
              Home
            </Link>
          </li>

          {user.username ? (
            <li>
              <a href="#" css={linkStyles} onClick={deleteSession}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link css={linkStyles} to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
