import PropTypes from "prop-types";
import { summaryTypes } from "./constants";
import "./index.css";

export const SummaryItem = ({ title, score, maxScore }) => {
  return (
    <div
      className="summary-item"
      style={{
        backgroundColor: summaryTypes[title].background,
        color: summaryTypes[title].color
      }}
    >
      <img
        className="summary-item__image"
        src={summaryTypes[title].icon}
        alt={title}
      />
      <p className="summary-item__title">{title}</p>
      <p className="summary-item__score">
        <span className="summary-item__user-score">{score}</span> / {maxScore}
      </p>
    </div>
  );
};

SummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  maxScore: PropTypes.number
};

SummaryItem.defaultProps = {
  maxScore: 100
};
