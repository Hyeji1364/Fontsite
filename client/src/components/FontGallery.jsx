import React, { useEffect, useState } from "react";
import FontCard from "../components/FontCard";
import "../assets/scss/fontgallery.scss";

const FontGallery = () => {
  const [fonts, setFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    fetch("/assets/data/koreanfont.json")
      .then((response) => response.json())
      .then((data) => {
        setFonts(data);
        setIsLoading(false); // 폰트 데이터 로드 완료 후 로딩 상태 해제
      })
      .catch((error) => {
        console.error("Error loading font data:", error);
        setIsLoading(false); // 오류 발생 시에도 로딩 상태 해제
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFonts = fonts.filter((font) =>
    font.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-gallery" id="wrap">
      <div className="font-title">
        <h1>Explore Fontworld</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search fonts"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {isLoading ? ( // 로딩 중일 때 표시할 내용
        <div className="loading">Loading...</div>
      ) : (
        <div className="font-wrap">
          {filteredFonts.map((font, index) => (
            <FontCard key={index} font={font} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FontGallery;
