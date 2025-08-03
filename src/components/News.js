import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [state, setState] = useState("true");

  const captilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(12);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(52);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apikey=${props.apikey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    if (parsedData.articles.length === 0) {
      setLoading(false);
      setState(false);
      return;
    }
  };

  useEffect(() => {
    document.title = ` ${captilizeFirstLetter(props.category)} - News-Station `;
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1
        className="text-center"
        style={{ padding: "10px", margin: "100px 0px 30px 0px" }}
      >
        News-Stations - Top {captilizeFirstLetter(props.category)} Headlines{" "}
      </h1>

      {loading && <Spinner mode={props.mode} />}

      {
        !loading &&
        articles.length === 0 &&
        props.country !== "us" && (
          <div className="text-center my-5">
            <h4> Oops! No top headlines available for this country at the moment.</h4>
            <p>Please check back later or choose a different region. <br /> Sorry for the inconvenience </p>
          </div>
        )
      }

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={state && articles.length !== totalResults}
        loader={<Spinner mode={props.mode} />}
      >
        <div className="container">
          <div className="row justify-content-center align-items-stretch">
            {articles.map((element, index) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 my-3"
                  key={`${element.url}-${index}`}
                >
                  <NewsItems
                    title={
                      element.title
                        ? element.title.length >= 50
                          ? element.title.slice(0, 45)
                          : element.title
                        : ""
                    }
                    description={
                      element.description
                        ? element.description.length >= 70
                          ? element.description.slice(0, 70)
                          : element.description
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    credits={element.source.name}
                    mode={props.mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
