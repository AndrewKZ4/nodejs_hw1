const http = require('http');
const path = require('path');
const mylib =require('./mylib');
const myfunlib = require('./myfunlib');

const server =  http.createServer(function(req, res) {
    console.log('URL page:' + req.url);

    if(req.method==="GET")
    {   

        if(req.url==='/')
        {
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.end('<h1> Домашние задачи </h1> <ul><li><a href="/task1">Задача1</a></li><li><a href="/task2">Задача2</a></li></ul>');
        }
        else if (req.url ==='/task1')
        {           
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.end(mylib.CreateBody());
        }
        else if (req.url ==='/task2')
        {
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.end(`<h1> Задача2</h1> <div>Сумма :${  myfunlib.totalSum()} <br> Количество чисел :${  myfunlib.totalCount()} <br> Сумма четных :${  myfunlib.evenSum()} </div> <a href="/">Назад</a>` );
        }
    }


})

server.listen(3212,'localhost');
console.log('Server listening on port 3212'); 