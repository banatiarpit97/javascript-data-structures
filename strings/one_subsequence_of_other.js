var main = 'arpit';
var sub = 'iaprk';

function subsequence(){
    var mainmap = {};
    var submap = {};
    if(main.length != sub.length){
        console.log('False');
        return;
    }

    for(let i of main){
        mainmap[i] = mainmap[i]?mainmap[i]+1:1;
    }
    for (let i of sub) {
        submap[i] = submap[i] ? submap[i] + 1 : 1;
    }

    for(let i in mainmap){
        // if(submap[i]){
            if(submap[i] == mainmap[i]){
                continue;
            }
            else{
                console.log('false')
                return;
            }
        // }
        // else{
        //     console.log('false')
        //     return;
        // }
    }


}

subsequence();