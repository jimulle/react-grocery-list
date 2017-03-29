export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, Object.assign({}, payload.item, { purchased: false })];
        case 'changeCheck':
            return state.map((item) => {
                if (item.name === payload.item.name) {
                    return Object.assign({}, item, { purchased: !item.purchased });
                }
                return item;
            })
        default:
            return state;
    }
};
