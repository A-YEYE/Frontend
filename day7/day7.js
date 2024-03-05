const text = [
    'A barking dog never bites',
    'A big fish in a small pond',
    'No pain No gain', 
    'A good medicine tastes bitter',
    'It never rains but it pours',
    'A bad workman blames his tools',
    'The more, the better',
    'Walls have ears',
    'Do not count your chickens before they hatch',
    'A drowning man will catch at a straw',
    'You scratch my back and I’ll scratch yours',
    'Between a rock and a hard place',
    'Every dog has his day',
    'Every cloud has a silver lining',
    'Familiarity breeds contempt',
    'Fortune favors the brave'
]

const thirDiv = document.querySelector("#thirDiv");
const forDIv = document.querySelector("#forDIv");
const errSpan = document.querySelector("#errSpan");
const timeSpan = document.querySelector("#timeSpan");
const accuSpan = document.querySelector("#accuSpan");   
const cpmSpan = document.querySelector("#cpmSpan");   
const cpmDiv = document.querySelector("#cpmDiv");  
const wpmSpan = document.querySelector("#wpmSpan"); 
const wpmDiv = document.querySelector("#wpmDiv"); 
const input = document.querySelector("#input");
const origingTime = 30;
let time;
let textLength = text.length;   // 총 배열의 길이
let cnt = 0;        // 몇 번째 배열의 문장인지
let errNum = 0;     // 오타 수

forDIv.addEventListener("click", () => {    
    thirDiv.innerHTML = text[cnt];
    time = origingTime;
    input.value ='';
    input.readOnly = false;
    errSpan.innerHTML = 0;
    accuSpan.innerHTML = 0;
    typingCnt = 0;
    cpmDiv.style.display = "none"
    wpmDiv.style.display = "none"

    let interval = setInterval(function() {
        timeSpan.innerHTML = time-- + 'S';        
        
        if(time < 0){
            clearInterval(interval);
            input.value ='다시 시작';
            input.readOnly = true;
            let speed = Math.floor(typingCnt/(origingTime/60));
            cpmSpan.innerHTML = speed;
            cpmDiv.style.display = "block"
            wpmSpan.innerHTML = parseInt(speed/5);
            wpmDiv.style.display = "block"
        }
      }, 1000);
});

let senLength = text[cnt].length; 
let currTyping = 0; // 현재 문장에서 몇번째 타이핑 중인가
let keydownCnt = input.value.length-1;  //
let typingCnt = 0; // 타이핑한 수
input.addEventListener("keyup", (e) => {
    if(time > 0){
        if(e.keyCode && e.keyCode == 13){
            thirDiv.innerHTML = text[cnt];
            cnt++;
            senLength = text[cnt].length; 
            currTyping = 0;
            input.value = '';
            input.focuse();
        }
        else if(e.keyCode === 8){   // 백스페이스
            currTyping--;
            return false;
        }
        else if(e.keyCode !== 16){  // shift키는 제외.(대문자)
            let lastChar = input.value.charAt(currTyping);        
            if(e.keyCode === 32){   // 공백(스페이스바) 입력
                lastChar = " ";
            }
            if(lastChar !== text[cnt][currTyping]){
                errNum++;
                errSpan.innerHTML = errNum;
            }
            let accu = Math.floor((text[cnt].length-errNum)/text[cnt].length*100);
            if (accu < 0 ) accu = 0;
            accuSpan.innerHTML = accu;
            currTyping++;
    
            if(input.value.length >= text[cnt].length){
                cnt++;
                thirDiv.innerHTML = text[cnt];
                
                senLength = text[cnt].length; 
                currTyping = 0;
                input.value = '';
            }
        }
        typingCnt++;
    }
    
});



