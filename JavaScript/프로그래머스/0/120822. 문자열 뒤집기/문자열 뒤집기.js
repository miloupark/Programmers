function solution(my_string) {
    const words = my_string.split('').reverse().join('');
    // 문자열을 배열로 변환한 뒤, reverse로 뒤집고 다시 문자열로 변환
    return words;
}

// reverse() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// split() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split

// join() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join