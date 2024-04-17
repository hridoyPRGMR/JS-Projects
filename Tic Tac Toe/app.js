let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-game');
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector('#msg')

let turn0 = true;//playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

let cnt=0;

const resetGame=()=>{
    turn0=true;
    enabledBox();
    cnt=0;
    msgContainer.classList.add("hide");
}

const draw=()=>{
    msg.innerText='Oh ho! match is draw.';
    msgContainer.classList.remove("hide");
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            box.style.color="red";
            turn0=false;
            if(checkWinner()){
                showWinner("O");
            }
            else{
                cnt++;
            }
        }
        else{
            box.innerText="X";
            box.style.color="#b041b0";
            turn0=true;
            if(checkWinner()){
                showWinner("X");
            }
            else{
                cnt++;
            }
        }
        if(cnt>=9){
            draw();
            cnt=0;
        }
        box.disabled=true;
    })
})



const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText='Congratulations, winner is '+winner;
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val==pos3Val){
                // console.log("winner->",pos1Val);
                // showWinner(pos1Val);
                return true;
            }
        }

    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);