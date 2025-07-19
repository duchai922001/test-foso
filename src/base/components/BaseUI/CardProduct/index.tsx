import React from "react";
import { Button } from "antd";
import { FireOutlined } from "@ant-design/icons";
import "./style.css";

export interface CardProductProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
}

const CardProduct: React.FC<CardProductProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-content">
        <div className="product-badge">
          <FireOutlined style={{ marginRight: 4 }} />
          Giá cực sốc
        </div>

        <div className="product-title" title={title}>
          {title}
        </div>

        <div className="product-price">{price.toLocaleString("vi-VN")} đ</div>

        <div className="product-old-price">
          <span className="line-through">
            {oldPrice.toLocaleString("vi-VN")} đ
          </span>
          <span className="discount">-{discount}%</span>
        </div>

        <Button type="primary" className="buy-button">
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
