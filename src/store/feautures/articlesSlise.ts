import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { blogAPI } from "../../services/blogsApi";
import { IArticle } from "../../types";

interface ArticleState {
    isLoading: boolean;
    error: null | string;
    results: IArticle[];
}

export const fetchArticles = createAsyncThunk<
    IArticle[],
    string,
    { rejectValue: string }
>('articles/fetchArticles',
    async (limit, { rejectWithValue }) => {
        try {
            return await blogAPI.getArticles(limit);
        } catch (error) {
            const axiosError = error as AxiosError
            return rejectWithValue(axiosError.message)
        }
    })

const initialState: ArticleState = {
    isLoading: false,
    error: null,
    results: [],
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchArticles.pending, state => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.results = payload;
        });
        builder.addCase(fetchArticles.rejected, (state, { payload }) => {
            if (payload) {
                state.isLoading = false;
                state.error = payload;
            }
        });
    },
})

export default articlesSlice.reducer