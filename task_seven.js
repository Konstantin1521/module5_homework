let arr = [1, 4, 7, 8, 12, 22, 2, 34, 1, 1, null, 0, 'qwe', 'ewq']
let counEven = 0 
let counOdd = 0 
let countIndefinite = 0 

for(let i = 0; i < arr.length; i++){
  
   if(arr[i] == null || arr[i] == 0 || typeof arr[i] !== "number"){
        countIndefinite++
    }
    else if (arr[i] % 2 == 0){
        counEven++
    }else if(arr[i] % 2 != 0){
        counOdd++
    }

}

console.log('четных: ' + counEven)
console.log('Нечетных: ' + counOdd)
console.log('неопределенные или ноль: ' + countIndefinite)