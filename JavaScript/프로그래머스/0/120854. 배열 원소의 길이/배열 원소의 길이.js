function solution(strlist) {
    const answer = [];
    
    for (let i = 0; i < strlist.length; i++ ) {
        answer.push(strlist[i].length);
    }
    
    return answer;  
}

// function solution(strlist) {
//     return strlist.map(el => el.length)
// }

// * map은 배열 strlist의 각 요소의 길이를 담은 새로운 배열을 반환 
