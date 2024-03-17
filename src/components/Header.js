import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as World } from "../images/world.svg";
import { ReactComponent as Ham } from "../images/hamburger.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Search } from "../images/search.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-buttons">
        <div className="header-left">
          <Logo className="logo" />
        </div>
        <div className="header-middle">
          <button className="header-middle-left header-button">
            <span className="header-button-span">Stays</span>
          </button>
          <button className="header-middle-middle header-button">
            <span className="header-button-span"> Experiences</span>
          </button>
          <button className="header-middle-right header-button">
            <span className="header-button-span">Online Experiences</span>
          </button>
        </div>
        <div className="header-right">
          <div className="header-right-left">
            <div className="airbnb-home"> Airbnb your home</div>
          </div>
          <div className="header-right-middle">
            <World className="world-icon" />
          </div>
          <button className="header-right-right">
            <div className="ham">
              <Ham />
            </div>
            <div className="user">
              <User />
            </div>
          </button>
        </div>
      </div>
      <div className="header-input">
        <div className="location">
          <div className="where">Where</div>
          <div className="search">
            <input
              type="text"
              id="search-bar"
              className="search-bar"
              placeholder="Search destinations"
            />
          </div>
        </div>
        <div className="check-in">
          <div className="check-in-title">Check in</div>
          <div className="add-dates">add dates</div>
        </div>
        <div className="check-out">
          <div className="check-out-title">Date</div>
          <div className="add-dates">add dates</div>
        </div>
        <div className="guests-container">
          <div className="guests">
            <div className="guest-title">Who</div>
            <div className="add-guests">add guests</div>
          </div>
          <div className="search-btn-container">
            <Search className="search-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
