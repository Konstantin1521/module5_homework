let arr =[1, 1, 1, 1, 1]
let countF = 0
let countT = 0

for ( let i = 0; i < arr.length; i++){
    let a = arr[i]
    for (let j = 0; j < arr.length; j++){
        if(arr[i] == arr[j]){
            countT++
        }else{
            countF++
    }
    }
    if (countF >= 1){
        console.log('элементы не совпадают:')
        break
    }else{
        console.log('элементы совпадают')
        break
    }
}