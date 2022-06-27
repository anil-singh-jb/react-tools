import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news:[],
};

// const initialState = []

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {

        addNews: (state, { payload }) => {
            state.news = payload;
        },

    },
});

export const { addNews } = newsSlice.actions;
export const getAllNews = (state) => state.news;
export const newsReducer = newsSlice.reducer;

