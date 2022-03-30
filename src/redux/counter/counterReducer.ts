import { CounterActionType, COUNTER_ADD, COUNTER_SUB } from "./counterActionCreator"

const defaultState = {
    count:0
}

export default (state=defaultState,action:CounterActionType)=>{
    switch(action.type){
        case COUNTER_ADD:
            return {...state,count:state.count+1}
        case COUNTER_SUB:
            return {...state,count:state.count-1}
        default:
            return state
    }
}