
// You should implement your task here.

module.exports = function towelSort (matrix) {
    


    result = []

    if (matrix === undefined) {
        return result
    }
    
    for (let i = 0; i < matrix.length; i++) {
      let arr = matrix[i]
      if (i % 2 === 0) {
        for (let j = 0; j < arr.length; j++) {
          result.push(arr[j])
        }
      } else {
        let reversePart =  matrix[i].reverse()
        for (let j = 0; j < reversePart.length; j++) {
          result.push(arr[j])
        }
      }
      
      
        
    }
    return result 
}
