/**
 * Created by dilpreet on 25/09/2016.
 */
// link to connect package
var connect = require('connect');

// link to the url module to parse url parameters

var querystring = require('querystring');

var app = connect();

var calculateTax = function(req, res, next) {
    // get the values from url's querystring

    var qs = querystring.parse(require('url').parse(req.url).query);;

    var qss = qs.method.valueOf();
    var x = qs.x.valueOf();
    var y = qs.y.valueOf();

       if (qss == 'add') {
           var added = +x + +y;
           res.end('addition: '+ x +'+'+ y +'=' + added.toString());
       }

       else if (qss == 'subtract') {
           var sub = +x - +y;
           res.end('substraction: '+ x +'-'+ y +'=' + sub.toString());
       }

       else if (qss == 'multiply') {
            var mul = +x * +y;
            res.end('multiply: '+ x +'*'+ y +'=' + mul.toString());
       }

       else if (qss == 'divide') {
           var mul = +x / +y;
           res.end('divide: '+ x +'/'+ y +'=' + mul.toString());
       }

       else
       {
           res.end('your method value is wrong');
       }

};

app.use(calculateTax);

// start the server on port 3000
app.listen(3000);
