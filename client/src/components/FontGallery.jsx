import React, { useEffect, useState } from "react";
import FontCard from "../components/FontCard";
import "../assets/scss/fontgallery.scss";

const FontGallery = () => {
  const [fonts, setFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/assets/data/koreanfont.json")
      .then((response) => response.json())
      .then((data) => setFonts(data))
      .catch((error) => console.error("Error loading font data:", error));
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
      <div className="font-wrap">
        {filteredFonts.map((font, index) => (
          <FontCard key={index} font={font} />
        ))}
      </div>
    </div>
  );
};

export default FontGallery;
