import { Flex } from "antd";
import Frame from "@/assets/Frame.png";
import FramBg from "@/assets/frame_bg.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Flex justify="space-between" className="banner-content">
        <div className="banner-text">
          <div className="banner-badge">MỚI CỰC HOT!</div>
          <h2 className="banner-title">TẢI APP NHẬN QUÀ</h2>
          <p className="banner-subtext">
            Tích điểm ngay trên app <span className="app-name">SUNFIL1</span>
            <br />
            <span className="note">*100K = 10 điểm</span>
          </p>
        </div>
        <div className="banner-visual">
          <img src={FramBg} alt="Frame Background" className="banner-bg" />
          <img src={Frame} alt="Frame" className="banner-image" />
        </div>
      </Flex>
    </div>
  );
};

export default Banner;
