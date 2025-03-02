const users = [
    {
        name:"nandan",
        email:"nandankumar1475@gmail.com"

    },
    {
        name:"chandan",
        email:"chandankumar1475@gmail.com"

    },
    {
        name:"kandan",
        email:"kandankumar1475@gmail.com"

    },
    {
        name:"pndan",
        email:"pdankumar1475@gmail.com"

    },

];

users.forEach(obj=>{
    obj.age = 12;
    
})
console.log(users);

users.forEach((user)=>{
    user.lname = "raj"
})
console.log(users);

users.forEach((user)=>{
    delete user.age;
})
console.log(users);


