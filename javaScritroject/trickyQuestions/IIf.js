(function pageLoading(a){
    if(a==true){
        console.log("page loaded");
    }else{
        console.log("failed");
    }
}(true))

// pageLoading(false);


let arr = [1,5,6,8,10,15];

 let len= arr.length;
var sum =0;
 for (let index = 0; index < arr.length; index++) {
      sum = sum+arr[index];
    
 }
 console.log(sum/len);
 var add = 0;
arr.map((i)=>{
    add = add+i;
})
console.log(add/len);


let avg =arr.reduce((acc,elem)=>{
    return elem+acc/arr.length

},0)
console.log(avg);

