function reverse(str) {
    let reversed = '';

    // iterates every character and puts it infront of the string reversed
    for (let character of str) {
        reversed = character + reversed;
    }
    
    return reversed;
}
reverse(hello!);
