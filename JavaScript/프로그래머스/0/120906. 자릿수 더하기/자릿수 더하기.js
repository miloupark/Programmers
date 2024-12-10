function solution(n) {
    const num = n.toString().split(''); // 정수 문자열로 변환 후 각 자릿수를 배열로 변환
    const sum = num.reduce((acc, digit) => acc + Number(digit), 0); // 각 자릿수를 숫자로 변환 후 계산
    // reduce((누적 값, 순회 중인 배열 요소) => 누적값 + 숫자로 변환, 누적 값의 초기 상태
    
    return sum;
}

// MDN > reduce() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce