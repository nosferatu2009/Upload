// (function (){
//   if(num>10){
//     console.log("value is 100");
//  }
// })();

function show(val){
   console.log("Hello "+ val);
}

function greet(arg1) {
  console.log("greeting to you!!")
    arg1("menka");
}

greet(show);


arr = [100,200,300];

arr.forEach(element => { console.log(element)
});

for(var val of arr){
  console.log(val);
}