cpu_arr=["rock","paper","scissors"];
const winningScore=5;
let userpts;
let cpupts;
let index;
let cpuip;
let result;
function begin(){
    document.getElementById("btnbox").classList.add("fadeIn");
    document.getElementById("btnbox").style.visibility="visible";
    

    document.getElementById("start").classList.add("fadeOut");
    setTimeout(function(){
        document.getElementById("start").style.visibility="hidden";
    },501);
    
    document.getElementById("score").classList.add("fadeIn");
    setTimeout(
        function(){
            document.getElementById("score").style.visibility="visible";
        },10
    )
    

    document.getElementById("retry").style.visibility="hidden";

    document.getElementById("out").textContent="Achieve 5 points to claim the win.";
    document.getElementById("cpuimg").src="/asset/rockcpu.png";
    document.getElementById("userimg").src="/asset/rockplayer.png";
    userpts=0;
    cpupts=0;
    document.getElementById("userscore").textContent=userpts;
    document.getElementById("cpuscore").textContent=cpupts;

    setTimeout(remove,501);
}
function remove(){
    document.getElementById("btnbox").classList.remove("fadeIn");
    document.getElementById("start").classList.remove("fadeOut");
    document.getElementById("score").classList.remove("fadeIn");
}



function play(val){
    if(val=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        document.getElementById("userimg").src="/asset/rockplayer.png";
        setTimeout(rock,1050);
        document.getElementById("userimg").classList.add("userimg");
        document.getElementById("cpuimg").classList.add("cpuimg");
    }
    else if(val=="paper"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        document.getElementById("userimg").src="/asset/rockplayer.png";
        setTimeout(paper,1050);
        document.getElementById("userimg").classList.add("userimg");
        document.getElementById("cpuimg").classList.add("cpuimg");
    }
    else if(val=="scissors"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        document.getElementById("userimg").src="/asset/rockplayer.png";
        setTimeout(scissors,1050);
        document.getElementById("userimg").classList.add("userimg");
        document.getElementById("cpuimg").classList.add("cpuimg");
    }
}

function rock(){
    document.getElementById("userimg").src="/asset/rockplayer.png"
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="It's a Tie!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="CPU scores!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="User scores!";
        document.getElementById("out").textContent=`${result}`;
        userpts+=1;
        updateScore(userpts,cpupts);
    }
    document.getElementById("userimg").classList.remove("userimg");
    document.getElementById("cpuimg").classList.remove("cpuimg");
}

function paper(){
    document.getElementById("userimg").src="/asset/paperplayer.png";
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="User scores!"
        document.getElementById("out").textContent=`${result}`;
        userpts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="It's a Tie!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
        
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="CPU scores!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
    document.getElementById("userimg").classList.remove("userimg");
    document.getElementById("cpuimg").classList.remove("cpuimg");
}

function scissors(){
    document.getElementById("userimg").src="/asset/scissorplayer.png"
    index=Math.floor(Math.random()*(3-0))+0;
    console.log(index)
    cpuip=cpu_arr[index];
    if(cpuip=="rock"){
        document.getElementById("cpuimg").src="/asset/rockcpu.png";
        result="CPU scores!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=1;
        updateScore(userpts,cpupts);
    }
    else if(cpuip=="paper"){
        document.getElementById("cpuimg").src="/asset/papercpu.png";
        result="User scores!"
        document.getElementById("out").textContent=`${result}`;
        userpts+=1;
        updateScore(userpts,cpupts);
        
    }
    else if(cpuip=="scissors"){
        document.getElementById("cpuimg").src="/asset/scissorcpu.png";
        result="It's a Tie!";
        document.getElementById("out").textContent=`${result}`;
        cpupts+=0;
        userpts+=0;
        updateScore(userpts,cpupts);
    }
    document.getElementById("userimg").classList.remove("userimg");
    document.getElementById("cpuimg").classList.remove("cpuimg");
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
    document.getElementById("retry").classList.add("fadeIn");
    document.getElementById("retry").style.visibility="visible";

    document.getElementById("btnbox").classList.add("fadeOut");
    setTimeout(function(){
        document.getElementById("btnbox").style.visibility="hidden";
    },501);
    
    document.getElementById("out").textContent=`${player} wins the game!`;

    setTimeout(function(){
        document.getElementById("retry").classList.remove("fadeIn");
        document.getElementById("btnbox").classList.remove("fadeOut");
    },501)
}

function retry(){
    document.getElementById("retry").classList.add("fadeOut");
    setTimeout(function(){
        document.getElementById("retry").style.visibility="hidden";
    },501);
    document.getElementById("score").classList.add("fadeOut");
    setTimeout(function(){
        document.getElementById("score").style.visibility="hidden";
    },501);
    setTimeout(removeretry,501);
    setTimeout(begin,502);
}

function removeretry(){
    document.getElementById("retry").classList.remove("fadeOut");
    document.getElementById("score").classList.remove("fadeOut");
}