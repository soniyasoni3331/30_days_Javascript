let n = 4;
function factorialFun(n){
    let i = 1;
    let factorial = 1;
    if(n === 1){
        return factorial;
    }else{
        do{
        factorial *= i;
        i++;
        }while(i <= n);
    return factorial;
    }
}
factorialFun(n);