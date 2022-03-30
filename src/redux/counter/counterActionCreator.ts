
export const COUNTER_ADD="counter_add" // counter add action
export const COUNTER_SUB="counter_sub" //counter sub action

interface CounterAddActionType{
    type:typeof COUNTER_ADD
}

interface CounterSubActionType{
    type:typeof COUNTER_SUB
}

export type CounterActionType=CounterAddActionType|CounterSubActionType;

export const counterAddActionCreator = ():CounterAddActionType=>{
    return {
        type:COUNTER_ADD
    }
}

export const counterSubActionCreator = ():CounterSubActionType=>{
    return {
        type:COUNTER_SUB
    }
}
