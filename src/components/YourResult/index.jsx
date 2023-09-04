import React from "react";
import "./index.css";

const YourResult = ({ score, maxScore }) => {
  return (
    <section className="your-result">
      <h1 className="your-result__title">Your Result</h1>
      <div className="your-result__score">
        <p>
          <span className="your-result__user-score">{score}</span> of {maxScore}
        </p>
      </div>
      <div className="your-result__message">
        <p className="your-result__message-title">Great</p>
        <p className="your-result__message-text">
          You scored higher than 65% of the people who have taken these test.
        </p>
      </div>
    </section>
  );
};

YourResult.defaultProps = {
  maxScore: 100
};

export default YourResult;
