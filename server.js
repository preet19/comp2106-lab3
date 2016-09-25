/**
 * Created by dilpreet on 25/09/2016.
 */
// link to connect package
var connect = require('connect');

// link to the url module to parse url parameters

var query = require('querystring');

var app = connect();

var math = function(req, res, next) {
    // get the values from url's querystring

    var queryString = query.parse(require('url').parse(req.url).query);;

    var method = queryString.method.valueOf();
    var x = queryString.x.valueOf();
    var y = queryString.y.valueOf();

       if (method == 'add') {
           var added = +x + +y;
           res.end('addition: '+ x +'+'+ y +'=' + added.toString());
       }

       else if (method == 'subtract') {
           var sub = +x - +y;
           res.end('substraction: '+ x +'-'+ y +'=' + sub.toString());
       }

       else if (method == 'multiply') {
            var mul = +x * +y;
            res.end('multiply: '+ x +'*'+ y +'=' + mul.toString());
       }

       else if (method == 'divide') {
           var mul = +x / +y;
           res.end('divide: '+ x +'/'+ y +'=' + mul.toString());
       }

       else
       {
           res.end('your method value is wrong');
       }

};

app.use(math);

// start the server on port 3000
app.listen(3000);
