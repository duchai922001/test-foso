import React, { useState } from "react";
import { Button, Flex } from "antd";
import "./style.css";
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosArrowUp,
} from "react-icons/io";

interface SortOption {
  label: string;
  value: string;
  active?: boolean;
}

interface ProductFilterBarProps {
  title: string;
  sortOptions: SortOption[];
  onSortChange?: (value: string) => void;
}

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
  title,
  sortOptions,
  onSortChange,
}) => {
  const [isSortPrice, setIsSortPrice] = useState(false);
  const handleSortClick = (value: string) => {
    if (onSortChange) onSortChange(value);
  };
  const handleClick = () => {
    setIsSortPrice(!isSortPrice);
  };
  return (
    <Flex justify="space-between" className="product-filter-bar">
      <div className="filter-title">{title}</div>
      <div className="filter-actions">
        <span className="sort-by-text">Sắp xếp theo</span>
        {sortOptions.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleSortClick(option.value)}
            className={`sort-button ${option.active ? "active-button" : ""}`}
          >
            {option.active && <span className="checkmark">✓</span>}
            {option.label}
          </Button>
        ))}
        <div className="sort-price" onClick={handleClick}>
          <span>Giá:</span>
          <Flex align="center">
            <span>{isSortPrice ? "Thấp" : "Cao"}</span>
            <IoIosArrowRoundForward />
            <span>{isSortPrice ? "Cao" : "Thấp"}</span>
          </Flex>
          {isSortPrice ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
    </Flex>
  );
};

export default ProductFilterBar;
