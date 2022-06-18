const arry = [ 1,2,3,4,5,6,7,8,9,10,11,12,13];
const newArry =[];


const tamanhoArry = arry.length;

if(tamanhoArry <=10){
    for(let i = arry.length-1; i >= 0; i--){
        newArry.push(arry[i]);
    }
}else{
    const last = tamanhoArry - 10;
    for(let i = arry.length-1; i >= last; i--){
        newArry.push(arry[i]);
    }
}
console.log(tamanhoArry)
console.log(arry);
console.log(newArry);