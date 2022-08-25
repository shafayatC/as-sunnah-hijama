const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    database: 'db_for_nextjs',
    user: "root",
    password: "",

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
