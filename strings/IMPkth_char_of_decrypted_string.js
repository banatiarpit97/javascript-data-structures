var a = 'ab4c2ed3';
var count = 9;

function char(){
    c = 0;flag=0;str = '';
    for(let i of a){
        if(i>='a' && i<='z'){
            if(flag == 1){
                char += i;
            }
            else{
                char = i;                
            }
            str += i;
            flag = 1;            
        }
        else{
            for(let j=1;j<=i-1;j++){
                str += char;
            }
           flag = 0;
        }
    }

    console.log(str)

    console.log(str[count-1])
}

char();