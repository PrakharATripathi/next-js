import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'




const initialState = {
    data: [],
}
export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    return response.json();
})

export const fetchSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchData.fulfilled, (state: any, action: PayloadAction<string>) => {
            state.isloading = false;
            state.data = action.payload
        })
    }
})

export const { } = fetchSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.userData.value

export default fetchSlice.reducer