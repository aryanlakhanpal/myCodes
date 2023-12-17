//! Syntax

// function   funName()
// {

// }

// funName() 

//! Exampe 1

function addThreeNum(a,b,c) //<--parameters
{
return a+b+c;
}

const k = addThreeNum("1",2) // <--arguments

// console.log(k);

//--------------------------------------------------------------------------------------------------------------

//! Example 2 

function WritingMessage(name="lakhanpal") // Default Value 
{
    return `My name is -->${name}`;
}

let l = WritingMessage("Aryan Lakhanpal !!!");

// console.log(l);

//---------------------------------------------------------------------------------------------------------------

//! Example 3

// ... {Spread operator}-> jitni bhi baaki values hoti hai yee unko store kar leta hai 

function SpreadOpt(a,b,...c) // ... <-- hamesha last me aaega !!!
{
  
    return a+b+c;
}

let m =SpreadOpt(1,2,3,4,5)

// console.table([m,typeof m,m.charAt(2)])

//----------------------------------------------------------------------------------------------

//! Example 4


let obj = 
{
    naam : "hiroshi"
}


function aboutObjs(any = 
    {
        naam : "shin chan",
        age : 5
    })
{

   return  `bande ka naam -> ${any.naam} , uski age ->${any.age}`;

}

let n = aboutObjs(obj)

// console.log(n);

//-------------------------------------------------------------------------------------------------------------------------------- 

