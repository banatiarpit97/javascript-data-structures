//first elem should be less than both neighbouring elements next one should be greater than neighbours and so on...

var a = [4,3,7,8,6,2,1];

function zigzag(){
    let flag = true;

    for(let i=0;i<a.length-1;i++){
        
    if(flag){
        if(a[i]>a[i+1]){
            [a[i], a[i + 1]] = [a[i+1], a[i]];
        }
    }
    else{
        if (a[i] < a[i + 1]) {
            [a[i], a[i + 1]] = [a[i + 1], a[i]];
        }
    }

    flag = !flag;
  }

  console.log(a)
}

zigzag();