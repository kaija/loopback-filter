# loopback-filter
Loopback filter convert module

## Install

npm install loopback-filter --save

## Usage

var lf = require('loopback-filter');
var input = {where:{and:[{age:19},{sex:'male'}]}};
var output = lf.buildLucene(input);


## Test
npm install
npm test / make test


## Release Note

0.1.0
Support Apache Lucene and / or / between / gt / gte / lt / lte

0.1.1
Fixed typo of package name and version
