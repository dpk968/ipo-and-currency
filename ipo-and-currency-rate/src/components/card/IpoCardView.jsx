import React from "react";
import "./IpoCard.css";

const IpoCardView = ({item}) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{item.companyName}</h2>
        <div className="pair">
          <p className="card-description">Symbol</p>
          <p className="card-description">{item.symbol}</p>
        </div>
        <div className="pair">
          <p className="card-description">Filing Date</p>
          <p className="card-description">{item.filedDate}</p>
        </div>
        <div className="pair">
          <p className="card-description">Offering Date</p>
          <p className="card-description">{item.offeringDate}</p>
        </div>
        <div className="pair">
          <p className="card-description">price Range</p>
          <p className="card-description">${item.priceRangeLow} - ${item.priceRangeHigh}</p>
        </div>
        <div className="pair">
          <p className="card-description">Shares</p>
          <p className="card-description">{item.shares}</p>
        </div>
      </div>
    </div>
  );
};

export default IpoCardView;
