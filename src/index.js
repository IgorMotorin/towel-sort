
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix.length == 0) {return []}
  let out;
  out = matrix.reduce(
    (result, element, index) => {

      if (index & 1) {return result.concat(element.reverse())}
      return result.concat(element)

    }
  );

  return out;
  
}
