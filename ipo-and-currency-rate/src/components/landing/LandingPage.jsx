import React from 'react';
import './LandingPage.css';
import landingBg from '../../img/financial-data.jpg'

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="image-container">
          <img
            src={landingBg}
            alt="Stock Market"
            className="stock-market-img"
          />
        </div>
        <div className="content-container">
          <h1>Welcome to Your Stock Market</h1>
          <h3>Largest stock broker in India</h3>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="buttons-container">
            <button className="sign-up-button">Sign Up</button>
            <button className="connect-button">Connect Us</button>
          </div>
        </div>
      </div>

      <div className="home-screen-second-panel">
        <div className="left-content">
          <div className="small-ball-anime">
            <img src={require("../../img/small-ball-removebg-preview.png")} alt="" srcSet="" />
          </div>
          <div className="bitcoin-img">
            <img src={require("../../img/about_img01.92aec9a4de2f58631598-removebg-preview.png")} alt="" srcSet="" />
          </div>
        </div>
        <div className="right-content">
          <p className='paragraph-with-dots'>WHO WE ARE</p>
          <h1>The World’s 1st ICO Platform That Offers Rewards</h1>
          <p>The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
          <button className="token-btn">Purchase Tokens</button>
        </div>
      </div>

      <div className="chart-container">
        <div className="container">
          <div className="token-allocation">
            <h6>FUNDING ALLOCATION</h6>
            <h1>1 CNL = 0.0863 BTC</h1>
            <p>The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
            <button className="token-btn">Buy Now</button>
          </div>
          <div className="chart-statics">
            <img src={require("../../img/chart.png")} alt="" />
            <ul className='chart'>
              <li>Contingency: 70%</li>
              <li>Business Development: 10%</li>
              <li>Investor: 30%</li>
              <li>Poland</li>
              <li>Legal & Regulation:10%</li>
              <li>Czech Republic</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="team">
        <div className="our-team-heading">
          <div className="team-title">
          <p className='paragraph-with-dots'>OUR TEAM</p>
          <h1>The Leadership Team</h1>
          </div>
        </div>
        <div className="all-team">
          <div className="team-div">
            <div className="upper">
              <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

          <div className="team-div">
            <div className="upper">
            <img src={require("../../img/team_img01.png")} alt="" srcSet="" />
            </div>
            <div className="team-about">
              <h6>Cameron Williamson</h6>
              <span>Product Manager</span>
            </div>
          </div>

        </div>
        
      </div>

    </>
  );
};

export default LandingPage;
