function solution(num_list) {
    let even = 0; // 짝수의 개수
    let odd = 0; // 홀수의 개수
    
    num_list.forEach(num => {
        if (num % 2 == 0) {
           return even++;
        } else {
           return odd++;
        }
    })
    
    return [even, odd];
}

// forEach() 메서드: 각 배열 요소에 대해 제공된 함수를 한 번씩 실행
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
