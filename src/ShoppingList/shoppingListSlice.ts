import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Another Item", completed: false },
    { id: "2", name: "Another Item 2", completed: true },
];

export const listSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        name: action.payload,
        completed: false,
      })
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
    clearCompleted: (state) => {
      for(let i = 0; i < state.length; i++) {
        if (state[i].completed) {
          state.splice(i, 1);
        }
      }
    }
  },
})

export const { addItem, toggleCompleted, clearCompleted } = listSlice.actions;

export default listSlice.reducer;
