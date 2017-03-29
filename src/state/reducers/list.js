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
            })
        default:
            return state;
    }
};
