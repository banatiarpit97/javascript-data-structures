var s = '(a(b)(c)(d(e(f)g)h)I(j(k)l)m)';

function parenthesis() {
    let max = 0;let count = 0;
    for(let elem of s){
        if(elem == '('){
            count++;
            if(count > max){
                max = count;
            }
        }
        else if(elem == ')'){
            count--;
        }
    }

    console.log(max);
}

parenthesis();