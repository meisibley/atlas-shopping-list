import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", name: "Item 1", completed: false },
    { id: "2", name: "Item 2", completed: true },
  ],
};

export const listSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now().toString(),
        name: action.payload,
        completed: false,
      });
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

//Dont forget to export the actions
export const { addItem, toggleItem, clearCompleted } = listSlice.actions;

export default listSlice.reducer;
