import CardProduct from "@/base/components/BaseUI/CardProduct";
import type { IProduct } from "@/base/types/Product";
import { Col, Flex, Row } from "antd";
import { useState } from "react";
import ProductFilterBar from "../ProductFilterBar";

interface ListProductProps {
  data: IProduct[];
}
const ListProduct = ({ data }: ListProductProps) => {
  const [activeSort, setActiveSort] = useState("relevant");

  const sortOptions = [
    {
      label: "Liên quan",
      value: "relevant",
      active: activeSort === "relevant",
    },
    {
      label: "Bán chạy",
      value: "bestSelling",
      active: activeSort === "bestSelling",
    },
    { label: "Mới nhất", value: "newest", active: activeSort === "newest" },
    { label: "Nổi bật", value: "featured", active: activeSort === "featured" },
  ];

  const handleSortChange = (value: string) => {
    setActiveSort(value);
  };
  return (
    <Flex>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <ProductFilterBar
            title="Danh sách sản phẩm"
            sortOptions={sortOptions}
            onSortChange={handleSortChange}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]}>
            {data?.map((pro: IProduct) => (
              <Col span={6}>
                <CardProduct
                  discount={pro.discountValue}
                  image={pro.image}
                  title={pro.name}
                  oldPrice={pro.sellPrice}
                  price={pro.salePrice}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Flex>
  );
};

export default ListProduct;
