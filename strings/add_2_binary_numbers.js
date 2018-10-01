var a = '11';
var b = '1';
len1 = a.length;
len2 = b.length;

function add(){
    carry = 0;i=0;j=0;res = '';
    a = Number(a)
    b = Number(b)    
    while (i<len1 || j < len2) {
        if(a>0){
            first = a%10;
            a = Math.floor(a/10);
            i++;
        }
        else{
            fisrt = 0;
        }
        if (b > 0) {
            second = b % 10;
            b = Math.floor(b / 10);
            j++;
        }
        else{
            second = 0;
        }
        console.log(first, second, carry)
        val = first + second + carry;
        if(val == 2){
            val = 0;
            carry = 1;
        }
        else if(val == 3){
            val = 1;
            carry = 1;
        }
        else{
            carry = 0;
        }
        console.log('v',val)
        res = String(val) + res; 
    }

    if(carry == 1){
        res = carry + res; 
    }

    console.log(res)
}

add();