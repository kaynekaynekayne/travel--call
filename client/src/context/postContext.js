import { createContext, useReducer } from "react";

export const PostContext=createContext();

export const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_POST':
            return {posts:[action.payload, ...state.posts]}
        default:
            return state;
    }
};

export const PostContextProvider=({children})=>{

    const [state, dispatch]=useReducer(reducer, {posts:null});

    return(
        <PostContext.Provider value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}