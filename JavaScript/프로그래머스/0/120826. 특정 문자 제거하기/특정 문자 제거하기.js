function solution(my_string, letter) {
  const answer = my_string.replaceAll(letter, ''); // letter와 일치하는 모든 부분을 빈 문자열로 대체

  return answer;
}


// replace 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// replaceAll
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

// *오류
// replace(): 문자열 내에서 첫 번째로 발견된 일치하는 부분만 대체
// 여러 번 나타나는 letter를 모두 제거하려면 반복문 or 정규표현식 활용해야함