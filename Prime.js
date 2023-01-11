let a=57
let flag=true;
for(let i = 2; i <= a**0.5; i++){
    if(a%i==0){
        flag=false;
        break;
    }
}

(flag) ? conseol.log('prime'):console.log('composite')
