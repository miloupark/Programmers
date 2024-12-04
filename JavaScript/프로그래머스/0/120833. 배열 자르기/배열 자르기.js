function solution(numbers, num1, num2) {
    
    return numbers.slice(num1, num2 + 1);
}

// slice() 메서드는 끝 인덱스는 포함하지 않기 때문에 + 1로 마지막 인덱스 포함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice