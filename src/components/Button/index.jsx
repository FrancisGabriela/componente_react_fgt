import React from "react";
import "./index.css";

const Button = ({ title, onClick }) => {
  return <button onClick={onClick} className="btn"></button>;
};

export default Button;
