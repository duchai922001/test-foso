import { useState } from "react";
import "./style.css";
import { Col, Row } from "antd";
import BestSeller from "../BestSeller";

const categoryData = [
  {
    name: "Bộ Lọc Dầu",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/eg1ndmtlar5eqatkv8v9.png",
  },
  {
    name: "Bộ Lọc Khí",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/bgbhdxnw6nl9djpmj5i8.png",
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912234/bluetooth_uploads/ltdiprvldwm27yrkyooe.jpg",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/t94idbugviinb7snz7uu.png",
  },
  {
    name: "Bộ Lọc Khí",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/hvnpxpfhk13w4ia1ahk6.png",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/vgcwwjgq2opbqpgkauke.png",
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/rrtgrxj2cxrvix3ucd1a.png",
  },
];

const categoryDataRight = [
  {
    name: "Bộ Lọc Dầu",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/eg1ndmtlar5eqatkv8v9.png",
  },
  {
    name: "Bộ Lọc Khí",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/bgbhdxnw6nl9djpmj5i8.png",
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912234/bluetooth_uploads/ltdiprvldwm27yrkyooe.jpg",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/t94idbugviinb7snz7uu.png",
  },
  {
    name: "Bộ Lọc Khí",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/hvnpxpfhk13w4ia1ahk6.png",
  },
  {
    name: "Bộ Lọc Trong Cabin",
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752912233/bluetooth_uploads/vgcwwjgq2opbqpgkauke.png",
  },
];

const CategoryPanel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <Row className="category-mega-menu">
      <Col span={4} className="category-left">
        {categoryData.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${
              hoveredIndex === index ? "active" : ""
            }`}
            onClick={() => setHoveredIndex(index)}
          >
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </Col>
      <Col span={20} className="category-right">
        <Row gutter={[12, 12]}>
          {categoryDataRight.map((item) => (
            <Col span={8} style={{ height: "100%" }}>
              <div className="box">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </Col>
          ))}
        </Row>
        <BestSeller />
      </Col>
    </Row>
  );
};

export default CategoryPanel;
