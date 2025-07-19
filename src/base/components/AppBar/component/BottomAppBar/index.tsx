import { Button, Flex, Typography } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import "./style.css";
import { MenuAbousUs, MenuPolicy } from "@/base/configs/configMenu";
import type { IMenuAbousUs, IMenuPolicy } from "@/base/types/configMenu";
import { Link } from "react-router-dom";
import { FaClock, FaShippingFast, FaTruck, FaUndo } from "react-icons/fa";
import { useState } from "react";
import CategoryPanel from "../CategoryPanel";
const iconMap: { [key: string]: React.ElementType } = {
  FaClock,
  FaShippingFast,
  FaTruck,
  FaUndo,
};
const BottomAppBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="bottom-app-bar" onMouseLeave={() => setIsHovering(false)}>
      <Flex gap={24} align="center" justify="space-between">
        <Flex gap={12} align="center">
          <Button
            className="btn-category"
            onMouseEnter={() => setIsHovering(true)}
          >
            <IoMenu className="icon-common" />
            <Typography className="text-size-common text-category">
              Danh mục sản phẩm
            </Typography>
            <IoIosArrowDown className="icon-common" />
          </Button>
          <Flex gap={12} align="center" className="menu">
            {MenuAbousUs.map((item: IMenuAbousUs) => (
              <Link to={item.href}>
                <Typography className="text-size-common">
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex gap={16}>
          {MenuPolicy.map((item: IMenuPolicy, idx: number) => {
            const Icon = item.icon ? iconMap[item.icon] : null;
            return (
              <Flex key={idx} align="center" gap={4}>
                {Icon && <Icon color="var(--primary-color)" />}
                <span className="text-size-common">{item.title}</span>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      {isHovering && <CategoryPanel />}
    </div>
  );
};

export default BottomAppBar;
