
// rListLength

// Given the first node of a singly linked list, create a recursive function that returns the number of nodes in that list. 
// You can assume the list contains no loops, and that it is short enough that you will not ‘blow your stack’. 

function Node(value) {
    this.val = value;
    this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);

function linkNodes(node, links) {
    let current = node;
    let value = current.val;

    while(value < (node.val + links)) {
        current.next = new Node(++value);
        current = current.next;
    }
    return node;
}
linkNodes(node1, 20);
linkNodes(node2, 23);


function rListLength(node) {
    let current = node;
    let counter = 0;
    
    if (current) {
        counter++;
        current = current.next;
        return counter + rListLength(current);
    }
    return counter;
}

console.log(rListLength(node1));
console.log(rListLength(node2));

// Recursive “Tribonacci”

// Write a function rTrib(num) that mimics the Fibonacci sequence, but adds the previous three values instead of the previous two values. 
// Consider the first three (num = 0, num = 1, num = 2) Tribonacci numbers to be 0, 0 and 1. 
// Thus, rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). 
// Handle negatives and non-integers appropriately and inexpensively.
