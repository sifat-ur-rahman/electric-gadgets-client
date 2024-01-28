/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetProductQuery } from "../redux/features/product/productApi";

import DetailsModal from "../components/Modal/DetailsModal";
import SaleModal from "../components/Modal/SaleModal";

function AllProducts() {
  const [modelData, setModelData] = useState();
  console.log(modelData);
  const { data, isLoading, isError } = useGetProductQuery(undefined);
  const productData = data?.data;
  console.log({ isError });
  if (isLoading) {
    return (
      <div className="flex items-center h-screen justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8">
        {productData?.map((p: any) => (
          <div
            className="border rounded-lg hover:border-orange-300  p-3"
            key={p._id}
          >
            <div className=" grid grid-cols-2 ">
              <img className="size-40" src={p.img} alt={p.name} />
              <div>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-2xl">
                  price: <span className="font-bold"> {p.price}</span> $
                </p>
                <p className="text-lg">
                  Brand:<span className="font-bold"> {p.brand}</span>
                </p>
                <p className="text-lg">
                  Model:<span className="font-bold"> {p.modelNumber}</span>
                </p>
                <p className="text-lg">
                  Features:<span className="font-bold"> {p.features}</span>
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-evenly">
              <label
                onClick={() => setModelData(p)}
                htmlFor="booking-modal"
                className="btn btn-outline btn-sm btn-primary px-8 text-xl font-bold rounded-full"
              >
                Buy Now
              </label>
              <label
                onClick={() => setModelData(p)}
                htmlFor="details-modal"
                className="btn btn-outline btn-sm btn-primary px-8 text-xl font-bold rounded-full"
              >
                Details
              </label>
            </div>
          </div>
        ))}
        <SaleModal modelData={modelData} />
        <DetailsModal modelData={modelData} />
      </div>
    </div>
  );
}

export default AllProducts;
