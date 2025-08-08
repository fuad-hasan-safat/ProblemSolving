function main (input) {
 const lines = input.trim().split('\n');
    const S = lines[0];
    const Q = parseInt(lines[1]);

    let front = [];
    let back = S.split('');
    let reversed = false;

    for (let i = 2; i < 2 + Q; i++) {
        const parts = lines[i].split(' ');
        const T = parseInt(parts[0]);

        if (T === 1) {
            reversed = !reversed;
        } else {
            const X = parseInt(parts[1]);
            const C = parts[2];
            if (!reversed) {
                if (X === 1) {
                    front.push(C); 
                } else {
                    back.push(C);  
                }
            } else {
                if (X === 1) {
                    back.push(C);  
                } else {
                    front.push(C);
                }
            }
        }
    }

    let result;
    if (!reversed) {
        result = front.reverse().join('') + back.join('');
    } else {
        result = back.reverse().join('') + front.join('');
    }

    console.log(result);    
}
