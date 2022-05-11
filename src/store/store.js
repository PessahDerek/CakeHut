import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import Receipt from './receipt.json'

const counterSlice = createSlice({
    name: 'order',
    initialState:{ order: 0},
    reducers: {
        increment(state, action) {
            Receipt.basket.push(action.payload)
            state.order += 1;
        },
        decrement (state, action) {
            for (var i = 0; i < Receipt.basket.length; i++){
                if (Receipt.basket[i].id === action.payload){
                    Receipt.basket.splice(i, i)
                    break;
                }
            }
            state.order -= 1
        },
        addBy(state, action){
            state.counter += action.payload
        }
    }
})

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;