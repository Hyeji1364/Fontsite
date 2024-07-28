import React from "react";
import "../assets/scss/loginpage.scss";
import cuteFont from "../assets/img/svg/cute-font.svg"; // 구름 아이콘
import kakaoIcon from "../assets/img/svg/kakao-icon.svg"; // 카카오 아이콘
import naverIcon from "../assets/img/svg/naver-icon.svg"; // 네이버 아이콘
import googleIcon from "../assets/img/svg/google-icon.svg"; // 구글 아이콘

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>간편로그인 후 이용이 가능합니다.</h2>
        <img src={cuteFont} alt="Cute Font" className="cute-font" />{" "}
        <div className="login-buttons">
          <button className="login-button kakao">
            <img src={kakaoIcon} alt="Kakao" className="icon" />
            카카오로 시작하기
          </button>
          <button className="login-button naver">
            <img src={naverIcon} alt="Naver" className="icon" />
            네이버로 시작하기
          </button>
          <button className="login-button google">
            <img src={googleIcon} alt="Google" className="icon" />
            구글로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
