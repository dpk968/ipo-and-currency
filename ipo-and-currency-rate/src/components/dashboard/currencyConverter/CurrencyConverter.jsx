import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";
import CurrencyConverterCardView from "../../card/CurrencyConverterCardView";

const CurrencyConverter = ({ fetchCurrency }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [rotationCount, setRotationCount] = useState(0);

  const handleImageClick = () => {
    setRotationCount(rotationCount + 1);
  };
  const rotationAngle = rotationCount * 360 * 3;

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_426dcba32a6848019e70d304cfadbf3f"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="currency-converter-heading">
        <h3 align="center">Currency Rate</h3>

        <img
          className="rotating-image"
          src={require("../../../img/refresh.png")}
          alt="Rotating Image"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            width: 60,
            height: 60,
          }}
          onClick={handleImageClick}
        />
      </div>

      {loading && <p>Loading. ..</p>}
      <div className="currency-converter">
        {/* {data.map((item) => (
          <div key={item.id}>
            <CurrencyConverterCardView item={item} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CurrencyConverter;
