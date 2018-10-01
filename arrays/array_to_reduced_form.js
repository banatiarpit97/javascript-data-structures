var a =[10,40,20];

function reduced(){
    map = {};
    for(let i=0;i<a.length;i++){
        map[a[i]] = i;
    }
    temp = Array.from(a);
    temp.sort();

    j=0;
    for(let i of temp){
        a[map[i]] = j;
        j++;
    }
    console.log(a)
}

reduced();