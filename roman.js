function roman(string){
  let sum = 0;
  let hash = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
  };

  let arr = string.split('');
  for(let i = 0; i < arr.length; i++) {
    if(hash[arr[i]] < hash[arr[i+1]]){
      sum -= hash[arr[i]];
    } else {
      sum += hash[arr[i]];
    }
  }
  return sum;
}

module.exports = roman;
