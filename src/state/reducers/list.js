export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, Object.assign({}, payload.item, { purchased: false })];
        case 'check':
            return state.map((item) => {
                if (item.id === payload.item.id) {
                    return Object.assign({}, item, { purchased: !item.purchased });
                }
                return item;
            });
        case 'remove':
            return state.filter((item) => {
                return item.id !== payload.item.id;
            });
        case 'clear':
            return state.filter((item) => {
                return !item.purchased;
            });
        default:
            return state;
    }
};
