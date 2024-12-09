function solution(a, b) {
    let numbers = [a, b];
    
    if ((a + b) === (2 * a * b)) {
      return (a + b);
    } else {
        return numbers.join('');
    }
}