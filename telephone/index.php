<!DOCTYPE html>
<html lang="en-GB">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/global.css">
        <title>Bad Telephone</title>
        <link rel="icon" href="favicon.svg.png" type="image/png">
    </head>
    <body>
        <div class="navbar">
        <ul>
            <li><a href="../index.htm">Home</a></li>
            <li><a href="../about/about.htm">About</a></li>
        </ul>
        </div>
        
        <script>
            var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }


document.body.appendChild(buildHtmlTable([
{
    "number1": "01617110095",
    "number2": "01157849978",
    "number3": "01615328667",
    "number4": "02381244319",
    "number5": "01513293208",
    "number6": "01872306928",
    "number7": "01212062256",
    "number8": "07756705799",
    "number9": "01872306928",
    "number10": "01614644833",
    "number11": "02034118528",
    "number12": "01625836546",
    "number13": "01618264572",
    "number14": "01614649562",
    "number15": "07960148024"
}
]));
        </script>
        <style>
        table {font-family: Arial, sans-serif;} td {border: 1px solid #ddd; padding-left: 4px;}
        </style>
    </body>
</html>
