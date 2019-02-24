/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let a, b, c, count = 0;
  for (a = 0; a < preferences.length; a++){
    b = preferences[a] - 1;
    c = preferences[b] - 1;
    if (preferences[c] - 1 === a && a != b){
      count++;
    }
  }
  return count/3;
};
