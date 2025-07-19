import { useState } from "react";
import { Checkbox } from "antd";
import "./style.css";
import { IoIosArrowUp } from "react-icons/io";

interface FilterOption {
  label: string;
  value: string;
  total?: number;
}

interface FilterCommonProps {
  title?: string;
  options: FilterOption[];
  defaultValues?: string[];
  type?: "select" | "input";
}

const FilterCommon = ({
  title = "Danh mục sản phẩm",
  options = [],
  defaultValues = [],
  type = "select",
}: FilterCommonProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-container">
      <h3 onClick={handleToggle}>
        {title}
        <span className={`arrow ${isOpen ? "up" : "down"}`}>
          <IoIosArrowUp />
        </span>
      </h3>
      {isOpen && (
        <>
          {type === "select" ? (
            <Checkbox.Group>
              {options.map((option) => (
                <Checkbox
                  key={option.value}
                  value={option.value}
                  defaultChecked={defaultValues.includes(option.value)}
                  style={{ width: "100%" }}
                >
                  <span className="checkbox-label">
                    <span className="text"> {option.label} </span>
                    {option.total && (
                      <span className="total-text">({option.total})</span>
                    )}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          ) : (
            <div className="input-group">
              {options.map((option) => (
                <div key={option.value} className="input-item">
                  <label className="input-label">{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterCommon;
