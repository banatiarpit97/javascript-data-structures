class stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    print() {
        console.log(this.items);
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0 ? 1 : 0;
    }
    size() {
        return this.items.length;
    }
}

function equal_sum(){
    s1 = new stack();
    s2 = new stack();
    s3 = new stack();
    
    s1.push(3)
    s1.push(2)
    s1.push(1)
    s1.push(1)
    s1.push(1);  
    
    s2.push(4)
    s2.push(3)
    s2.push(2)

    s3.push(1)
    s3.push(1)
    s3.push(4)
    s3.push(1)
    
    sum1=0;sum2=0;sum3=0;
    for(let i=0;i<s1.items.length;i++){
        sum1 += s1.items[i];
    }
    for (let i = 0; i < s2.items.length; i++) {
        sum2 += s2.items[i];
    }
    for (let i = 0; i < s3.items.length; i++) {
        sum3 += s3.items[i];
    }

    if(sum1 == sum2 == sum3){
        console.log(sum1);
        return;
    }

    while(sum1 != sum2 && sum1 != sum3){
      let max = getMax();
      if(max == s1){
          let p = max.pop();
          sum1 -= p;          
      }
      else if (max == s2) {
          let p = max.pop();
          sum2 -= p;
      }
      else if (max == s3) {
            let p = max.pop();
            sum1 -= p;
      }
    }

    console.log(sum1)
}

function getMax(){
  if((sum1 > sum2) && (sum1 > sum3)){
     return s1;
  }
  else if ((sum2 > sum1) && (sum2 > sum3)) {
        return s2;
  }
  else if ((sum3 > sum1) && (sum3 > sum2)) {
        return s3;
  }
}

equal_sum();