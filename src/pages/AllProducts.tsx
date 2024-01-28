/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductQuery } from "../redux/features/product/productApi";

function AllProducts() {
  const { data, isLoading, isError } = useGetProductQuery(undefined);
  const productData = data?.data;
  console.log(productData, { isError });
  if (isLoading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      {productData?.map((p: any) => (
        <p key={p._id}>{p.name}</p>
      ))}
    </div>
  );
}

export default AllProducts;
