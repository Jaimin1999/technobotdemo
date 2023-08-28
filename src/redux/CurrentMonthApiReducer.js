import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchMonthApi = createAsyncThunk("fetchMonthApi", async ({ month }) => {

    const response = await fetch(`https://v1.igpods.com/api/social_calendar/get/${month}`);
    return response.json();
})

const CurrentMonthApiReducer = createSlice({
    name: "MonthApi",
    initialState: {
        isLoading: false,
        data: [],
        isErr: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMonthApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchMonthApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchMonthApi.rejected, (state, action) => {
            state.isLoading = false;
            state.isErr = true;
            console.log("Error", action.payload);
        })
    }
})

export default CurrentMonthApiReducer.reducer;