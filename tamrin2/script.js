let numbers = [];
for(i=1 ; i<=10 ; i++){
    let input;
    do{input = prompt( `enter numbers : ${i}`);
} 
while( isNaN(input) || input.trim === "");
numbers.push(Number(input)) ;
}
let min = Math.min(...numbers);
let max = Math.max(...numbers);
let avg = Math.round(numbers.reduce((a,b)=> a + b, 0) / numbers.length);
alert(`min : ${min}\nmax : ${max}\navg ${avg}`);
let name =["rambod", "ilia" , "erfan" , "ali" ,"reza" , "amir" , "mamad" , "gholam" , "mahdi" , "milad" ,"rambod", "ilia" , "erfan" , "ali" ,"reza" , "amir" , "mamad" , "gholam" , "mahdi" , "milad"]
let results = document.getElementById("result")
results.innerHTML = `users ${avg} names: </p></ul>`+ 
Array.from({length: avg}, (_,i)=> `,<li>${names[i % names.length]}</li>`).join("")+`</ul>`

