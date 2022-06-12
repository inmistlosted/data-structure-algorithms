
/** ---------------------------- BPlus Tree ---------------------------- **/

const NKEYS = 4;

function arrayOfSize(size) {
    let a = Array(size);

    for (let i = 0; i < size; i += 1)
        a[i] = null;

    return a;
}

class NodeBPlus
{
    constructor()
    {
        this._keyCount = 0;
        this._keys = arrayOfSize(NKEYS);
        this._childs = arrayOfSize(NKEYS+1);
    }

    isLeaf()
    {
        return (this._childs[0] === null);
    }

    isFull()
    {
        return (this._keyCount === NKEYS);
    }

    keyCount()
    {
        return this._keyCount;
    }

    add(key)
    {
        if (this.isLeaf()) {
            if (this.isFull()) {
                return this.split(key, null);
            }
            else {
                this.insertKey(key);
                return null;
            }
        }
        else {
            let child = this.getChildContaining(key);

            let split = child.add(key);
            if (!split) return null;

            if (this.isFull()) {
                // split this node
                return this.split(split.key, split.right);
            }
            else {
                this.insertSplit(split);
                return null;
            }
        }
    }

    insertKey(key)
    {
        console.assert( this.isLeaf() );

        // perform insertion sort on keys

        let pos = this.keyCount();
        let keys = this._keys;

        while (pos > 0 && keys[pos-1] > key) {
            keys[pos] = keys[pos-1];
            pos--;
        }

        keys[pos] = key;
        this._keyCount += 1;
    }

    insertSplit(split)
    {
        // splited child
        let child = split.left;

        // insert key with right child poped up from
        // child node

        // case A: first child was split
        if (child === this._childs[0]) {
            for (let i = this._keyCount; i > 0; i--)
                this._keys[i] = this._keys[i-1];
            this._keys[0] = split.key;

            for (let i = this._keyCount+1; i > 1; i--)
                this._childs[i] = this._childs[i-1];
            this._childs[0] = child;
            this._childs[1] = split.right;
        }

        // case B: [key][split-child] (split child is on the right)
        else {
            let pos = this._keyCount;
            while (pos > 0 && this._childs[pos] !== child) {
                this._keys[pos] = this._keys[pos-1];
                this._childs[pos+1] = this._childs[pos];
                pos--;
            }

            this._keys[pos] = split.key;
            this._childs[pos+1] = split.right;
        }

        // rest
        this._keyCount += 1;
    }

    getChildContaining(key)
    {
        for (let i = 0; i < this.keyCount(); i += 1) {
            if (key <= this._keys[i]) {
                return this._childs[i];
            }
        }

        return this._childs[this.keyCount()];
    }

    split(key, keyRightChild)
    {
        let left = this;
        let right = new NodeBPlus();

        // temp storage for keys and childs
        let keys = this._keys.slice();
        keys.push(null);

        let childs = this._childs.slice();
        childs.push(null);

        // find new key position
        let pos = keys.length-1;
        while (pos > 0 && keys[pos-1] > key) {
            keys[pos] = keys[pos-1];
            childs[pos+1] = childs[pos];
            pos--;
        }

        keys[pos] = key;
        childs[pos+1] = keyRightChild;

        // split into two childs and key
        let medianIndex = Math.floor(keys.length / 2);
        let medianKey = this._keys[medianIndex];
        let i;

        // fix left child keys and childs
        for (i = 0; i < keys.length; i++) {
            if (i < medianIndex) {
                left._childs[i] = childs[i];
                left._keys[i] = keys[i];
            }
            else if (i === medianIndex) {
                left._childs[i] = childs[i];
                left._keys[i] = null;
            }
            else {
                left._childs[i] = this._keys[i] = null;
            }
        }
        left._keyCount = medianIndex;

        // fix right child keys and childs
        for (i = 0; i < keys.length; i++) {
            if (i > medianIndex) {
                right._keys[i-medianIndex-1] = keys[i];
                right._childs[i-medianIndex-1] = childs[i];
                right._keyCount += 1;
            }
        }
        right._childs[keys.length-medianIndex-1] = childs[keys.length];

        return ({ left:left, key:medianKey, right:right });
    }

    remove(key)
    {
        if (this.isLeaf()) {
            return this.removeKey(key);
        }
        else {
            let keyIndex = this.indexOfKey(key);
            let child;

            if (keyIndex === (-1)) {
                child = this.getChildContaining(key);
                let result = child.remove(key);

                this.rebalance(this._childs.indexOf(child));
                return result;
            }
            else {
                // replace key with max key from left child
                child = this._childs[keyIndex];
                this._keys[keyIndex] = child.extractMax();

                this.rebalance(keyIndex);
                return true;
            }
        }
    }

    rebalance(childIndex)
    {
        const MIN_NKEYS = (NKEYS/2);

        let child = this._childs[childIndex];
        if (child.keyCount() >= MIN_NKEYS) {
            return;
        }

        // borrow from left child
        if (childIndex) {
            let leftChild = this._childs[childIndex-1];
            if (leftChild.keyCount() > MIN_NKEYS) {
                let lastKey = leftChild._keys[leftChild.keyCount()-1];
                let lastChild = leftChild._child[leftChild.keyCount()];
                leftChild._keyCount--;

                let key = this._keys[childIndex-1];
                this._keys[childIndex-1] = lastKey;

                for (let i = child._keyCount-1; i >= 0; i--) {
                    child._keys[i+1] = child._keys[i];
                }
                child._keys[0] = key;

                for (let i = child._keyCount; i >= 0; i--) {
                    child._childs[i+1] = child._childs[i];
                }
                child._childs[0] = lastChild;
                child._keyCount++;

                return;
            }
        }

        // borrow from right child
        if (childIndex < this.keyCount()) {
            let rightChild = this._childs[childIndex+1];
            if (rightChild.keyCount() > MIN_NKEYS) {
                let firstKey = rightChild._keys[0];
                let firstChild = rightChild._childs[0];

                for (let i = 0; i < rightChild.keyCount()-1; i++) {
                    rightChild._keys[i] = rightChild._keys[i+1];
                }

                for (let i = 0; i < rightChild.keyCount(); i++) {
                    rightChild._childs[i] = rightChild._childs[i+1];
                }

                rightChild._keyCount--;

                child._keys[child.keyCount()] = this._keys[childIndex];
                this._keys[childIndex] = firstKey;
                child._childs[child.keyCount()+1] = firstChild;
                child._keyCount++;

                return;
            }
        }

        // merge
        if (childIndex) {
            // merge left and current
            childIndex -= 1;
        }

        // childIndex will point to the *left* node of two merged nodes

        let merged = this.mergeChilds(childIndex);

        for (let i = childIndex; i < this._keyCount-1; i += 1) {
            this._keys[i] = this._keys[i+1];
        }
        for (let i = childIndex; i < this._keyCount; i += 1) {
            this._childs[i] = this._childs[i+1];
        }
        this._keyCount--;
        this._childs[childIndex] = merged;
    }

    mergeChilds(leftIndex)
    {
        let key = this._keys[leftIndex];

        let left = this._childs[leftIndex];
        let right = this._childs[leftIndex+1];

        left._keys[left._keyCount] = key;
        left._keyCount++;

        // copy right keys and childs into left
        for (let i = 0; i < right._keyCount; i++) {
            left._childs[left._keyCount] = right._childs[i];
            left._keys[left._keyCount] = right._keys[i];
            left._keyCount += 1;
        }

        left._childs[left._keyCount] = right._childs[right._keyCount];

        return left;
    }

    extractMax()
    {
        let key;

        if (this.isLeaf()) {
            key = this._keys[this._keyCount-1];
            this._keyCount--;
        }
        else {
            let child = this._childs[this._keyCount];
            key = child.extractMax();

            this.rebalance(this._keyCount);
        }

        return key;
    }

    indexOfKey(key)
    {
        for (let i = 0; i < this._keyCount; i += 1) {
            if (this._keys[i] === key) {
                return i;
            }
        }

        return (-1);
    }

    removeKey(key)
    {
        console.assert( this.isLeaf() );

        let keyIndex = this.indexOfKey(key);
        if (keyIndex === (-1))
            return false;

        // delete key
        for (let i = keyIndex+1; i < this._keyCount; i += 1) {
            this._keys[i-1] = this._keys[i];
        }

        this._keyCount--;
        return true;
    }

    toString(indentOpt)
    {
        const INDENT_STRING = '  ';

        indentOpt = indentOpt || '';

        if (this.isLeaf()) {
            return indentOpt + '[' +
                this._keys.slice(0, this.keyCount()).join(', ') +
                ']';
        }

        let str = '';

        let childIndent = indentOpt + INDENT_STRING;
        let childStrings = this._childs.
        slice(0, this.keyCount()+1).
        map(function(child) {
            return child.toString(childIndent);
        });

        str = indentOpt + '[\n' + childStrings[0] + '\n';
        for (let i = 1; i < childStrings.length; i += 1) {
            str += childIndent + this._keys[i-1].toString() + '\n' +
                childStrings[i] + '\n';
        }
        str += indentOpt + ']';

        return str;
    }

    fromSplit(split)
    {
        let node = new NodeBPlus();

        node._keyCount = 1;
        node._keys[0] = split.key;
        node._childs[0] = split.left;
        node._childs[1] = split.right;

        return node;
    }
}

class BPlusTree
{
    constructor()
    {
        this._root = new NodeBPlus();
    }

    add(key)
    {
        let curr = this._root;

        let split = curr.add(key);
        if (!split) return;

        this._root = this._root.fromSplit(split);
    }

    remove(key)
    {
        let removed = this._root.remove(key);

        if (this._root.keyCount() === 0 && this._root._childs[0]) {
            this._root = this._root._childs[0];
        }

        return removed;
    }
    
    indexOf(key)
    {
        return this._root.indexOfKey(key);
    }
    
    toString()
    {
        return this._root.toString();
    }

}