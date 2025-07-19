import { Row, Col, Flex } from "antd";
import "./style.css";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../BaseUI/Container";
import Check from "@/assets/check.png";
import IconVN from "@/assets/icon-VN.png";
import { IoIosArrowRoundForward } from "react-icons/io";
const Footer = () => {
  const companyInfo = {
    name: "VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY",
    taxCode: "0308042428",
    address: "13 Ngõ Thục, Ward 05, District 5, Ho Chi Minh City, Viet Nam",
    phone: "0282 730 7807",
    hours: "Opening hours: 08:00 - 22:00 from Mon - Fri",
    logo: (
      <div style={{ fontSize: "24px", color: "#1890ff" }}>
        <FaMapMarkerAlt />
      </div>
    ),
  };

  const sitemap = {
    title: "Sitemap",
    items: [
      { label: "Article", url: "#" },
      { label: "Cart", url: "#" },
      { label: "Contact", url: "#" },
    ],
  };

  const legal = {
    title: "Legal",
    items: [
      { label: "Privacy Policy", url: "#" },
      { label: "Cookie policy", url: "#" },
      { label: "Delivery policy", url: "#" },
      { label: "FAQs", url: "#" },
    ],
  };

  return (
    <>
      <div className="view-store">
        <Container>
          <Flex justify="space-between">
            <div className="map">
              <FaMapMarkedAlt
                style={{ fontSize: 32, color: "var(--primary-color)" }}
              />
              <span className="title">Xem hàng 88 cửa hàng trên toàn quốc</span>
            </div>
            <div className="btn-view-now">
              <span className="language-switch">Xem ngay</span>
              <IoIosArrowRoundForward />
            </div>
          </Flex>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <Row gutter={[16, 16]} className="footer-content">
            <Col span={10} className="footer-section">
              <div className="company-info">
                <p className="company-name">{companyInfo.name}</p>
                <p>
                  <span className="title">Tax code:</span>{" "}
                  <span className="des">{companyInfo.taxCode}</span>
                </p>
                <p>
                  <span className="title">Address:</span>{" "}
                  <span className="des">{companyInfo.address}</span>
                </p>
                <p>
                  <span className="title">Phone number:</span>{" "}
                  <span className="des"> {companyInfo.phone}</span>
                </p>
                <p>
                  <span className="title">Opening hour:</span>{" "}
                  <span className="des"> {companyInfo.hours}</span>
                </p>
                <img src={Check} style={{ width: 200 }} />
              </div>
            </Col>
            <Col span={4} className="section">
              <h4>{sitemap.title}</h4>
              <ul>
                {sitemap.items.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col span={4} className="section">
              <h4>{legal.title}</h4>
              <ul>
                {legal.items.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col span={6} className="footer-section">
              <h4 className="footer-title">Download App</h4>
              <div className="app-buttons">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button google"
                >
                  <img
                    src="https://2.gravatar.com/avatar/93cb414523db31087ce3a3428f0a171860813ebe4bd703c9f7d1c687a96186b7?size=256"
                    alt="Google Play"
                    className="store-icon"
                  />
                  <div>
                    <div className="small-text">Get It On</div>
                    <div className="big-text">Google Play Store</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button apple"
                >
                  <img
                    src="https://yt3.googleusercontent.com/s5hlNKKDDQWjFGzYNnh8UeOW2j2w6id-cZGx7GdAA3d5Fu7zEi7ZMXEyslysuQUKigXNxtAB=s900-c-k-c0x00ffffff-no-rj"
                    alt="Apple Store"
                    className="store-icon"
                  />
                  <div>
                    <div className="small-text">Download from</div>
                    <div className="big-text">Apple App Store</div>
                  </div>
                </a>
              </div>

              <div className="language-select">
                <img src={IconVN} alt="Vietnamese" />
                <span>VI</span>
                <span className="arrow">⌄</span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
