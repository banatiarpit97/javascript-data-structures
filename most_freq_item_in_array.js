let a = [1,2,3,4,5,6,1,6,6];

function most_freq(arr){
    chars = {};
  for(elem of arr){
      if(chars[elem]){
          chars[elem] += 1; 
      }
      else{
          chars[elem] = 1;
      }
  }

  max = 0;
  maxElem = null;
  for(i in chars){
      if(chars[i] > max){
          max = chars[i];
          maxElem = i;
      }
  }

  console.log(maxElem)
}

most_freq(a)