const values = [1, 2, 2, 3, 2];

const newMap = new Map()

for (let index = 0; index < values.length; index++) {
    if(newMap.has(values[index])){
       newMap.set( values[index] ,newMap.get(values[index]) + 1);
       continue;
    }

     newMap.set( values[index], 1);
}

for (const [key, value] of newMap) {
    console.log(`Frequency of ${key} is ${value}`)
}
