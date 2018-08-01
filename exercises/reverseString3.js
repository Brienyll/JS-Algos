function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return reversed + character;
    }, '');
}
reverse('hello!')
