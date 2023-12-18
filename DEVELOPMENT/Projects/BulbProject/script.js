let bulb = document.querySelector("#bulb")
let btn = document.querySelector("#btn")
let flag=1
btn.addEventListener("click",()=>
{
    if(flag==0)
    {
        bulb.style.backgroundColor="black"
        flag=1
        btn.innerHTML="ON"
    }
    else
    {
        bulb.style.backgroundColor="red"
        flag=0
        btn.innerHTML="OFF"
    }

    
})