function getAutocompleteOptions(m) {

    return Object.assign(m, {
        minChars: 2,
        triggerSelectOnValidInput: false
    });
};

export {
    getAutocompleteOptions
}