const num = [10,20,2,1,34,22,12,32,4,5,6];

const evenNumber  = num.filter((i)=>{
    return i%2==0;
})
console.log(evenNumber);

const oddNumber = num.filter((i)=>{
    return i%2!=0

})
console.log(oddNumber);
