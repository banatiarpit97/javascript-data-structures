var a = 'ab,c,de$!$';

function reverse(){
    a = a.split("");
    left = 0;
    right = a.length-1;

    while(left<right){
        if(a[left] >= 'a' && a[left]<='z'){
            while (a[right] < 'a' || a[right] > 'z'){
                right--;
            }
            [a[left], a[right]] = [a[right], a[left]];
            right--;left++;                
        }
        else{
            left++;
        }
    }

    console.log(a);
}

reverse();