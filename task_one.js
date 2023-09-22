let input_user = prompt('введите число: ')
let num = input_user++

if (isNaN(num)){
  console.log("Упс, кажется, вы ошиблись")
} else{
      if (num % 2 == 0){
       console.log("четное")
} else {
  console.log("не четное ")
}
}