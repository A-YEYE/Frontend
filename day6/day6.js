const createBtn = document.querySelector("#createBtn");
const lengthInput = document.querySelector("#lengthInput").value;
let newPw = "/^";
// 옵저버 객체 생성
let child1 = document.querySelector("#number");
let child2 = document.querySelector("#small");
let child3 = document.querySelector("#capital");;
let child4 = document.querySelector("#symbols");

class check {
    constructor(){
        this.children = [child1, child2, child3, child4]; // 객체의 변화를 감지할 옵저버
    }

    subscribe(child){
        this.children.push(child);
    }

    notify(data){
        this.children.forEach(child => child(data));
    }
}

// 관찰 대상 객체 생성
const checkClass = new check();



function numRule(){    
    if (child1.checked) {
        newPw += "(?=.*[0-9])";
    }
}

function smallRule(){    
    if (child2.checked) {
        newPw += "(?=.*[a-z])";
    }
}

function capitalRule(){
    if (child3.checked) {
        newPw += "(?=.*[A-Z])";
    }
}

function symbolsRule(){    
    if (child4.checked) {
        newPw += "(?=.*[@!$&%])";
    }
}

checkClass.subscribe(numRule());
checkClass.subscribe(smallRule());
checkClass.subscribe(capitalRule());
checkClass.subscribe(symbolsRule());

createBtn.addEventListener("click", () => {
    newPw += ".{"+lengthInput+"}$/";
    console.log(newPw);
    checkClass.notify(newPw);
});