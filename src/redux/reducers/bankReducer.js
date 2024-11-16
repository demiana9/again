import { dipost,withdrow } from "./bankactions";
 export const  bankReducer=(state=1000,action)=>
    {
    switch (action.type) {
        case dipost:
            return state-action.payload;
            case withdrow:
            return state+action.payload;
        default:
            return state;
    
          
    }}