class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


const v1n1 = new ListNode(2);
const v1n2 = new ListNode(4);
const v1n3 = new ListNode(3);

v1n1.next = v1n2;
v1n2.next = v1n3;

const v2n1 = new ListNode(5);
const v2n2 = new ListNode(6);
const v2n3 = new ListNode(4);

v2n1.next = v2n2;
v2n2.next = v2n3

console.log({v2n1});

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   const dummyHead = new ListNode(0);
   let current = dummyHead;
   let carry = 0;
   
   while (l1 !== null || l2 !== null || carry !== 0) {
       const val1 = l1 ? l1.val : 0;
       const val2 = l2 ? l2.val : 0;
       const sum = val1 + val2 + carry;
       carry = Math.floor(sum / 10);
       
       current.next = new ListNode(sum % 10);
       current = current.next;
       
       if (l1) l1 = l1.next;
       if (l2) l2 = l2.next;
   }
   
   return dummyHead.next;
};

const answer = addTwoNumbers(v1n1, v2n1);

console.log({answer})