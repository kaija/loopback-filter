require('./init.js');
var assert = require('assert');
var lf = require('../index.js');
describe('Apache Lucene query language', function(){
  before(function(){
  });
  it('and', function(done){
    var input = {where:{and:[{age:19},{sex:'male'}]}};
    var output = lf.buildLucene(input);
    assert(output == "(age:19 AND sex:male)", 'output not expected');
    done();
  });
  it('or', function(done){
    var input = {where:{or:[{age:19},{sex:'male'}]}};
    var output = lf.buildLucene(input);
    assert(output == "(age:19 OR sex:male)", 'output not expected');
    done();
  });
  it('between', function(done){
    var input = {where:{size: {between: [1, 10]}}};
    var output = lf.buildLucene(input);
    assert(output == "size:[1 TO 10]", 'output not expected');
    done();
  });
  it('gt', function(done){
    var input = {where:{size: {gt: 10}}};
    var output = lf.buildLucene(input);
    assert(output == "size:[11 TO *]", 'output not expected');
    done();
  });
  it('gte', function(done){
    var input = {where:{size: {gte: 10}}};
    var output = lf.buildLucene(input);
    assert(output == "size:[10 TO *]", 'output not expected');
    done();
  });
  it('lt', function(done){
    var input = {where:{size: {lt: 3}}};
    var output = lf.buildLucene(input);
    assert(output == "size:[* TO 2]", 'output not expected');
    done();
  });
  it('lte', function(done){
    var input = {where:{size: {lte: 3}}};
    var output = lf.buildLucene(input);
    assert(output == "size:[* TO 3]", 'output not expected');
    done();
  });
  it('and + or', function(done){
    var input = {where:{or:[{and:[{age:19},{sex:'male'}]}, {size:3}]}};
    var output = lf.buildLucene(input);
    assert(output == "((age:19 AND sex:male) OR size:3)", 'output not expected');
    done();
  });
});
