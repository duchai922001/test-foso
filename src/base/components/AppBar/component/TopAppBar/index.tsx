import { Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LOGO from "@/assets/logo.png";
import LOGO_VN from "@/assets/icon-VN.png";
import CART from "@/assets/Vector.png";
import USER from "@/assets/User.png";
import { IoCameraOutline } from "react-icons/io5";

import "./style.css";
const TopAppBar = () => {
  return (
    <Flex
      gap={24}
      align="center"
      justify="space-between"
      className="app-bar-top"
    >
      <Flex className="logo-section">
        <img src={LOGO} alt="Sunfil Logo" className="logo" />
      </Flex>

      <Flex className="search-section">
        <input placeholder="Tìm sản phẩm" className="search-input" />
        <Flex gap={12} justify="center" align="center" className="action-wrap">
          <div>
            <IoCameraOutline className="icon-common" />
          </div>
          <div className="search-box">
            <SearchOutlined className="icon-common" />
          </div>
        </Flex>
      </Flex>

      <Flex align="center" justify="flex-end" gap={24} className="icon-section">
        <Flex align="center" gap={4} style={{ cursor: "pointer" }}>
          <img src={LOGO_VN} />
          <span>VI</span>
        </Flex>
        <Flex align="center" gap={4} style={{ cursor: "pointer" }}>
          <div className="cart">
            <img src={CART} />
            <span className="num-cart">12</span>
          </div>
          <span>Giỏ hàng</span>
        </Flex>
        <Flex align="center" gap={4} style={{ cursor: "pointer" }}>
          <img src={USER} />
          <span>Tài khoản</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopAppBar;
