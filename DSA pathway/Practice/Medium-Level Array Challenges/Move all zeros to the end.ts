const array2 = [0, 1, 0, 3, 12];

let j = 0;

for (let i = 0; i < array2.length; i++) {
  if (array2[i] != 0) {
    array2[j] = array2[i];
    j += 1;
  }
}

array2.fill(0,j,array2.length)

console.log(array2)
