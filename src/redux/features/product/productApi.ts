import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (ProductData) => ({
        url: "/product",
        method: "POST",
        body: ProductData,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductQuery, useAddProductMutation } = productApi;
