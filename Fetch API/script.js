// fetch("Content/readme.txt")
// .then((response)=>{
//     return (response.text())
// })
// .then((data)=>{
//     console.log(data)
// })





fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return (response.json())
})
.then((data)=>{
    // console.log(data)
    for (var x in data){
        document.write(`${data[x].name} <br>`)
    }
})
