const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
    let reversedList = new LinkedList();
    let node = list.head;
    while (node) {
        reversedList.insertAtHead(node.value);
        node = node.next;
    }
    return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    if (list.length === 0) {
        return list;
    }
    if (list.length === 1) {
        return list;
    }
    return reverseIterative(list);
}

module.exports = { reverseIterative, reverseRecursive };
