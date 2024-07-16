cpu_arr=["rock","paper","scissors"];
const winningScore=5;
let userpts;
let cpupts;
let index;
let cpuip;
let result;
function begin(){
    document.getElementById("btnbox").style.visibility="visible";
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("score").style.visibility="visible";
    document.getElementById("retry").style.visibility="hidden";
    document.getElementById("result").textContent="";
    document.getElementById("cpuimg").src="/asset/papercpu.png";
    document.getElementById("userimg").src="/asset/paperplayer.png";
    userpts=0;
    cpupts=0;
    document.getElementById("userscore").textContent=userpts;
    document.getElementById("cpuscore").textContent=cpupts;
}


setTimeout(rock(),3000)

function rock(){
    document.getElementById("userimg").src="/asset/rockplayer.png"
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="It's a Tie!";
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="CPU Wins!";
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="User Wins!"
        userpts+=1;
        updateScore(userpts,cpupts);
    }

}

function paper(){
    document.getElementById("userimg").src="/asset/paperplayer.png";
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="User Wins!"
        userpts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="It's a Tie!";
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
        
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="CPU Wins!";
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
}

function scissors(){
    document.getElementById("userimg").src="/asset/scissorplayer.png"
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="CPU Wins!";
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="User Wins!"
        userpts+=1;
        updateScore(userpts,cpupts);
        
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="It's a Tie!";
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
    }

}

function updateScore(user,cpu){
    document.getElementById("userscore").textContent=user;
    document.getElementById("cpuscore").textContent=cpu;
    if(user==5){
        console.log("user wins");
        end("User");
    }
    else if(cpu==5){
        console.log("cpu wins")
        end("CPU");
    }
}

function end(player){
    document.getElementById("retry").style.visibility="visible";
    document.getElementById("btnbox").style.visibility="hidden";
    document.getElementById("result").textContent=`${player} Wins!`;
}

function retry(){
    begin();
}