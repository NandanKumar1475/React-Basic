console.log("hii");

// document.getElementById("fname").addEventListener("input",function(){
//     document.getElementById("displayData").innerText = "you Entered = "+ this.value ;
// })

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        document.getElementById("displayData").innerText = 
            `You Entered (${this.id}): ${this.value}`;
    });
});