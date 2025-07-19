import CardProduct from "@/base/components/BaseUI/CardProduct";
import { Row, Col } from "antd";

const bestSellerProducts = [
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    salePrice: 299000,
    sellPrice: 329000,
    discountValue: 10,
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752902323/bluetooth_uploads/qaegk3ylpxqxneavkzav.png",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    salePrice: 299000,
    sellPrice: 329000,
    discountValue: 10,
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752902323/bluetooth_uploads/gslncn9hkgea9zpa99qd.png",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    salePrice: 299000,
    sellPrice: 329000,
    discountValue: 10,
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752902323/bluetooth_uploads/vhjrf3riwspvaqtwzqgw.png",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    salePrice: 299000,
    sellPrice: 329000,
    discountValue: 10,
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752902323/bluetooth_uploads/tmnegaj9exevnqvkwgs1.png",
  },
  {
    name: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    salePrice: 299000,
    sellPrice: 329000,
    discountValue: 10,
    image:
      "https://res.cloudinary.com/didb3lzdt/image/upload/v1752902322/bluetooth_uploads/kzpzhyg41j8khuzunj5z.png",
  },
];

const BestSeller = () => {
  return (
    <div className="product-seller-wrapper">
      <Row
        justify="space-between"
        align="middle"
        className="product-seller-header"
      >
        <h2>Sản Phẩm Bán Chạy</h2>
        <a href="#">Xem tất cả →</a>
      </Row>

      <Row gutter={[16, 24]} className="product-seller-list">
        {bestSellerProducts.map((pro, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
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
    </div>
  );
};

export default BestSeller;
