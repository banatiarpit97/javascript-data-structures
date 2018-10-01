var a = [5,20,3,2,50,80];
var diff = 78;

function pair(){
    a = a.sort(numsort);
    console.log(a);
    let left = 0;
    right = a.length-1;
    while(left<right){
        if(a[right]-a[left] == Math.abs(diff)){
            if(diff>0){
                console.log(a[right], a[left]);
            }
            else{
                console.log(a[left], a[right]);                
            }
            return;
        }
        else if (a[right] - a[left] < Math.abs(diff)) {  
            left++
        }
        else{
            right--
        }

    }
}
var numsort = function (a, b) {
    return a - b;
}

pair();
