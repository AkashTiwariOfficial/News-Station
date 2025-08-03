import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

export default function Contact(props) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    props.setProgress(20);

    const timer = setTimeout(() => {
      props.setProgress(100);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!load) setLoad(true);
    }, 700);
    return () => clearTimeout(timer);
  }, [load]);

  return (
    <>
      {!load ? (
        <Spinner mode={props.mode} />
      ) : (
        <div className="container my-5 py-5">
          <h1 className="text-center mb-4">&#128222; Contact Us</h1>

          <p className="text-center mb-4 px-3">
            We'd love to hear from you! Whether you have a suggestion, want to
            report a bug, or are interested in collaborating — your feedback
            helps us grow and improve.
            <br />
            News-Station is here to keep you updated, and your support helps us
            grow stronger.
          </p>

          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <div className="mb-4">
                <h5>Email us at:</h5>
                <a
                  href="mailto:akashtiwari00624@gmail.com"
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  akashtiwari00624@gmail.com
                </a>
              </div>

              <div className="mb-4">
                <p>
                  <strong>Contact Person:</strong> Akash Tiwari (CSE Student)
                </p>
                <p>
                  <strong>Based In:</strong> India
                </p>
                <p>
                  <strong>Response Hours:</strong> Friday – Sunday, 10:00 AM –
                  6:00 PM (IST)
                </p>
              </div>

              <div className="mb-4">
                <p>
                  <strong>Reach out to us for:</strong>
                </p>
                <ul className="list-unstyled">
                  <li>✔️ Feedback or feature suggestions</li>
                  <li>✔️ Reporting a bug or issue</li>
                  <li>✔️ Collaboration or interview inquiries</li>
                </ul>
              </div>

              <div className="mb-4">
                <p>
                  Have general questions? Check our{" "}
                  <Link id="about" to="/about">
                    About Page
                  </Link>{" "}
                  to learn more.
                </p>
                <p style={{ fontSize: "13px" }}>
                  We respect your privacy. Your contact details will never be
                  shared.
                </p>
              </div>

              <p className="text-muted" style={{ fontSize: "14px" }}>
                News-Station is a personal academic project built with React.
                Not affiliated with any media house.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
