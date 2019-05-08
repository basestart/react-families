import {ADD1, ADD2} from './action'

const initialState = {
    count: 0,
    child1: 0,
    child2: 0
}

export default function reducer (state = initialState, action) {
    if(action.type === ADD1) {
        return {
            ...state,
            count: state.count + 1,
            child1: state.child1 + 1
        }
    } else if(action.type === ADD2) {
        return {
            ...state,
            count: state.count + 1,
            child2: state.child2 + 1
        }
    } else {
        return state
    }
}