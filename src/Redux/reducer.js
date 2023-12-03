import { ADD_RESULT, add_result } from "./action";

// history state...............
const initialState = [];

const Reducer = (state=initialState, action) => {
   if(action.type == ADD_RESULT){
        return [...state, action.payload]
   }
   else{
    return state;
   }
}

export default Reducer;
