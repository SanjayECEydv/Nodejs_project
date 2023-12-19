const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs',

});

// con.connect(function(error){
//     if(error) throw error;
//     else 
//     console.log("Connected....");
// });

con.connect((err)=>{
    if(err) throw err;
    console.log("Connection established.........")
});

module.exports.con = con;

