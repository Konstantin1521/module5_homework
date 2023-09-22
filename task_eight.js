let mySet = new Map([
    ['key', 'value'],
    [123, 321],
    [true, false]
  ])
  
  
  for (let i of mySet.keys()){
    console.log('Ключу ' + i + ' соответсвует значение ' + mySet.get(i))
  }