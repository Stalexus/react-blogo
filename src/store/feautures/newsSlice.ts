import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogAPI } from "../../services/blogsApi";
import { IBlog, RequestQueryParams } from "../../types";

interface BlogState {
    isLoading: boolean;
    error: null | string;
    results: IBlog[];
}

export const fetchNews = createAsyncThunk<
    IBlog[],
    RequestQueryParams,
    { rejectValue: string }
>('news/fetchNews',
    async ({ limit, page }, { rejectWithValue }) => {
        try {
            return await blogAPI.getBlogs({ limit, page });
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.message)
        }
    })

const initialState: BlogState = {
    isLoading: false,
    error: null,
    results: [],
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNews.pending, state => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.results = payload;
        });
        builder.addCase(fetchNews.rejected, (state, { payload }) => {
            if (payload) {
                state.isLoading = false;
                state.error = payload;
            }
        });
    },
})

export default newsSlice.reducer