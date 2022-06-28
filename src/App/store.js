import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoReducer";

export const store = configureStore({
    reducer: todoReducer
    
})