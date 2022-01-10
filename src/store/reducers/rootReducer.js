// state này là state của thằng redux.
// action.
// reducer chỉ là 1 thằng công nhân và trả về 1 cái 'root' state.

// khởi tạo app lên là có giá trị của thằng state.
const initState = {
    users: [
        { id: 1, name: 'Khuong' },
        { id: 2, name: 'Minh' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            return {
                // noteeeeee
                ...state, users: [...state.users, user]
            }

        default:
            return state;
    }
}


export default rootReducer;