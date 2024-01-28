import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (filterOptions) => ({
        url: `/products${filterOptions ? `?${filterOptions}` : ""}`,
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
    updatedProduct: builder.mutation({
      query: (updatedData) => ({
        url: `/product/${updatedData.id}`,
        method: "PUT",
        body: updatedData.productData,
      }),
      invalidatesTags: ["product"],
    }),
    duplicateProduct: builder.mutation({
      query: (updatedData) => ({
        url: `/duplicate/${updatedData.id}`,
        method: "POST",
        body: updatedData.productData,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (Data) => ({
        url: `/product/${Data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useUpdatedProductMutation,
  useDuplicateProductMutation,
  useDeleteProductMutation,
} = productApi;
