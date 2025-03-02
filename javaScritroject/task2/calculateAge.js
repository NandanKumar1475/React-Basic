var candidates =[
    {
        name:"riya",
        birth:1998
    },
    {
        name:"rajesh",
        birth:1994

    },
    {
        name:"chandan",
        birth:1996

    }
]
console.log(candidates)
const currentYear  = new Date().getFullYear();
console.log(currentYear);

candidates.forEach(candidate =>{
    candidate.age = currentYear - candidate.birth;
})
console.log(candidates);
