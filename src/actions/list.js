let nextItemId = 0;
export const addItem = (item) => {
    console.log('adding item: ', item);
    return {
        type: 'add',
        item: Object.assign({}, item, {id: nextItemId++})
    }
};

export const checkChanged = (item) => {
    console.log('change item check: ', item);
    return {
        type: 'changeCheck',
        item
    }
};
