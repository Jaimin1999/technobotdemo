import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        next: (state, action) => {

            if (state.count > 10) {
                state.count = 0;

            } else {
                state.count = state.count + 1;

            }

        },
        prev: (state, action) => {

            if (state.count < 1) {
                state.count = 11;
            } else {
                state.count = state.count - 1;
            }

        },
    }
})


export const { next, prev } = CounterSlice.actions;

export default CounterSlice.reducer;