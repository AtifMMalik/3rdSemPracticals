const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    
    e.preventDefault()

    let firstNum = e.target[0].value
    let secondNum = e.target[1].value
    let thirdNum = e.target[2].value

    findGreatest_approach1(firstNum, secondNum, thirdNum);
    // findGreatest_approach2(firstNum, secondNum, thirdNum);

})

const findGreatest_approach1 = (firstNum, secondNum, thirdNum) =>{
    if(!firstNum || !secondNum || !thirdNum){
        alert("Enter all three values");
        return
    }

    // CASES = 10
    // [a][a][a] => all same
    // [a][a][b] => first 2 same ===> a>b, a<b
    // [a][b][a] => first & last same ===> a>b, a<b
    // [b][a][a] => last 2 same ===> a>b, a<b 
    // [a][b][c] => all different ===> a>bc, b>ac, c>ab

    (firstNum === secondNum && secondNum === thirdNum) // [a][a][a]
    ?
        alert("All numbers are same!")
    : 
    (firstNum === secondNum && firstNum > thirdNum) // [a][a][b] , a>b
    ?
        alert(firstNum+" is greatest. Value of first two inputs which is same.")
    :
    (firstNum === secondNum && firstNum < thirdNum) // [a][a][b] , a>b
    ?
        alert(thirdNum+" is greatest.")
    :
    (firstNum === thirdNum && firstNum < secondNum) // [a][b][a] , a<b
    ?
        alert(secondNum+" is greatest.")
    :
    (firstNum === thirdNum && firstNum > secondNum) // [a][b][a] , a<b
    ?
        alert(firstNum+" is greatest. Value of first and last inputs which is same")
    :
    (secondNum === thirdNum && firstNum > secondNum) // [b][a][a] , a<b
    ?
        alert(firstNum+" is greatest.")
    :
    (secondNum === thirdNum && firstNum < secondNum) // [b][a][a] , a>b
    ?
        alert(secondNum+" is greatest. Value of last two inputs which is same.")
    :
    (firstNum > secondNum && firstNum > thirdNum) // a>bc
    ?
        alert(firstNum+" is greatest.")
    :
    (secondNum > firstNum && secondNum > thirdNum) // b>ac
    ?
        alert(secondNum+" is greatest.")
    :
    (thirdNum > firstNum && thirdNum > secondNum) // c>ab
    ?
        alert(thirdNum+" is greatest.")
    :
        alert("Ummm! thats a strange edge case.")
}

const findGreatest_approach2 = (firstNum, secondNum, thirdNum) =>{

    let greatest

    firstNum > secondNum ?
        (firstNum > thirdNum ? greatest = firstNum : greatest = thirdNum)
    :
        (secondNum > thirdNum ? greatest = secondNum : greatest = thirdNum)   
}