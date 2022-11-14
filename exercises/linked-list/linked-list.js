class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


export class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        let node = new Node(value);
        if (this.tail) { this.tail.next = node; }
        node.prev = this.tail;
        this.tail = node;
        if (this.count() === 0) { this.head = node; }
    }

    pop() {
        let tail = this.tail;
        this.tail = tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return tail.value;
    }

    shift() {
        let head = this.head;
        let newHead = head.next;
        if (newHead) {
            newHead.prev = null;
        } else {
            this.tail = null;
        }
        this.head = newHead;
        return head.value;
    }

    unshift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.push(value);
        } else {
            let head = this.head;
            node.next = head;
            head.prev = this.head = node;
        }
    }

    delete(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                let next = node.next;
                if (node.prev) {
                    node.prev.next = next;
                } else {
                    this.head = next;
                }
                if (next) {
                    next.prev = node.prev;
                } else {
                    this.tail = node.prev;
                }
                break;
            }
            node = node.next;
        }
    }

    count() {
        let node = this.head;
        let i = 0;
        while (node) {
            node = node.next;
            i++;
        }
        return i;
    }
}
