const aOne = document.querySelector('#aOne');
const aTwo = document.querySelector('#aTwo');
const answerInput = document.querySelector('.answerInput');

window.onload = function(){
    makeQ();
}

let a,b;
function makeQ(){
    console.log("come");
    a = Math.floor(Math.random()*10)+1;
    b = Math.floor(Math.random()*10)+1;

    document.querySelector("#qId").value = a + "+" + b;
    makeA();
}

function makeA(){
    const ansArr = [true, false];
    let c = Math.floor(Math.random()*2);
    let result = Math.floor(Math.random()*10+1) + Math.floor(Math.random()*10+1);
    // 1번 답이 정답
    if(ansArr[c]){
        aOne.value = a+b;        
        aOne.classList.add("T");
        if(result != a+b){
            aTwo.value = result;
            aTwo.classList.add("F");
        }        
    }
    else{
        aTwo.value = a+b;
        aTwo.classList.add("T");
        if(result != a+b){
            aOne.value = result;
            aOne.classList.add("F");
        }
    }
}

document.addEventListener('click', function(event) {    
    if(event.target.classList.contains("T")){
        document.querySelector(".mainDiv").style.backgroundColor = "green";
        document.querySelector(".resultInput").value = "Next";

        document.querySelector( '.T' ).style.backgroundColor = 'green';
        document.querySelector( '.F' ).style.backgroundColor = 'red';
        document.querySelector( '.qDiv' ).style.height = '250px';
        document.querySelector( '.resultDiv' ).style.display = 'block';    
    }
    else if(event.target.classList.contains("F")){
        document.querySelector(".mainDiv").style.backgroundColor = "red";
        document.querySelector(".resultInput").value = "Reset";

        document.querySelector( '.T' ).style.backgroundColor = 'green';
        document.querySelector( '.F' ).style.backgroundColor = 'red';
        document.querySelector( '.qDiv' ).style.height = '250px';
        document.querySelector( '.resultDiv' ).style.display = 'block';    
        
    }
    else if(event.target.classList.contains("resultInput")){
        document.querySelector(".mainDiv").style.backgroundColor = "lightGray";

        document.querySelectorAll( '.answerInput' )[0].style.backgroundColor = 'yellow';
        document.querySelectorAll( '.answerInput' )[1].style.backgroundColor = 'yellow';
        document.querySelector( '.resultDiv' ).style.display = 'none';   
        document.querySelector( '.qDiv' ).style.height = '150px';

        document.querySelector( '.T' ).classList.remove("T");
        document.querySelector( '.F' ).classList.remove("F");

        makeQ();
    }
})




