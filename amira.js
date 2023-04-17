const express = require('express');
const res = require('express/lib/response');



const app = express();

const students = [

    "amira",
    "eman",
    "engy",
       
];

 const studentsFunction = (request, response) =>{
    let output ='<ul>';


for (let i = 0; i < students.length ; i++) {
    output +="<li>" + students[i] + "</li>";



}

    output += "</ul>";


    response.send(output);
 };

 app.get('/students', studentsFunction);


app.listen(5000); 