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
            return {
                ...state,
                checked: action.payload
            }
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
// 이름, 나이, 문의사항
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

// 이벤트 광고 동의 확인
let event = createSlice({
    name: 'evnet',
    initialState: {},
    reducers: {
        eventState(state, action) {
            return {
                ...state,
                event: action.payload
            }
        }
    }
})

export let { addState } = address.actions;
export let { changeState } = checked.actions;
export let { dateState } = date.actions;
export let { serviceState } = service.actions;
export let { eventState } = event.actions;

export default configureStore({
    reducer: {
        checked: checked.reducer,
        address: address.reducer,
        date: date.reducer,
        service: service.reducer,
        event: event.reducer,
    }
}) 