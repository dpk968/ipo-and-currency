import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import "./Dashboard.css";
import IpoCardView from "../card/IpoCardView";
import IpoFetcher from "./ipo/IpoFetcher";
import CurrencyConverter from "./currencyConverter/CurrencyConverter";

const Dashboard = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // chart();
    }
  }, [data, isLoading]);

  return (
    <div className="dashboard">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="dashboard-container">
          <div className="left-dashboard">
            <IpoFetcher />
            </div>
            <div id="chartContainer" className="right-dashboard">
            <CurrencyConverter />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
