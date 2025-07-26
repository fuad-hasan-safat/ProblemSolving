function main (input) {
   const lines = input.trim().split('\n');
   const arrN = lines[1].trim().split(/\s+/).map(Number);
   const arrM = lines[2].trim().split(/\s+/).map(Number);

   const set1 = new Set(arrN);
   const newSet = new Set();

   for(let num of arrM){
    if(set1.has(num)){
        newSet.add(num)
    }
   }
   const result = Array.from(newSet).sort((a,b) => a- b);
   console.log(result.length);
   console.log(result.join(' '));
}