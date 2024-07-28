import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/profilepopup.scss"; // 팝업 스타일 파일

const ProfilePopup = ({ onClose, buttonRef }) => {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    navigate("/makepage");
    onClose(); // 팝업 닫기
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content position-adjusted"
        onClick={(e) => e.stopPropagation()}>
        <h3>사용자 님</h3>
        <hr />
        <ul>
          <li onClick={handleMyPageClick}>마이페이지</li>
          <li>로그아웃</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePopup;
