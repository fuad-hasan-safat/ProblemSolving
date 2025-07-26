function main (input) {
   
   const lines = input.trim().split('\n');
   const [N, S] = lines[0].trim().split(' ').map(Number);
   const arr = lines[1].trim().split(' ').map(Number);
   const set1 = new Set();

   let isExist = false;

   for (let num of arr){
    const neededNumber = S - num;
    if(set1.has(neededNumber)){
        isExist = true;
    }else{
        set1.add(num);
    }

   }
   if(isExist){
    console.log("Yes")
   } else{
    console.log("No")
   }
}