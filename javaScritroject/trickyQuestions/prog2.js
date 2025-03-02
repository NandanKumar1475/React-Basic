let hospitalDetails = [
    {
        pid:1,
        Name:"sangam",
        disease:"loveria"
    },
    {
        pid:2,
        Name:"kamran",
        disease:"puma"
    },
    {
        pid:3,
        Name:"aditya",
        disease:"anshika"
    },
]

let data = hospitalDetails.filter((patent)=>{
    if(patent.disease=="puma"){
        return patent;
    }
})
console.log(data);
delete.data;



