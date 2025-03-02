document.getElementById("formData").addEventListener("submit",(event)=>{
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    console.log(fname,lname,email,number);

    let output = document.getElementById("displayData");
    output.innerHTML = `
      <h1> ${fname}</h1>
      <h1> ${lname}</h1>
      <h1> ${email}</h1>
      <h1> ${number}</h1>
    
    `;
    document.getElementById("formData").reset() ;
})