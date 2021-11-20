const fs = require('fs');
const rl = require('readline');

let split = function()
{
    let data = fs.readFileSync('numbers.txt', 'utf8');
    
    return data.split('\n');
}


let totalSum =  function()
{
    sum = 0;    
   let num = split();
   num.forEach(element => { 
        sum+=parseInt(element,10)         

    });
    
    return sum;
    

}
let totalCount = function()
{
    let num = split();
    return num.length;
}
let evenSum = function()
{
    sum = 0;    
    let num = split();
    num.forEach(element => { 
        if(element%2==0)
        {
            sum+=parseInt(element,10)
        }
                  
 
     });
     
     return sum;

}

module.exports =
{
    totalSum,
    totalCount,
    evenSum
}