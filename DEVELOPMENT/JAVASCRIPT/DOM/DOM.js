/* //! Four Pillers of DOM

 1 -> Selecting Element 
      
    * document.querySelector("Element ka naam / id / class")

    * documment.querySelectorAll("Saare elements Select ho jaenge")
    
    * document.getElementById("Seedha id likho "#" nahi lagana hai")
    
    * document.getElementsByClassName("Seedha class likho "." nahi lagana hai")
     

 2 -> Changing HTML

    * document.querySelector("lol").innerHTML = "<h1>wow</h1>" //! o/p -> wow 
    * document.querySelector("lol").textContent = "<h1>wow</h1>" //! o/p -> <h1>wow</h1>

 3 -> Changing style

    * document.querySelector("lol").Style.color ="red"

 4 -> Event Listener
    
    * document.querySelector("lol").addEventListener("click",function(){  console.log("we")    })

*/

// Example 

var a = document.querySelector("#wow") // Selecting Element
a.innerHTML="kar diya change"  // Changing HTML
a.style.backgroundColor ="#F0F" // Changing CSS
a.addEventListener("click",()=>{
    console.log("kar diya click !!!");
    a.innerHTML="kahe click kiya be !!"
})




