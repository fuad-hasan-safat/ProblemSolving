class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function buildLinkedList(arr) {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

function main(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const arr = lines[1].split(' ').map(Number);

    const head = buildLinkedList(arr);
    console.log(findMiddle(head));

}
