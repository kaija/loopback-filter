buildLucene = exports.buildLucene = function(obj) {
  var keys = Object.keys(obj);
  var search = '';
  for (i in keys) {
    //console.log(keys[i]+ ':'+ obj[keys[i]]);
    switch (keys[i])
    {
      case 'where'://Should follow a object
        search = buildLucene(obj[keys[i]]);
        break;
      case 'and':
        var a = obj[keys[i]];
        search = '(' + buildLucene(obj[keys[i]][0]) + ' AND ' + buildLucene(obj[keys[i]][1]) + ')';
        break;
      case 'or':
        search = '(' + buildLucene(obj[keys[i]][0]) + ' OR ' + buildLucene(obj[keys[i]][1]) + ')';
        break;
      case 'gt':
        var v = obj[keys[i]] + 1;
        search = '[' + v + ' TO *]';
        break;
      case 'gte':
        search = '[' + obj[keys[i]] + ' TO *]';
        break;
      case 'lt':
        var v = obj[keys[i]] - 1;
        search = '[* TO ' + v  + ']';
        break;
      case 'lte':
        search = '[* TO ' + obj[keys[i]] + ']';
        break;
      case 'between':
        search = '[' + obj[keys[i]][0] + ' TO ' + obj[keys[i]][1] + ']';
        break;
      case 'inq':
      case 'nin':
      case 'neq':
      case 'near':
      case 'like':
      case 'nlike':
        break;
      default:
        if (typeof(obj[keys[i]]) == "object") {
          search = keys[i] + ':' + buildLucene(obj[keys[i]]);
        }else{
          search = keys[i] + ':' + obj[keys[i]];
        }
    }
  }
  return search;
};
