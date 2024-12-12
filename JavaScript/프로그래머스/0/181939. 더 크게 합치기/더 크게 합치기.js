function solution(a, b) {
    const sum1 = parseInt(a.toString() + b.toString());
    const sum2 = parseInt(b.toString() + a.toString());
    
    if (sum1 > sum2) {
        return sum1;
    } else if(sum1 < sum2) {
        return sum2;
    } else {
        return sum1
    }
}