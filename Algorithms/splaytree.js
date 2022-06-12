
/** ---------------------------- Splay Tree ---------------------------- **/

//Node Object
class NodeT
{
    constructor(key, val)
    {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//Splay Tree
class SplayBst
{
    constructor() {
        this.root = null;
    }

    search(k)
    {
        if (this.root === null || ( !(Number(k) || k === 0) && typeof k !== "string"))
            return null;

        this.splay(k);
        return this.root.key === k ? this.root : null;
    }


    insert(k,v)
    {
        let n;
        if (( !(Number(k) || k === 0) && typeof k !== "string")
            || ( !(Number(v) || v === 0) && typeof v !== "string"))
        {
            throw new Error("Invalid insert");
            return;
        }

        if (this.root === null)
        {
            this.root = new NodeT(k,v);
            return;
        }

        this.splay(k);

        if (this.root.key > k) {
            n = new NodeT(k,v);
            n.left = this.root.left;
            n.right = this.root;
            this.root.left = null;
            this.root = n;
        }
        else if (this.root.key < k)
        {
            n = new NodeT(k,v);
            n.right = this.root.right;
            n.left = this.root;
            this.root.right = null;
            this.root = n;
        }
        else
            {
            this.root.val = v;
        }
    }

    remove(k)
    {
        let temp;
        if (this.root === null || (!(Number(k) || k === 0) && typeof k !== "string"))
            return false;

        this.splay(k);

        if (this.root.key === k)
        {
            if (this.root.left === null && this.root.right === null)
            {
                this.root = null;
            }
            else if (this.root.left === null)
            {
                this.root = this.root.right;
            }
            else
                {
                temp = this.root.right;
                this.root = this.root.left;
                this.splay(k);
                this.root.right = temp;
            }
        }
    }

    min(n)
    {
        let current;
        let minRecursive = function(cNode) {
            if (cNode.left)
            {
                return minRecursive(cNode.left);
            }
            return cNode;
        };

        if (this.root === null)
            return null;

        if (n instanceof NodeT)
            current = n;
        else
            current = this.root;

        return minRecursive(current);
    }

    max(n)
    {
        let current;
        let maxRecursive = function(cNode) {
            if (cNode.right)
            {
                return maxRecursive(cNode.right);
            }
            return cNode;
        };

        if (this.root === null)
            return null;

        if (n instanceof NodeT)
            current = n;
        else
            current = this.root;

        return maxRecursive(current);
    }

    inOrder(n, fun)
    {
        if (n instanceof NodeT) {
            this.inOrder(n.left,fun);
            if (fun) {fun(n);}
            this.inOrder(n.right,fun);
        }
    }

    contains(k)
    {
        let containsRecursive = function(n) {
            if (n instanceof NodeT)
            {
                if (n.key === k)
                {
                    return true;
                }
                containsRecursive(n.left);
                containsRecursive(n.right);
            }
        };

        if (this.root === null || (!(Number(k) || k === 0) && typeof k !== "string"))
            return false;

        return containsRecursive(this.root) ? true : false;
    }

    rotateRight(n)
    {
        let temp;
        if (n instanceof NodeT)
        {
            temp = n.left;
            n.left = temp.right;
            temp.right = n;
        }
        return temp;
    }

    rotateLeft(n)
    {
        let temp;
        if (n instanceof NodeT)
        {
            temp = n.right;
            n.right = temp.left;
            temp.left = n;
        }
        return temp;
    }

    splay(k)
    {
        let splayRecursive = function(n, key) {
            if (n === null)
                return null;

            if (key < n.key) {
                if (n.left === null)
                    return n;

                if (key < n.left.key)
                {
                    n.left.left = splayRecursive(n.left.left, key);
                    n = this.rotateRight(n);
                }
                else if (key > n.left.key)
                {
                    n.left.right = splayRecursive(n.left.right, key);
                    if (n.left.right !== null)
                        n.left = this.rotateLeft(n.left);
                }

                if (n.left === null)
                    return n;
                else
                    return this.rotateRight(n);

            }
            else if (key > n.key)
            {
                if (n.right === null)
                    return n;

                if (key > n.right.key)
                {
                    n.right.right = splayRecursive(n.right.right, key);
                    n = this.rotateLeft(n);
                }
                else if (key < n.right.key)
                {
                    n.right.left = splayRecursive(n.right.left, key);
                    if (n.right.left !== null)
                        n.right = this.rotateRight(n.right);
                }

                if (n.right === null)
                    return n;
                else
                    return this.rotateLeft(n);

            }
            else
                {
                return n;
            }
        }.bind(this);

        if (this.root === null || (!(Number(k) || k === 0) && typeof k !== "string"))
        {
            throw new Error("Invalid splay");
            return;
        }

        this.root = splayRecursive(this.root,k);
        return;
    }
}
