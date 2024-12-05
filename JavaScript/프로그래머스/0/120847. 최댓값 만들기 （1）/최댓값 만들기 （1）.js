function solution(numbers) {
    numbers.sort(function (a, b) {
        return b - a;
    });
    
    return numbers[0] * numbers[1];
}


// 시도해본 풀이 오류!
// function solution(numbers) {
//   const max1 = Math.max(...numbers); // 배열에서 최댓값
//   numbers = numbers.filter(num => num !== max1); // max1 제외한 다른 값들만 남긴 배열을 다시 numbers에 할당
//   const max2 = Math.max(...numbers); // 필터링된 배열에서 최댓값 
    
//   return max1 * max2;
// }

// 시도해본 풀이 수정!
function solution(numbers) {
  const max1 = Math.max(...numbers); // 배열에서 첫번째 최댓값
  const idx = numbers.indexOf(max1) // max1의 인덱스 찾기
  numbers[idx] = 0; // 첫번째 최댓값 제거를 위해 해당 인덱스 값 0으로 설정
  const max2 = Math.max(...numbers); // 두번째 최댓값
    
  return max1 * max2;
}


// Math.max 최댓값
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// filter() 메서드로 배열에서 최댓값 삭제
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// sort 배열을 내림차순으로 정렬한 뒤 최댓값들을 곱해주는 방법
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// reduce 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce