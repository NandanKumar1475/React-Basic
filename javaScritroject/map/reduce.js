const num = [10,20,2,1,34,22,12,32,4,5,6];

const sum = num.reduce((acc,numr)=>{
     acc+numr;
},0)
console.log(sum);

 const suma =num.reduce((acc,numr)=>{
   let add = acc+numr;
   console.log(add);
   return add;
},0)
console.log(suma);
