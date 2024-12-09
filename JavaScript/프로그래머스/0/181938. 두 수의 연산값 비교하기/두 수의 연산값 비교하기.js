function solution(a, b) {
    const result1 = parseInt(a.toString() + b.toString());
     // 정수를 문자열로 변환 후 붙이고 다시 숫자로 변환
    const result2 = 2 * a * b
    
    if (result1 >= result2) {
        return result1;
    } else {
        return result2;
    }
}  
  
// MDN > toString() 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

// MDN > parseInt()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt