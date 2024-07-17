let v = 3;
const fun2 = ()=>{
    console.log("function is called")
}
const fun1= (fun2, num)=>{
    for(let i = 1; i <= num;i++){
        fun2();
    }
}
fun1(fun2, v);
