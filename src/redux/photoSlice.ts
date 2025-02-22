import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

import { fetchPhotosThunk } from "../api/fetchUnsplashApi";

const createAppSlice = buildCreateSlice({
   creators: { asyncThunk: asyncThunkCreator },
});

const initialState = {
   photos: [],
   query: undefined,
   page: 1,
   error: "",
   loading: false,
   firstLoad: true,
};

const photoSlice = createAppSlice({
   name: "photo",
   initialState,
   reducers: (create) => ({
      fetchPhotos: create.asyncThunk(fetchPhotosThunk, {
         pending: (state) => {
            state.loading = true;
         },
         fulfilled: (state, action) => {
            state.loading = false;
            state.error = "";
            action.payload.photos[0].length
               ? state.photos.push(...action.payload.photos.filter((photoRaw) => photoRaw.length))
               : (state.error = "К сожалению, поиск не дал результатов");
            state.page = action.payload.newPage;
            state.firstLoad = action.payload.firstLoad;
         },
         rejected: (state) => {
            state.loading = false;
            state.error = "Server error";
         },
      }),
      saveQuery: create.reducer((state, action) => {
         state.query = action.payload;
         state.page = 1;
         state.photos = []; // Очищаем старые фото
         state.firstLoad = true;
      }),
   }),
});

export const { fetchPhotos, saveQuery } = photoSlice.actions;

export default photoSlice.reducer;
