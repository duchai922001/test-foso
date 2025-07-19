import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./style.css";
import CardProduct from "@/base/components/BaseUI/CardProduct";
import type { IProduct } from "@/base/types/Product";
interface CardSliderProps {
  data: IProduct[];
}
const CardSlider = ({ data }: CardSliderProps) => {
  return (
    <div style={{ padding: "0 24px" }}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={5}
        style={{ padding: "20px 0" }}
      >
        {data.map((pro: IProduct, idx: number) => (
          <SwiperSlide key={idx}>
            <CardProduct
              discount={pro.discountValue}
              image={pro.image}
              title={pro.name}
              oldPrice={pro.sellPrice}
              price={pro.salePrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
