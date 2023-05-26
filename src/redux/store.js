import { configureStore, createSlice } from '@reduxjs/toolkit';

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
                add: action.payload,
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
    name: 'event',
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

// 로스트볼 수거량
let collect = createSlice({
    name: 'collect',
    initialState: {},
    reducers: {
        collectState(state, action) {
            return {
                ...state,
                collect: action.payload
            }
        }
    }
})

// DB에서 name과 phone 소팅해서 받은 값
let dbData = createSlice({
    name: 'dbData',
    initialState: {},
    reducers: {
        dbState(state, action) {
            return {
                ...state,
                dbData: action.payload
            }
        }
    }
})
//현재시간

let time = createSlice({
    name: 'time',
    initialState: {},
    reducers: {
        timeState(state, action) {
            return {
                ...state,
                time : action.payload
            }
        }
    }
})

export let { addState } = address.actions;
export let { changeState } = checked.actions;
export let { dateState } = date.actions;
export let { serviceState } = service.actions;
export let { eventState } = event.actions;
export let { collectState } = collect.actions;
export let { dbState } = dbData.actions;
export let { timeState } = time.actions;

export default configureStore({
    reducer: {
        checked: checked.reducer,
        address: address.reducer,
        date: date.reducer,
        service: service.reducer,
        event: event.reducer,
        collect: collect.reducer,
        dbData: dbData.reducer,
        time : time.reducer,
    }
}) 