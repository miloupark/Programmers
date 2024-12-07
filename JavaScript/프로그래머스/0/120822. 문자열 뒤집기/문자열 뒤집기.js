function solution(my_string) {
    const words = my_string.split('').reverse().join('');
    // 문자열을 배열로 변환한 뒤, reverse로 뒤집고 다시 문자열로 변환
    return words;
}

// reverse() 메서드는 배열의 요소 순서를 반대로 뒤집는 메서드, 문자열에는 바로 적용할 수 없음. 그래서 문자열을 먼저 배열로 변환한 뒤 reverse()를 호출하고, 다시 문자열로 변환
// Array.prototype.reverse() O
// String.prototype.reverse() X

// reverse() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// split() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split

// join() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join