// var a = [[6,8],[1,9],[2,4],[4,7]];

var a = [[1,3],[2,4],[5,7],[6,8]];

function overlap(){
    a.sort(numsort) 
    let top = [a[0][0], a[0][1]];
    console.log(a)

    for(let i=0;i<a.length;i++){
        if(top[1]<a[i][0]){
            console.log(top)
            top = [a[i][0], a[i][1]];
        }
        else if(top[1]<a[i][1]){
            top[1] = a[i][1];
        }
    }

    console.log(top)
}

overlap();

function numsort(a,b){
    return a[0]-b[0];
}