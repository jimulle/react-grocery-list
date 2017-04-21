let nextItemId = 0;
export const addItem = (item) => {
    console.log('adding item: ', item);
    return {
        type: 'add',
        item: Object.assign({}, item, {id: nextItemId++})
    }
};

export const check = (item) => {
    console.log('change item check: ', item);
    return {
        type: 'check',
        item
    }
};

export const clear = () => {
    console.log('clear checked items');
    return {
        type: 'clear',
        item: null
    }
};

export const removeChecked = () => {
    console.log('remove checked items');
    return {
        type: 'remove',
        item: null
    }
};
