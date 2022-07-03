import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import Receipt from './receipt.json'
import update from 'immutability-helper'


const counterSlice = createSlice({
    name: 'order',
    initialState:{ order: 0, basketList: []},
    reducers: {
        increment(state, action) {
            //Receipt.basket.push(action.payload)
            
            state.order += 1;
            state.basketList.push(action.payload)
        },
        decrement (state, action) {
            for (var i = 0; i < state.basketList.length; i++){
                if (state.basketList[i].id === action.payload){
                    state.basketList.splice(i, i)
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