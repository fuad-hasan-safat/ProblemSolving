function main (input) {
    const S = input.trim();
    const reversed = S.split('').reverse().join('');
    if (S === reversed) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}