import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1 className='fs-24'>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p className='fs-16'>{text}</p>
    </div>
  </div>
);

export default Feature;