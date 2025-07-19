import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// createAsyncThunk 

// {type: 'coin/fetch/pending', payload: undefined}
// {type: 'coin/fetch/fullfield', payload : data}
// {type: 'coin/fetch/rejected', payload : "error_message"}



const FetchData = createAsyncThunk(
    // Action : type : payload 
    'coin/fetch',
    async (args, thunkAPI) => {
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = response.json();
            return data;

        } catch(error){
            return rejectWithvalue(error.message);
        }
    }
)

const slicer1 = createSlice({
    name : "slice1",
    initialState : {data:[], loading:false, error:null},
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(FetchData.fulfilled, (state,action)=>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(FetchData.rejected, (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
    
})

//  type: 'slice1/Increment'
//  type: 'slice/Decrement'

//  type: "Coin/Fetch/pending"
//  type: "Coin/Fetch/fulfilled"
//  type: "Coin/Fetch/rejected"

export default slicer1.reducer;
export{FetchData};