// state này là state của thằng redux.
// action.
// reducer chỉ là 1 thằng công nhân và trả về 1 cái 'root' state.

// khởi tạo app lên là có giá trị của thằng state.
const initState = {
    users: [
        { id: 1, name: 'Khuong' },
        { id: 2, name: 'Minh' }
    ]
}

const rootReducer = (state = initState, action) => {

    return state;
}


export default rootReducer;