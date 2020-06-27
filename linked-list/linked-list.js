class Node{
    constructor(data, link) {
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    head;
    constructor() {
        this.head = null;
    }
    deleteAt(pos) {
        if (this.head == null) {
            console.log ('empty list');
            return;
        }
        let i=1;
        let prev = null;
        let current = this.head
        while(current != null) {
            if (i == pos) {
                if(pos == 1) {
                    this.head = current.next
                    current.next = null
                } else {
                    prev.next = current.next
                    current.next=null
                }
                break;
            }
            i++;
            prev = current;
            current = current.next
        }
        return this.head
    }
    insert(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
            return this.head
        } else {
            let i = this.head;
            while(i.next) {
                i = i.next;
            }
            i.next= node;
        }
        return this.head;
    }
    insertAt(pos, data) {
        if (this.head == null) {
            console.log('empty list ... placing element at the first location');
            return this.insert(data);
        }
        let posExists;
        let i=1; 
        let current = this.head;
        let prev = null;

        while(current != null) {
            if (i == pos) {
                posExists = true;
                let node = new Node(data);
                node.next = current;
                if (prev) {
                    prev.next = node;
                } else {
                    this.head = node;
                }
                return this.head;
            }
            prev = current;
            current=current.next;
            i++;
        }
        if (!posExists) {
            console.log('Specified pos is out of bounds')
        }
        return this.head; // helps with chaining methods
    }
    insertAtStart(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        return this.head;
    }
    insertAtEnd(data) {
        let node = new Node(data);
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = node;

        return this.head;
    }
    visit() {
        if(this.head == null) {
            return 'Empty list'
        } 
        let i = this.head;
        while(i != null) {
            console.log(i.data)
            i = i.next;
        }
        return this.head;
    }
}

let  planets = new LinkedList();
planets.insert('mercury');planets.insert('venus');planets.insert('mars');//insert
planets.insertAt(3, 'earth');
console.log('Contents of linked list...');
planets.visit();

planets.insertAtStart('sun');
console.log('Contents of linked list...');
planets.visit();

planets.insertAtEnd('jupiter');
console.log('Contents of linked list...');
planets.visit();

planets.insertAt(3, 'blackhole');
console.log('Contents of linked list...');
planets.visit();

planets.deleteAt(3);
console.log('Contents of linked list...');
planets.visit();