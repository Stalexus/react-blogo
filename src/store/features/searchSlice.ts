import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogAPI } from "../../services/blogsApi";
import { IArticle, RequestQueryParams } from "../../types";

interface SearchState {
  isLoading: boolean;
  error: null | string;
  results: IArticle[];
  search?: string;
}

export const fetchSearchArticles = createAsyncThunk<
  IArticle[],
  RequestQueryParams,
  { rejectValue: string }
>("search/fetchSearch", async ({ limit, page, searchParams }, { rejectWithValue }) => {
  try {
    return await blogAPI.getSearchArticles({ limit, page, searchParams });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const initialState: SearchState = {
  isLoading: false,
  error: null,
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cleanStore: (state) => {
      state.results = [];
    },
    searchArea: (state, { payload }) => {
      state.search = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchSearchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
export const { cleanStore, searchArea } = searchSlice.actions;
