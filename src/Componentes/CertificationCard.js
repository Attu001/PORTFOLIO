import React from 'react';
import './CertificationCard.css';

const CertificationCard = (props) => {
  return (
    <div className="certification-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="certification-title">{props.title}</h2>
      <div className="certification-details">
        <p>{props.issuer}</p>
        <p>Issued: {props.date}</p>
      </div>
      
    </div>
  );
};

export default CertificationCard;
