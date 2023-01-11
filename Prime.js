
let a=57
let flag=0;
for(let i = 1; i <= a; i++){
    if(a%i==0){
        flag++;
    
    }
}

(flag==2) ? console.log('prime'):console.log('composite')
