import { apiIns } from "@/@config/api.config";
import { queryStringMapper } from "@/@services/utils";

export const ProductService = {
  getProduct: async (queryParams?: any): Promise<any> => {
    return await apiIns.get(`/product` + queryStringMapper(queryParams));
  },
  getSingleProduct: async (slag: any): Promise<any> => {
    return await apiIns.get(`/product/` + slag);
  },
  getMoreWatches: async (slag: any): Promise<any> => {
    return await apiIns.get(`/product/related-products/` + slag);
  },

  getProductWithCategory: async (queryParams?: any): Promise<any> => {
    return await apiIns.get(`/product` + queryStringMapper(queryParams));
  },
};
