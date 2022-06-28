import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const add = createAction("add");
export const remove = createAction("remove");

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("add", (state, action) => {
      state.todos.unshift({
        text: action.payload,
        done: false,
      });
    })
    .addCase("remove", (state, action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    });
});

export default todoReducer;
