var a = [2,5,2,8,5,6,8,8];

function frequency(){
    let map = {};
    let result = [];
    
    for(let i=0;i<a.length;i++){
        map[a[i]] = map[a[i]]?map[a[i]]+1:1;
    }

    let n = Object.keys(map).length
    for(let i=0;i<n;i++){
        let max = 0;
        let elem;
        for(let e in map){
            if(map[e]>max){
                max = map[e];
                elem = e;
            }
        }
        for(let j=0;j<max;j++){
            result.push(elem)
        }
        delete map[elem]
    }    
    console.log(map, result)
    
}

frequency();