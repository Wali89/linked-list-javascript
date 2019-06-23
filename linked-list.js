class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this[head] = null;
    }

    add(data) {

        // create a new node
        const newNode = new LinkedListNode(data);
                
        //special case: no items in the list yet
        if (this[head] === null) {

            // just set the head to the new node
            this[head] = newNode;
        } else {

            // start out by looking at the first node
            let current = this[head];

            // follow `next` links until you reach the end
            while (current.next !== null) {
                current = current.next;
            }
           
            // assign the node into the `next` pointer
            current.next = newNode;            
        }
    }
}
