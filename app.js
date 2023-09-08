var student1 = {
    firstName : "izhan",
    lastName : "fahim",
    age : 19 ,
    gender : "male"
}
var student2 = {
    firstName : "raza",
    lastName : "khan",
    age : 20 ,
    gender : "male"
}
var student3 = {
    firstName : "jannat",
    lastName : "mirza",
    age : 32 ,
    gender : "female"
}
var student4 = {
    firstName : "babar",
    lastName : "azam",
    age : 29 ,
    gender : "male"
}
var student5 = {
    firstName : "Alishba",
    lastName : "fatima",
    age : 24 ,
    gender : "female"
}

var students = [student1,student2,student3,student4,student5]

var tbody = document.getElementById("tbody")    

function render(){
    tbody.innerHTML = ""
    for(var i=0 ; i < students.length ; i++){
        tbody.innerHTML += `<tr> <td class="td"> ${students[i].firstName} </td> <td class="td"> ${students[i].lastName} </td> <td class="td"> ${students[i].age} </td> <td class="td"> ${students[i].gender} </td> </tr>`

    }
}

render()

