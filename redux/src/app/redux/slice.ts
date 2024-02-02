import { createSlice, nanoid, current, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const storedData:any = localStorage.getItem("data");
const parsedData:any = storedData ? JSON.parse(storedData) : [];

const initialState = {
  fetchData:[],
  user: parsedData,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  return response.json();
})

export const Slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state: any, action: PayloadAction<string>) => {
      const data = {
        id: nanoid(),
        name: action.payload
      }
      state.user.push(data);
      const users = JSON.stringify(current(state.user));
      localStorage.setItem("data", users)
    },
    deleteUser: (state: any, action: PayloadAction<string>) => {
      const data = state.user.filter((user: any) => user.id != action.payload)
      state.user = data;
      const users = JSON.stringify(data);
      localStorage.setItem("data", users)
    }
  },
  extraReducers: (build) => {
    build.addCase(fetchData.fulfilled, (state: any, action:PayloadAction<string>) => {

      state.isloading = false;
      state.fetchData = action.payload
    })
  }
})

export const { addUser, deleteUser } = Slice.actions


export default Slice.reducer;