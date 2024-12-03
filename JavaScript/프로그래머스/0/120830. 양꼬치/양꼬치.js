function solution(n, k) {
    let answer = 0;
    const costLamb = n * 12000; // 양꼬치 가격
    const freeDrink = Math.floor(n / 10); // 서비스 음료수   
    const costDrink = (k - freeDrink) * 2000; // 음료수 가격
    
    answer = costLamb + costDrink // 총액
    
    return answer;
}