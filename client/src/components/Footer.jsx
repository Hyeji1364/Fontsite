import React from "react";
import "../assets/scss/footer.scss";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Add TEXT</h2>
          <p>© 2024 Create. Customize. Captivate</p>
          <p>
            모든 폰트의 저작권은 모든 각 폰트의 제작자 / 제작사에 있습니다.{" "}
            <br></br>
            폰트 사용에 대한 라이센스 문의는 제작자 / 제작사에 문의해주시길
            바랍니다.
          </p>
          <p>
            이용약관 | 개인정보처리방침 | 폰트 제작 관련 질문 | 기업 관련 문의
          </p>
        </div>
        <div className="footer-right">
          <p>
            김혜지 <a href="https://github.com">GitHub</a>
          </p>
          <p>
            최선화 <a href="https://github.com">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
