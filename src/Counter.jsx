import React,{useReducer} from "react";

function reducer(state,action){
    switch (action.type){
        case 'PLUS':
            return state+1
        case 'MINUS':
            return state-1
        default:
            return state
    }
}

function Counter(){
    const [num,dispatch]=useReducer(reducer,0)

    const onPlus=()=>{
        dispatch({type:'PLUS'})
    }

    const onMinus=()=>{
        dispatch({type:'MINUS'})
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
        </div>
    )
}

export default Counter