function iterativeLog(array){
  array.forEach(callback)
}

function callback(element, index, array){
  console.log(`${index}: ${element}`)
}

function iterate(callback){
  var array = [1,2,3,4]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
