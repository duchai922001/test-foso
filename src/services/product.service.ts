import { axiosInstance } from "./main.service";

export const ProductService = {
  getAllProduct: async () => {
    const response = await axiosInstance.get("/product");
    return response.data;
  },
};
