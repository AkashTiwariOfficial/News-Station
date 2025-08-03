import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import Footer from "./Footer";
import Spinner from "./Spinner";
import appleIcon from "./apple-icon.png";

const About = (props) => {
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
        <div className="container px-3 px-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <h1
                className="text-center"
                style={{ marginTop: "100px", marginBottom: "35px" }}
              >
                <img
                  src={appleIcon}
                  alt="appleIcon"
                  width="96"
                  height="96"
                  style={{ verticalAlign: "middle", marginRight: "20px" }}
                />
                About News-Station
              </h1>

              <h3 className="mb-3">
                Welcome to News-Station – Your Trusted Source for Real-Time News
              </h3>

              <p>
                News-Station is a modern, fast, and reliable news platform
                designed to keep you informed with the latest headlines from
                around the world. Whether you're interested in global updates or
                country-specific news, we've built this platform with simplicity
                and accessibility in mind.
              </p>

              <h2 className="mt-5 mb-3">
                &#127758; What Makes News-Station Unique?
              </h2>
              <ul className="ps-3">
                <li>
                  <p>
                    <strong>Top Stories, Real-Time:</strong> Powered by NewsAPI,
                    we bring you fresh and relevant news updated every moment.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Country-Wise Coverage:</strong> Switch between
                    countries like India, USA, UK, Australia, China, Russia, New
                    Zealand, and more with a simple click.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Light/Dark Mode:</strong> Personalize your reading
                    experience with our easy-to-toggle themes.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Infinite Scroll:</strong> Enjoy a smooth, app-like
                    experience as you browse more stories without clicking
                    "Next".
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Clean Interface:</strong> Built with React JS and
                    Bootstrap, News-Station offers a responsive and
                    user-friendly design.
                  </p>
                </li>
              </ul>

              <div className="mt-5">
                <h2>&#128104;&#8205;&#128187; Made by Akash Tiwari</h2>
                <p>
                  News-Station was developed by Akash Tiwari, a Computer Science
                  Engineering student with a passion for web development and
                  real-time applications. This project reflects practical skills
                  in React, API integration, UI design, and frontend performance
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
