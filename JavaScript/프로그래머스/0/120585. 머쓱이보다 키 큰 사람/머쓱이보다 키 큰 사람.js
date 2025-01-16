function solution(array, height) {
    let result = 0;
    
    array.forEach((el) => {
        if(el > height) {
            result++;
        }
    })

    return result;
}