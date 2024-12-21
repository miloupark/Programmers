function solution(my_string, n) {
    const repeat = my_string.split('').map(letter => letter.repeat(n)).join('');
    
    return repeat;
}

// split() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split

// map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// join() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join