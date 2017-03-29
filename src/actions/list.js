export const addItem = (item) => {
    console.log('adding item: ', item);
    return {
        type: 'add',
        item
    }
};

export const checkChanged = (item) => {
    console.log('change item check: ', item);
    return {
        type: 'changeCheck',
        item
    }
};
