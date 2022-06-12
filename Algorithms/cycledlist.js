
/** ---------------------------- Singly linked cycled List ---------------------------- **/

class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}

class CyclicList {
    constructor(list)
    {
        this.head = list || null;
        this.size = 0;
    }

    push_back(element)
    {
        let node = new Node(element);

        let current;

        if (this.head == null)
        {
            this.head = node;
        }
        else
        {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index)
    {
        if (index < 0 || index > this.size)
        {
            return false;
        }
        else
        {

            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            if (index == 0)
            {
                node.next = this.head;
                this.head = node;
            }
            else
            {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index)
    {
        if (index < 0 || index >= this.size)
        {
            return false;
        }
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0)
            {
                this.head = curr.next;
            }
            else
            {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.element;
        }
    }

    removeElement(element)
    {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    indexOf(element)
    {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.element === element)
            {
                return count;
            }
            count++;
            current = current.next;
        }

        return false;
    }

    findWithIndex(index)
    {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (index === count)
            {
                return current.element;
            }
            count++;
            current = current.next;
        }

        return false;
    }

    getSize()
    {
        return this.size;
    }

    isEmpty()
    {
        return this.size == 0;
    }

    printList()
    {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        alert(str);
    }
}