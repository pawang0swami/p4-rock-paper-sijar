let yous=0;
let coms=0;

let c21=document.querySelectorAll(".c2");
let msg=document.querySelector("#msg")
let you=document.querySelector("#you");
let com=document.querySelector("#com");
let body=document.querySelector("body")

const c24 =()=>{
    const o=["r","p","s"]
  const oo=  Math.floor(Math.random()*3)
   return o[oo]
}

const draw=()=>{
       msg.innerText="game is draw play again"
       msg.style.backgroundColor="#081b31"
    body.style.backgroundColor="#081b31"
    msg.innerText.style.color="white"
}

const win1=(win)=>{
      if(win){
        yous++
        you.innerText=yous
        msg.innerText="you win";
        msg.style.backgroundColor="green";
        body.style.backgroundColor="green"
      }else{
        coms++
        com.innerText=coms
        msg.innerText="you lose"
         msg.style.backgroundColor="red"
         body.style.backgroundColor="red"
      }
} 

const c23=(c22)=>{
    const c11=c24()
    console.log(c22)
    console.log(c11)
     if(c11==c22){
        draw()
     }else{
         let win=true;
         if (c22==="r"){
             win= c11==="s"?false:true;
         }else if(c22==="p"){
            win=c11==="r"?false:true;
         }else{
            win=c11==="p"?false:true;

         }
         win1(win)
     }
}

c21.forEach((c2)=>{
    c2.addEventListener("click",()=>{
        const c22=c2.getAttribute("id")
        c23(c22)
    })
})
