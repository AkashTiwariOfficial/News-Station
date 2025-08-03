import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, credits } = props;

  return (
    <div>
      <div className="card" style={{ border: "none" }}>
        <div className="cont">
          <div
            className="container-2"
            style={
              props.mode === "light"
                ? {
                    color: "#fffff",
                    backgroundColor: "#f11946",
                    boxShadow: "0 .5rem 2rem #f1194680",
                  }
                : {
                    color: "#fffff",
                    backgroundColor: "#0095a2",
                    boxShadow: "0 .5rem 2rem #00ffe280",
                  }
            }
          >
            <span className="badge rounded-pill">{credits}</span>
          </div>

          <img
            id="main-img"
            src={
              !imageUrl
                ? "https:images.unsplash.com/photo-1733036364266-df0318764431?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />

          <div
            className="card-body"
            style={
              props.mode === "dark"
                ? {
                    backgroundColor: "#121212",
                    color: "#b4b4b4",
                    border: "1px solid #0a0a0a",
                  }
                : {
                    backgroundColor: "#ffffff",
                    color: "#0a0a0a",
                    border: "1px solid #b4b4b4",
                  }
            }
          >
            <h5 className="card-title">{title}... </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text 1">
              <small>
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
              id="read-more"
              style={
                props.mode === "light"
                  ? {
                      color: "#fffff",
                      backgroundColor: "#f11946",
                      boxShadow: "0 .5rem 2rem #f1194680",
                      border: "#f11946",
                    }
                  : {
                      color: "#fffff",
                      backgroundColor: "#0095a2",
                      boxShadow: "0 .5rem 2rem #00ffe280",
                      border: "#0095a2",
                    }
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
