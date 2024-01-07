import React ,{useState,useEffect}from "react";
import IpoCardView from "../../card/IpoCardView";
import "./Ipo.css";

function IpoFetcher() {
  const [rotationCount, setRotationCount] = useState(0);
  const [data,setData] = useState([]);

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
        "https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_426dcba32a6848019e70d304cfadbf3f"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="heading-container">
        <h3>Latest UpComing IPO</h3>
        <img
          className="rotating-image"
          src={require("../../../img/refresh.png")}
          alt="Rotating Image"
          style={{ transform: `rotate(${rotationAngle}deg)`, width: 60, height: 60}}
          onClick={handleImageClick}
        />
      </div>
      <div className="ipo-card">
      {/* {data.map((item) => (
          <div key={item.id}>
             <IpoCardView item={item} />
          </div>
        ))} */}
      </div>
    </>
  );
}

export default IpoFetcher;
