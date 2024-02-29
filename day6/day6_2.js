const createBtn = document.querySelector("#createBtn");
const numArr = [0,1,2,3,4,5,6,7,8,9];
const smallArr = ['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','u','v','w','x','y','z'];
const capitalArr = ['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const symbolsArr = ['@','!','$','&','%'];
let checkArr = [];

let pwRule = "^";
let newPw ='';

let number = document.querySelector("#number");
let small = document.querySelector("#small");
let capital = document.querySelector("#capital");;
let symbols = document.querySelector("#symbols");

let whileCheck = true;

createBtn.addEventListener("click", () => {
    let lengthInput = document.querySelector("#lengthInput").value;
    if(document.querySelectorAll(".chk:checked").length == 0){
        alert("체크 박스를 선택해 주세요.");
        return;
    }
    if(lengthInput < 5 || lengthInput > 70){
        alert("비밀번호의 길이는 5 이상 70 이하의 수를 넣어주세요.");
        return;
    }

    if (number.checked) {
        pwRule += "(?=.*[0-9])";
        checkArr = checkArr.concat(numArr);
    }
    if (small.checked) {
        pwRule += "(?=.*[a-z])";
        checkArr = checkArr.concat(smallArr);
    }
    if (capital.checked) {
        pwRule += "(?=.*[A-Z])";
        checkArr = checkArr.concat(capitalArr);
    }
    if (symbols.checked) {
        pwRule += "(?=.*[@!$&%])";
        checkArr = checkArr.concat(symbolsArr);
    }
    
    pwRule += ".{"+lengthInput+",}$";
    
    while(whileCheck){
        for(let i=0; i<lengthInput; i++){
            let randNum = Math.floor(Math.random()*checkArr.length);
            newPw += checkArr[randNum];
        }

        let regex = new RegExp(pwRule);
        if(regex.test(newPw)){
            whileCheck = false;
        }
        else{
            newPw = '';
        }
    }      
    
    document.querySelector(".copyDiv").innerHTML = newPw;
    pwRule = "^";
    newPw = '';
    whileCheck = true;
    checkArr = [];
});
