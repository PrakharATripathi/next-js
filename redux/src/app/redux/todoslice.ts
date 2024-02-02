import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const Slice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state:any,action) =>{
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.todos.push(data)
        }
    }
})

export const  {addTodo} = Slice.actions;
export default Slice.reducer;