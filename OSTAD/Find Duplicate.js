function main (input) {
    const lines = input.trim().split('\n');
    const arr = lines[1].trim().split(' ').map(Number);
    const set1 = new Set();

    for(let num of arr){
        if(set1.has(num)){
            console.log(num);
            return;
        }else{
            set1.add(num)
        }
    }
}