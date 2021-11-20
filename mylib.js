const fs = require('fs');



let CreateBody = function()
{
    
    return  fs.readFileSync('test.html', 'utf8');
}

module.exports.CreateBody=CreateBody  