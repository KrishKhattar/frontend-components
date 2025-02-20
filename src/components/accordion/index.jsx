import React, { useState } from 'react';
import data from './data';
import "./styles.css"

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="title" onClick={() => setSelected(index)}>
              <h2>{item.question}</h2>
              <span>+</span>
            </div>
            {selected === index && (
              <div className="content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}