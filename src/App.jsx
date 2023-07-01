import { useState } from "react";
import data from "./data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";

import "./App.css";

function App() {
  const [reviews, setReviews] = useState(data);
  const [currentReview, setCurrentReview] = useState(0);

  const length = reviews.length - 1;

  function prevReview() {
    if (currentReview === 0) {
      return setCurrentReview(length);
    }
    setCurrentReview((prevValue) => prevValue - 1);
  }

  function nextReview() {
    if (currentReview === length) {
      return setCurrentReview(0);
    }
    setCurrentReview((prevValue) => prevValue + 1);
  }

  function randomReview() {
    const randomNum = Math.floor(Math.random() * (length + 1));

    setCurrentReview(randomNum);
  }

  const { name, image, text, job } = reviews[currentReview];

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="review-title">
          <h2>{name}</h2>
          <h4>{job}</h4>
        </div>
        <p>{text}</p>
        <div className="article-footer">
          <div className="btn-container">
            <button className="btn-chevron" onClick={prevReview}>
              <BiChevronLeft />
            </button>
            <button className="btn-chevron" onClick={nextReview}>
              <BiChevronRight />
            </button>
          </div>
          <button
            onClick={randomReview}
            className="btn btn-hipster surprise-btn"
          >
            surprise me
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
