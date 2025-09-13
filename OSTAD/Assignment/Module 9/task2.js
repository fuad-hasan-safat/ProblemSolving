function sort_strings(strings) {
    return strings.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length; 
    });
}

const input = ["apple", "tea", "pie", "banana", "kiwi"];
console.log(sort_strings(input)); 
