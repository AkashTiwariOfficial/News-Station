import "./App.css";

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  const pageSize = 10;
  const key1 = process.env.REACT_APP_NEWS_API_1;
  const key2 = process.env.REACT_APP_NEWS_API_2;
  const key3 = process.env.REACT_APP_NEWS_API_3;
  const key4 = process.env.REACT_APP_NEWS_API_4;
  const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=`;

  const apikeys = [key1, key2, key3, key4];

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [country, setCountry] = useState("us");
  const [apikey, setApiKey] = useState(null);

  const newCountry = () => {
    setProgress(20);
    setCountry("us");
    setProgress(100);
  };
  const newCountry2 = () => {
    setProgress(20);
    setCountry("in");
    setProgress(100);
  };
  const newCountry3 = () => {
    setProgress(20);
    setCountry("za");
    setProgress(100);
  };
  const newCountry4 = () => {
    setProgress(20);
    setCountry("nz");
    setProgress(100);
  };
  const newCountry5 = () => {
    setProgress(20);
    setCountry("au");
    setProgress(100);
  };
  const newCountry6 = () => {
    setProgress(20);
    setCountry("ru");
    setProgress(100);
  };
  const newCountry7 = () => {
    setProgress(20);
    setCountry("gb");
    setProgress(100);
  };
  const newCountry8 = () => {
    setProgress(20);
    setCountry("cn");
    setProgress(100);
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#b4b4b4";
    } else {
      setMode("light");
      document.body.style.backgroundColor = " rgb(255, 255, 255)";
      document.body.style.color = "#0a0a0a";
    }
  };

  const apiFallBack = async (apikeys, baseUrl) => {
    for (let i = 0; i < apikeys.length; i++) {
      let url = `${baseUrl}${apikeys[i]}`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.code === "apiKeyExhausted" || response.status === 429) {
          console.warn(
            `API key ${apikeys[i]} is exhausted. Trying next key...`
          );
          continue;
        }

        if (!response.ok) {
          console.error(`Error: ${data.code} - ${data.message}`);
        }

        return apikeys[i];
      } catch (error) {
        console.error(`Fetch failed for key ${apikeys[i]}: ${error.message}`);
        continue;
      }
    }
    throw new Error("All API keys are exhausted or failed.");
  };

  useEffect(() => {
    const getKey = async () => {
      try {
        const key = await apiFallBack(apikeys, baseUrl);
        setApiKey(key);
      } catch (error) {
        console.error("No valid API key found:", error);
      }
    };

    getKey();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Router>
        <NavBar mode={mode} changeMode={changeMode} setProgress={setProgress} />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {apikey ? (
          <Routes>
            <Route
              path="/about"
              element={<About setProgress={setProgress} />}
            />
            <Route
              path="/contact"
              element={<Contact setProgress={setProgress} />}
            />
            <Route
              path="/"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  key={`general-${country}`}
                  pageSize={pageSize}
                  country={country}
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  key="business"
                  pageSize={pageSize}
                  country={country}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              key="entertainment"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="entertainment"
                  country={country}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="general"
                  country={country}
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="health"
                  country={country}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="science"
                  country={country}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="sports"
                  country={country}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  apikey={apikey}
                  mode={mode}
                  changeMode={changeMode}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="technology"
                  country={country}
                  category="technology"
                />
              }
            />
          </Routes>
        ) : (
          <div>
            <h3 className="text-center">News Loading ..........</h3>
          </div>
        )}
        <Footer
          setProgress={setProgress}
          newCountry={newCountry}
          newCountry2={newCountry2}
          newCountry3={newCountry3}
          newCountry4={newCountry4}
          newCountry5={newCountry5}
          newCountry6={newCountry6}
          newCountry7={newCountry7}
          newCountry8={newCountry8}
        />
      </Router>
    </div>
  );
};

export default App;
