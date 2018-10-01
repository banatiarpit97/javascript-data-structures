var a = [1,5,10,20,40,80];
var b = [6,7,20,80,100];
var c = [3,4,15,20,30,70,80,120];

function common(){
    let count = 0;
    n = a.length>b.length?(a.length>c.length?a.length:c.length):b.length;
    console.log(n)
    for(let i=0,j=0,z=0,end=0;end<1;){
        console.log(a[i],b[j],c[z])
      if(a[i]==b[j] && a[i]==c[z]){
          i++;j++;z++;
          count++;
      }
      else if(a[i]==b[j]){
          z++;
      }
      else if (c[z] == b[j]) {
          i++;
      }
      else if (a[i] == c[z]) {
          j++;
      }
      else{
          let mx = a[i] > b[j] ? (a[i] > c[z] ? 'a' : 'c') : (b[j] > c[z] ?'b':'c');
          if(mx == 'a'){
              j++;z++;
          }
          else if (mx == 'b') {
              z++; i++;
          }
          else{
              i++;j++
          }
      }

      if(i==a.length||j==b.length||z==c.length){
          end++;
      }
    }

    console.log(count)
}

common();