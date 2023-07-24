const http=require('http');
const express=require('express');

const app=express();

app.get('/',(req,res)=>{
 res.send("Welcome to home page");
})
app.listen(4500);
// http.createServer((req,res)=>{
//  res.writeHead(200,{'content-type':'text/html'});
//  res.write('hello world !')
//  res.end();
// }).listen(4500);