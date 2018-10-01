var words = ['arpitt', 'banati', 'ram', 'sham', 'mahs', 'tipra'];

function sameChars(){
   var sets = [];

   for(let i of words){
       let set = new Set();
       for(let j of i){
           set.add(j);
       }
       set = Array.from(set);
       set.sort();
       sets.push(set);
   }

   for(let i=0;i<sets.length;i++){
       for(let j=i+1;j<sets.length;j++){
          if(sets[i] != sets[j]){
              console.log(words[i], words[j])
          }
       }
   }
}


sameChars()