import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/header.scss";
import leftIcon from "../assets/img/svg/left-icon.svg";
import rightIcon from "../assets/img/svg/right-icon.svg";
import sunnyIcon from "../assets/img/svg/sunny.svg";
import nightIcon from "../assets/img/svg/night.svg";
import loginIcon from "../assets/img/svg/login-button.svg";
import mypageIcon from "../assets/img/svg/mypage.svg";
import ProfilePopup from "./ProfilePopup";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const loginButtonRef = useRef(null);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <header id="header" role="banner">
        <div className="logo-container">
          <img src={leftIcon} alt="Left Icon" className="left-icon" />
          <Link to="/" className="logo-link">
            <div className="logo">Add text</div>
          </Link>
          <img src={rightIcon} alt="Right Icon" className="right-icon" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="make">폰트제작</a>
            </li>
            <li>
              <a href="#share">디자인공유</a>
            </li>
          </ul>
        </nav>
        <div className="right-section">
          <img
            src={isDarkMode ? nightIcon : sunnyIcon}
            alt="Dark Mode Icon"
            className={`dark-mode-icon ${isDarkMode ? "night-mode" : ""}`}
            onClick={toggleDarkMode}
          />
          {isLoggedIn ? (
            <div
              className="profile-button"
              onClick={togglePopup}
              ref={loginButtonRef}>
              <img
                src={mypageIcon}
                alt="Profile Icon"
                className="mypage-icon"
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="login-button"
              onClick={handleLoginClick}
              ref={loginButtonRef}>
              <img src={loginIcon} alt="Login Icon" className="login-icon" />
              <span>로그인</span>
            </Link>
          )}
        </div>
      </header>
      {isPopupOpen && (
        <ProfilePopup onClose={togglePopup} buttonRef={loginButtonRef} />
      )}
    </>
  );
};

export default Header;
