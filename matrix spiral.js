var n = 4;
var final = [];
var counter = 1;

rowS = 0;
colS = 0;
rowE = n-1;
colE = n-1;

for(let i=0;i<n;i++){
  internal = [];
  final.push(internal);
}

while(rowS<=rowE && colS<=colE){
for(let i=colS;i<=colE;i++){
 final[rowS][i] = counter;
 counter++;
}
rowS++;

for(let i=rowS;i<=rowE;i++){
 final[i][colE] = counter;
 counter++;
}
colE--;

for(let i=colE;i>=colS;i--){
 final[rowE][i] = counter;
 counter++;
}
rowE--;

for(let i=rowE;i>=rowS;i--){
 final[i][colS] = counter;
 counter++;
}
colS++;
}


console.log(final)
 
 
