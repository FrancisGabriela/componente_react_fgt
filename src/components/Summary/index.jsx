import React, { useState } from "react";
import Button from "../Button";
import { summaryItems } from "./constants";
import { SummaryItem } from "./SummaryItem";

const Summary = () => {
  const [state, setState] = useState();

  const handleClick = () => {
    alert("CONTINUAR");
  };

  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  const filteredItems = summaryItems.filter((item) =>
    item.title.includes(state)
  );

  const itemsToShow = !state ? summaryItems : filteredItems;

  return (
    <section className="summary">
      <h2 className="summary__title">Summary</h2>
      <input value={state} onChange={handleInputChange} />
      {itemsToShow.map((item) => (
        <SummaryItem key={item.title} title={item.title} score={item.score} />
      ))}
      <Button title="Continuar" onClick={handleClick} />
    </section>
  );
};

export default Summary;
