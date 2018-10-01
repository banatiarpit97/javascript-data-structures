function kruskal() {
    var parent = [];
    var complete = [];
    var left = [0, 1, 2, 3];
    var dis = [];
    edges = 0;
    var adj = [
        [0, 10, 20, 0],
        [10, 0, 5, 16],
        [20, 5, 0, 20],
        [0, 16, 20, 0],
    ];

    while(edges < left.length-1){
        let res = mini(adj);
        let u = res[0];
        let v = res[1];
        let min = res[2];

        console.log(u,v)

        pu = findParent(u, parent);
        pv = findParent(v, parent);

        console.log(pu, pv)
        
        if(pu != pv){
            parent[v] = u;
            edges++;
            dis[v] = min;
            console.log(u,v,min)
        }
        adj[u][v] = adj[v][u] = Number.MAX_SAFE_INTEGER;  
        // edges++; 

    }

    console.log(parent);
    let sum = 0;
    dis.forEach((elem) => {sum += elem;})
    console.log(dis); 
    console.log('min dis is', sum)   

}

function mini(adj) {
    min = Number.MAX_SAFE_INTEGER;
    for(var i=0;i<adj.length;i++){
        for(var j=0;j<adj[i].length;j++){
            if(adj[i][j] < min && adj[i][j] != 0){
                min = adj[i][j];
                var u = i;
                var v = j;
            }
        }
    }
    return [u, v, min];
}

function findParent(ver, parent){
    while(parent[ver]){
        ver = parent[ver];
    }
    return ver;
}

kruskal();