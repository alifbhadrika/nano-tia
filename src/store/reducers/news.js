import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { apiUrl } from "../../middleware/api";

const initialState = {
  posts: [],
  currentPost: {},
  status: "idle",
  error: null,
  viewedTimes: 0,
};

export const fetchAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (page = 1) => {
    const response = await api.get(`${apiUrl}/posts/?page=${page}&per_page=10`);

    return response.data.posts;
  }
);

export const fetchNewsBySlug = createAsyncThunk(
  "news/fetchNewsBySlug",
  async (slug = "") => {
    const response = await api.get(`${apiUrl}/posts/${slug}`);

    return response.data.posts[0];
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    incrViewTimes: (state) => {
      state.viewedTimes += 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status = "success";
        const loadedPosts = action.payload;
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNewsBySlug.fulfilled, (state, action) => {
        state.status = "success";
        state.currentPost = action.payload;
      });
  },
});

export const selectAllPosts = (state) => state.news.posts;
export const getPostsStatus = (state) => state.news.status;
export const getPostsError = (state) => state.news.error;

export const { incrViewTimes } = newsSlice.actions;

export default newsSlice.reducer;
