import { combineReducers } from "@reduxjs/toolkit";

import photoSlice from "./photoSlice";

export const rootReducer = combineReducers({ photoSlice });
