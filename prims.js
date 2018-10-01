function prims() {
    var parent = [];
    var complete = [];
    var left = [0, 1, 2, 3];
    var dis = [];
    var adj = [
        [0, 10, 20, 0],
        [10, 0, 5, 16],
        [20, 5, 0, 20],
        [0, 16, 20, 0],
    ];


    for (i = 0; i < left.length; l = i++) {
        dis[i] = Infinity;
        parent[i] = null;
    }

    dis[0] = 0;
    parent[0] = null;

    for (let i = 0; i < adj.length; i++) {
        let k = mini(left, dis);
        // console.log(k)
        for (let j = 0; j < adj[i].length; j++) {
            if ((adj[k][j] !== 0) && (left.indexOf(j) > -1)) {
                if (adj[k][j] < dis[j]) {
                    parent[j] = k;
                    dis[j] = adj[k][j];
                }
            }
        }
        left[i] = null;
    }
    console.log(dis);
    sum = 0;
    dis.forEach((elem) => { sum = sum + elem; })
    console.log('total cost', sum)
    console.log(parent)

    let path = findPath(parent)
    console.log(path)
}


function findPath(parent) {
    path = [null];
    for (let i = 1; i < parent.length; i++) {
        path[i] = [0];
        par = parent[i];
        while (parent[par] != null) {
            path[i].push(par);
            par = parent[par];
        }
    }

    return path;
}

function mini(left, dis){
  let k;
  min = Number.POSITIVE_INFINITY;    
  for(i=0;i<left.length;i++){
    if((left[i] !==null) && (dis[i] < min)){
        min = dis[i];
        k = i;
    }
  }
  return k;
}


prims();