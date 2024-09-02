/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface DataProps {
  id: number;
  attributes: {
    title: string;
    ratings?: string;
    price: number;
    contentDescription?: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    sub_category: any;
    images: any[];
    coverImg: any;
    category: any;
  };
}

export interface MetaDataProps {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface ResultData {
  data: DataProps[];
  meta: MetaDataProps;
}

export interface ProductsState {
  loading: boolean;
  error: string | null;
  data: ResultData;
}

const initState: ProductsState = {
  data: {} as ResultData,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  ResultData,
  string,
  {
    rejectValue: string;
  }
>("data/fetchProducts", async (url, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    if (!error.response) {
      throw error;
    }
    const message = error.response.data?.message ?? "An error occurred";
    return rejectWithValue(message);
  }
});

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload ?? "Unknown error occurred";
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
