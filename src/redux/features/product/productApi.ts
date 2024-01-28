import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (ProductData) => ({
        url: "/product",
        method: "POST",
        body: ProductData,
      }),
    }),
  }),
});

export const { useGetProductQuery, useAddProductMutation } = productApi;
