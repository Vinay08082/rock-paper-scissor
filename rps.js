let choices=document.querySelectorAll(".choice")
let msg=document.querySelector(".msg")
let userno=document.querySelector("#userscore")
let comno=document.querySelector("#comscore")
let btn=document.querySelector(".btn");
let usercount=0;
let comcount=0;
const comidgen=()=>{
    let opti=["rock","paper","scissors"]
    let ramid=Math.floor(Math.random()*3);
    return opti[ramid];
}
const showwinner=(userwin,choiceid,comid)=>{
    if(userwin){
        usercount++;
        msg.innerText=`you win!! your ${choiceid} beats ${comid} `;
        userno.innerText=` ${usercount}`;
        msg.style.backgroundColor="green";
    }
    else{
        comcount++;
        msg.innerText=`you lose! computers ${comid} beats ${choiceid}`;
        comno.innerText=` ${comcount}`;
        msg.style.backgroundColor="red";
    }
}
const draw=()=>{
    msg.innerText="DRAWN THE MATCH";
    msg.style.backgroundColor="violet";
}

const gameplay =(choiceid)=>{
    const comid=comidgen();
    if(choiceid===comid){
        draw();
    }
    else{
        let userwin=true;
        if(choiceid==="rock"){
            userwin=comid==="paper"?false:true;
        }
        else if(choiceid==="paper"){
            userwin=comid==="rock"?true:false;
        }
        else{
            userwin=comid==="paper"?true:false;
        }
        showwinner(userwin,choiceid,comid);
    }
}



choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
    let choiceid=choice.getAttribute('id');
        // console.log(choiceid);
        gameplay(choiceid);
    })   
});
btn.addEventListener("click",()=>{
    usercount=0;
    comcount=0;
    userno.innerText=` ${usercount}`;
    comno.innerText=` ${comcount}`;
    msg.innerText="Your Choice";
    msg.style.backgroundColor="black";
})
