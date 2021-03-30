const express=require('express')

var app=express()

var cb0 = function (req, res, next) {
    res.write('CB0')
    next() 
}
  
var cb1 = function (req, res, next) {
    res.write('CB1')
    next()
}
  
var cb2 = function (req, res, next) {
    res.write('CB2')
    next()
}

app.get('/example/d', [cb0, cb1, cb2])
var server=app.listen(3000, ()=>{});
