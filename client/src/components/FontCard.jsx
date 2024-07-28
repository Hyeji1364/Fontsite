import React, { useEffect, useState } from "react";
import "../assets/scss/fontcard.scss";

const FontCard = ({ font }) => {
  const [fontClass, setFontClass] = useState(null);

  useEffect(() => {
    if (font.cssUrl) {
      fetch(font.cssUrl)
        .then((response) => response.text())
        .then((cssText) => {
          const styleElement = document.createElement("style");
          styleElement.innerHTML = cssText;
          document.head.appendChild(styleElement);

          const fontFaceMatch = cssText.match(
            /@font-face\s*{[^}]*font-family:\s*['"]([^'"]+)['"]/
          );
          if (fontFaceMatch) {
            const fontFamily = fontFaceMatch[1];
            setFontClass(fontFamily);
          }

          return () => {
            document.head.removeChild(styleElement);
          };
        })
        .catch((error) => console.error("Error loading font CSS:", error));
    }
  }, [font.cssUrl]);

  return (
    <div className={`font ${font.style}`} style={{ fontFamily: fontClass }}>
      {font.style === "s1" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s2" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s3" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s4" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s5" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s6" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s7" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s8" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s9" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s10" && (
        <>
          <span>{font.name}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s11" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s12" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s13" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s14" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
        </>
      )}
      {font.style === "s15" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
        </>
      )}
      {font.style === "s16" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
        </>
      )}
      {font.style === "s17" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s18" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
        </>
      )}
      {font.style === "s19" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s20" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
      {font.style === "s21" && (
        <>
          <span>{font.name}</span>
          <span>{font.name_eng}</span>
        </>
      )}
    </div>
  );
};

export default FontCard;
