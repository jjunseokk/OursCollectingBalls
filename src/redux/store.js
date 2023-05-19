import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice({
//     name : 'state이름 ~',
//     initialState : '값'
// })

// 이용약관
let checked = createSlice({
    name: 'checked',
    initialState: {},
    reducers: {
        changeState(state, action) {
            return { checked: action.payload }
        }
    }
})

// 예약할 때 주소 상태값 저장
let address = createSlice({
    name: 'address',
    initialState: {},
    reducers: {
        addState(state, action) {
            return {
                ...state,
                add: action.payload
            }
        }
    }
})

// 예약할 때 날짜 상태값 저장
let date = createSlice({
    name: 'date',
    initialState: {},
    reducers: {
        dateState(state, action) {
            return {
                ...state,
                date: action.payload
            }
        }
    }
})

let service = createSlice({
    name: 'service',
    initialState: {},
    reducers: {
        serviceState(state, action) {
            return {
                ...state,
                service: action.payload
            }
        }
    }
})


export let { addState } = address.actions;
export let { changeState } = checked.actions;
export let { dateState } = date.actions;
export let { serviceState } = service.actions;

export default configureStore({
    reducer: {
        checked: checked.reducer,
        address: address.reducer,
        date: date.reducer,
        service: service.reducer,
    }
}) 