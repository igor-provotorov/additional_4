module.exports = function multiply(first, second) {   var result = [];
  
    for (var i = 0; i < first.length; i++) {
      for (var j = 0; j < second.length; j++) {
        var tmp = i + j;
  
        if (!result[tmp]) {
          result[tmp] = 0;
        }
  
        result[tmp] = result[tmp] + (first[i] * second[j]);
      }
    }
  
    for (var k = result.length-1; k >= 0; k--) {
      if (result[k] >= 10) {
        var temp = String(result[k]);
  
        if (k == 0) {
          result.unshift(0);
          k++;
        }
  
        result[k] = Number(temp.slice(-1));
        result[k-1] = result[k-1] + Number(temp.slice(0, -1));
      }
    }
  
    return result.join("");
  }
  