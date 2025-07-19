import { Breadcrumb, Col, Divider, Flex, Row } from "antd";
import { Link } from "react-router-dom";
import Banner from "./components/Banner";
import CardSlider from "./components/CardSlider";
import "./style.css";
import ListProduct from "./components/ListProduct";
import { useGetProducts } from "@/hooks/useProduct";
import FilterCommon from "./components/FilterCommon";
import { RiFilter2Fill } from "react-icons/ri";
import { ConfigHome } from "@/base/configs/configHome";
import { FaClock, FaCreditCard, FaGift, FaTruck } from "react-icons/fa";
const Home = () => {
  const { data = [] } = useGetProducts();
  const formFilter = [
    {
      title: "Danh mục sản phẩm",
      options: ConfigHome.filterCategoryOptions,
      defaultValues: ["airFilter", "fuelFilter", "oilFilter"],
      type: "select",
    },
    {
      title: "Khoảng giá",
      options: ConfigHome.filterPriceOptions,
      type: "input",
    },
    {
      title: "Thương hiệu",
      options: ConfigHome.filterBrandOptions,
      type: "select",
    },
    {
      title: "Năm sản xuất",
      options: ConfigHome.filterYearOptions,
      type: "select",
    },
    {
      title: "Xuất xứ",
      options: ConfigHome.filterOriginOptions,
      type: "select",
    },
  ];

  const dataPolicy = [
    {
      title: "Miễn phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu",
      icon: <FaCreditCard />,
    },
    {
      title: "Hỗ trợ 24/7",
      description: "Đặt hàng CSKH tận tình sáng đến sáng",
      icon: <FaClock />,
    },
    {
      title: "Giao hàng nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP.HCM",
      icon: <FaTruck />,
    },
    {
      title: "30 ngày đổi trả",
      description: "Hàng lỗi 100% hoàn tiền hoặc đổi hàng mới",
      icon: <FaGift />,
    },
  ];

  return (
    <Flex vertical gap={24}>
      <Breadcrumb
        items={[
          {
            title: "Trang chủ",
          },
          {
            title: (
              <Link to="/" style={{ color: "var(--primary-color)" }}>
                Sản phẩm
              </Link>
            ),
          },
        ]}
      />
      <Flex vertical className="top-home">
        <Banner />
        <CardSlider data={data} />
      </Flex>
      <Row align="top" gutter={[24, 24]}>
        <Col span={6} className="filters-box">
          <header className="filter-header">
            <RiFilter2Fill className="icon-filter" />
            <span>Bộ lọc</span>
          </header>
          <Divider />
          {formFilter.map((filter: any, index: number) => (
            <div
              style={{
                paddingBottom: index === formFilter.length - 1 ? 12 : 0,
              }}
            >
              <FilterCommon
                title={filter.title}
                options={filter.options}
                defaultValues={filter.defaultValues}
                type={filter.type}
              />
              {index !== formFilter.length - 1 && <Divider />}
            </div>
          ))}
        </Col>
        <Col span={18}>
          <ListProduct data={data} />
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        {dataPolicy.map((policy) => (
          <Col span={6}>
            <div className="policy-card">
              <div className="policy-icon">{policy.icon}</div>
              <div className="policy-content">
                <h4 className="policy-title">{policy.title}</h4>
                <p className="policy-description">{policy.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Home;
