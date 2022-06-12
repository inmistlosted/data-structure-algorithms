
/** ---------------------------- Hash Table - Quadratic Probing ---------------------------- **/

class HashEntry
{
    constructor(key, value)
    {
        this.key = key;
        this.value = value;
    }
}

class HashTable
{
    constructor(size)
    {
        this.array = new Array(size);
        this.count = 0;
    }

    isFull()
    {
        return this.count === this.array.length;
    }

    insert(key, value)
    {
        let i = key % this.array.length;
        let base = i;
        let step = 1;

        // handle collision
        while (this.array[i]) {
            i = (base+step*step) % this.array.length;
            step++;
        }

        // insert
        this.array[i] = new HashEntry(key, value);
        this.count++;
    }

    find(key)
    {
        let i = key % this.array.length;
        let base = i;
        let step = 1;
        while(true) {
            if (!this.array[i]) {
                return false;
            }
            else if (this.array[i].key === key) {
                return this.array[i].value;
            }
            else {
                i = (base+step*step) % this.array.length;
            }
            step++;
        }
    }

    remove(key)
    {
        // get hash index
        let i = key % this.array.length;
        let base = i;
        let step = 1;
        while(true) {
            if (!this.array[i]) {
                return false;
            }
            else if (this.array[i].key === key) {
                this.array[i] = undefined;
                this.count--;
                break;
            }
            else {
                i = (base+step*step) % this.array.length;
            }
            step++;
        }
    }

    show()
    {
        console.table(this.array);
    }
}