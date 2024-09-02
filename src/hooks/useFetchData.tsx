/* eslint-disable react-hooks/exhaustive-deps */
import { fetchProducts } from "@/redux/slices/productsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchProductsData = (url: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(url));
  }, [url]);

  return { data, loading, error };
};

export default useFetchProductsData;
