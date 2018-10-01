var weights = [2,3,5,7,8];
var values = [3,5,2,7,9];
var capacity = 15;

function knapsack(weights, values, capacity){
  var valueByWeight = [];
  var addedWeights = [];
  var finalvalue = 0;
  for(i=0;i<weights.length;i++){
      valueByWeight[i] = values[i]/weights[i];
  }

  bubbleSort(valueByWeight, weights, values); //sort weight according to valueByWeight
    
  for(let k=0;k<weights.length;k++){
      if(weights[k]<=capacity){
        addedWeights.push(weights[k]);
        finalvalue += values[k];
        capacity -= weights[k];
      }
      else if(capacity != 0){
          addedWeights.push(weights[k]);
          finalvalue += valueByWeight[k]*capacity;
          capacity = 0;
      }
      else{
          break;
      }
  }  
  console.log(addedWeights, finalvalue);
}

knapsack(weights, values, capacity);

function bubbleSort(valueByWeight, weights, values){
    for(let i=0;i<valueByWeight.length-1;i++){
        for(j=0;j<valueByWeight.length-i-1;j++){
            if(valueByWeight[j+1]>valueByWeight[j]){
                [valueByWeight[j+1], valueByWeight[j]] = [valueByWeight[j], valueByWeight[j+1]];
                [weights[j + 1], weights[j]] = [weights[j], weights[j + 1]];
                [values[j + 1], values[j]] = [values[j], values[j + 1]];
            }
        }
    }
}
