var a = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

function spiral(){
    let lowr = 0;
    let lowc = 0;
    let highr = a.length-1;
    let highc = a[0].length-1;
    while(lowr < highr || lowc < highc){
        for(let i=lowc;i<=highc;i++){
            console.log(a[lowr][i]);
        }
        lowr++;

        for (let i = lowr; i <= highr; i++) {
            console.log(a[i][highc]);
        }
        highc--;

        for (let i = highc; i >= lowc; i--) {
            console.log(a[highr][i]);
        }
        highr--;

        for (let i = highr; i >= lowr; i--) {
            console.log(a[i][lowc]);
        }
        lowc++;
    }
}

spiral();