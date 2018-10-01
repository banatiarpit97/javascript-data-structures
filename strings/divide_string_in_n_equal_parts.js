var a = 'arpitt';
var  n = 2;

function divide(){
    str = '';count = 0;j=0;
    for(let i=0;i<a.length;i++){
        if(j<n){
            str += a[i]; 
            j++;
        }
        else if(j % n == 0){
          console.log(str);
          count++;
          str = '';
          j=0;
          str += a[i];
          j++;
        }
    }
    console.log(str)

    console.log(++count)
}

divide();