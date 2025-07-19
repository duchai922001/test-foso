import { ConfigQuery } from "@/base/configs/configQuery";
import { ProductService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: [ConfigQuery.GET_PRODUCTS],
    queryFn: () => ProductService.getAllProduct(),
    select: (res) => res,
    staleTime: 5000,
  });
};
