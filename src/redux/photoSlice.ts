import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";

import { fetchUnsplashApi } from "../api/fetchUnsplashApi";

import { Photos } from "../shared/types";

const createAppSlice = buildCreateSlice({
   creators: { asyncThunk: asyncThunkCreator },
});

type InitialState = {
   photos: Photos[];
   query: string;
   page: number;
   error: string;
   loading: boolean;
   firstLoad: boolean;
};

const initialState: InitialState = {
   photos: [],
   query: "",
   page: 1,
   error: "",
   loading: false,
   firstLoad: true,
};

const photoSlice = createAppSlice({
   name: "photo",
   initialState,
   reducers: (create) => ({
      fetchPhotos: create.asyncThunk(fetchUnsplashApi, {
         pending: (state) => {
            state.loading = true;
         },
         fulfilled: (state, action) => {
            state.loading = false;
            state.error = "";
            if (action.payload.photos[0].length)
               state.photos.push(...action.payload.photos.filter((photoRaw) => photoRaw.length));
            else state.error = "К сожалению, поиск не дал результатов";
            state.page = action.payload.newPage;
            state.firstLoad = action.payload.firstLoad;
         },
         rejected: (state) => {
            state.loading = false;
            state.error = "Server error";
         },
      }),
      saveQuery: create.reducer((state, action: PayloadAction<string>) => {
         state.query = action.payload;
         state.page = 1;
         state.photos = []; // Очищаем старые фото
         state.firstLoad = true;
      }),
   }),
});

export const { fetchPhotos, saveQuery } = photoSlice.actions;

export default photoSlice.reducer;
