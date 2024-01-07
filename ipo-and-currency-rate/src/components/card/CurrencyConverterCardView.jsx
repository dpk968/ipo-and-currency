import React from "react";

const CurrencyConverterCardView = ({item}) =>{

  const convertToDate = (e) =>{
    return new Date(e).toLocaleDateString();
  }
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Symbol : {item.symbol}</h2>
          <div className="pair">
            <p className="card-description">Rate</p>
            <p className="card-description">{item.rate}</p>
          </div>
          <div className="pair">
            <p className="card-description">Filing Date</p>
            <p className="card-description">{convertToDate(item.timestamp)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverterCardView;
