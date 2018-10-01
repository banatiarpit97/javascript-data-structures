var a  = [0,1,0,1,0,0,1,1,0,1];

function segregate(){
    let left = 0;
    let right = a.length-1;
    while(left < right){
        while(a[left] == 0){
            left++;
        }
        while(a[right] == 1){
            right--;
        }

        if(left<right){
            [a[left], a[right]] = [a[right], a[left]];
        }
    }


    console.log(a)
}
segregate();