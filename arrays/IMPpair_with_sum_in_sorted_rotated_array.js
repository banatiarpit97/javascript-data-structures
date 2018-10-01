var a = [11,15,6,8,9,10];
var sum = 16;

function pair(){
    let large, small;
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<a.length;i++){
        if(a[i]>max){
            max = a[i];
            large = i;
        }
    }

    small = large+1;

    for(let j=0;j<a.length;j++){
        console.log(a[large % a.length], a[small % a.length]);
        if (a[large % a.length] + a[small % a.length] == sum){
            console.log('true');
            return;
        }
        else if (a[large % a.length] + a[small % a.length] < sum) {
            small++;
        }
        else if (a[large % a.length] + a[small % a.length] > sum) {
            large--;
            if(large == -1){
                large = a.length-1;
            }
        }
    }
}

pair();