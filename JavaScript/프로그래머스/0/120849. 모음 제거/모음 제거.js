function solution(my_string) {
    return my_string.replace(/[aeiou]/ig, '')
}

// str.replace(/AB/ig, '');
// 대소문자 구분도 하지 않고, 문자열 전체에서 지정한 문자를 삭제함
// 정규식 뒤에 들어가는 플래그는 'ig'와 같이 여러 개를 한꺼번에 지정할 수 있음 

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace