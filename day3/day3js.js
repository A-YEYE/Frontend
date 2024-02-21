const scissorsBtn = document.querySelector('#scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const resetBtn = document.querySelector('#resetBtn');
let rpsValue;

scissorsBtn.addEventListener('click', (event) => {
    rpsValue = 0;
    rps(rpsValue);
});

rockBtn.addEventListener('click', (event) => {
    rpsValue = 1;
    rps(rpsValue);
}); 

paperBtn.addEventListener('click', (event) => {    
    rpsValue = 2;
    rps(rpsValue);
});

const rpsArr = ['가위','바위','보'];
let winner;
function rps(rpsValue){    
    const rand = Math.floor(Math.random()*2);
    

    if(rpsValue === rand){
        document.querySelector('#result').innerHTML = '무승부';
    }
    else if(rpsValue === 0){
        if(rand === 1){
            winner = "computer";
        }
        else if(rand === 2){
            winner = "player";
        }
    }
    else if(rpsValue === 1){
        if(rand === 0){
            winner = "player";
            
        }
        else if(rand === 2){
            winner = "computer";
        }
    }
    else if(rpsValue === 2){
        if(rand === 0){
            winner = "computer";
        }
        else if(rand === 1){
            winner = "player";
        }
    }

    let pWinValue = document.querySelector('#pWinValue').value;
    let cWinValue = document.querySelector('#cWinValue').value;
    let total = document.querySelector('#total').value;
    if(rpsValue != rand && winner === "computer"){
        document.querySelector('#result').innerHTML = '컴퓨터 승리';
        cWinValue++;
        document.querySelector('#cWinValue').value = cWinValue;
        document.querySelector('#cWin').innerHTML = cWinValue;
    }
    else if(rpsValue != rand && winner === "player"){
        document.querySelector('#result').innerHTML = '플레이어 승리';
        pWinValue++;
        document.querySelector('#pWinValue').value = pWinValue;
        document.querySelector('#pWin').innerHTML = pWinValue;
    }
    document.querySelector('#player').innerHTML = rpsArr[rpsValue];
    document.querySelector('#computer').innerHTML = rpsArr[rand];
    total--;
    if(total === 0){
        document.querySelector('#totalCnt').innerHTML = '게임종료!';
        if(pWinValue > cWinValue){
            document.querySelector('#result').innerHTML = '플레이어 승리입니다!';
            document.querySelector('#result').style.color = 'blue';
        }
        else if(pWinValue < cWinValue){
            document.querySelector('#result').innerHTML = '컴퓨터 승리입니다!';
            document.querySelector('#result').style.color = 'red';
        }
        else if(pWinValue === cWinValue){
            document.querySelector('#result').innerHTML = '무승부입니다!';
            document.querySelector('#result').style.color = 'green';
        }
        document.querySelector('#result').style.fontSize = '40px';
        document.querySelector('#totalCnt').style.fontSize = '40px';
        document.querySelector('.choiceDiv').style.display = 'none';
        document.querySelector('.buttonDiv').style.display = 'none';
        document.querySelector('.reset').style.display = 'block';
        document.querySelector('#totalCnt').style.padding = '30px 0';
        
    }else{
        document.querySelector('#total').value = total;
        document.querySelector('#totalCnt').innerHTML = "남은 횟수 : " + total;
    }
}

resetBtn.addEventListener('click', (event) => {
    document.querySelector('.choiceDiv').style.display = 'block';
        document.querySelector('.buttonDiv').style.display = 'block';
        document.querySelector('.reset').style.display = 'none';
        document.querySelector('#total').value = 10;
        document.querySelector('#pWinValue').value = 0;
        document.querySelector('#cWinValue').value = 0;
        document.querySelector('#pWin').innerHTML = 0;
        document.querySelector('#cWin').innerHTML = 0;
        document.querySelector('#totalCnt').innerHTML = '남은 횟수 : 10';
        document.querySelector('#totalCnt').style.padding = '0 0';
        document.querySelector('#totalCnt').style.fontSize = '20px';
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#result').style.color = 'white';
        document.querySelector('#result').style.fontSize = '20px';
});