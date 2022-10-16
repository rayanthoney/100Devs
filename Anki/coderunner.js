function reverseString(text){
    let result = "";

    for(let char of text){
        result = char + result
    }

    return result;
}