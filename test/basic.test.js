require('./init.js');
var assert = require('assert');
var lf = require('../index.js');
describe('Basic test', function(){
  before(function(){
  });
  it('AND', function(done){
    var input = {where:{and:[{age:19},{sex:'male'}]}};
    var output = lf.buildqSearch(input);
    assert(output == "age:19 AND sex:male", 'output not expected');
    done();
  });
  it('OR', function(done){
    var input = {where:{or:[{age:19},{sex:'male'}]}};
    var output = lf.buildqSearch(input);
    assert(output == "age:19 OR sex:male", 'output not expected');
    done();
  });
  it('Between', function(done){
    var input = {where:{size: {between: [1, 10]}}};
    var output = lf.buildqSearch(input);
    assert(output == "size:[1 TO 10]", 'output not expected');
    done();
  });
  it('Between', function(done){
    var input = {where:{size: {gt: 10}}};
    var output = lf.buildqSearch(input);
    assert(output == "size:[11 TO *]", 'output not expected');
    done();
  });
  it('Between', function(done){
    var input = {where:{size: {gte: 10}}};
    var output = lf.buildqSearch(input);
    assert(output == "size:[10 TO *]", 'output not expected');
    done();
  });
  it('Between', function(done){
    var input = {where:{size: {lt: 3}}};
    var output = lf.buildqSearch(input);
    assert(output == "size:[* TO 2]", 'output not expected');
    done();
  });
  it('Between', function(done){
    var input = {where:{size: {lte: 3}}};
    var output = lf.buildqSearch(input);
    assert(output == "size:[* TO 3]", 'output not expected');
    done();
  });
});
