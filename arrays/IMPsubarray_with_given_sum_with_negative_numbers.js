var a = [5,10,2,-2,-20,10];
var sum = -10;

function check(){
    let map = {};
    cur_sum = 0;
    for(let i=0;i<a.length;i++){
       cur_sum += a[i];

       if(cur_sum == sum){
           console.log(0, i);
           return;           
       }

       if(map[cur_sum-sum]){
           console.log(map[cur_sum - sum],i+1);           
           return;
        }

        map[cur_sum-sum] = i;
        console.log(map)
    }
}

check();