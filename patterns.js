        /** Паттерн Abstract Factory **/
/** Створює структури даних різної спеціалізації **/
class DataStructureFactory
{
    /** Створює різні однозв'язні циклічні списки **/
    makeEmptyCyclicList()
    {
        return new CyclicList();
    }

    makeRandomCyclicList(number_of_elements)
    {
        let list = new CyclicList();
        for(let i = 0; i < number_of_elements; i++)
        {
            list.push_back(Math.floor(Math.random()*100));
        }
        return list;
    }

    makeFixedCyclicList()
    {
        let list = new CyclicList();
        list.push_back(calcRectSquare.toString());
        list.push_back(calcRectPer.toString());
        list.push_back(makeTri.toString());
        list.push_back(makeQuad.toString());
        list.push_back(makeRect.toString());
        return list;
    }

    makeOwnCyclicList(elems_arr)
    {
        let list = new CyclicList();
        for(let i = 0; i < elems_arr.length; i++)
        {
            list.push_back(elems_arr[i]);
        }
        return list;
    }
    /** --------------------------------------------- **/

    /** Створює різні Splay дерева **/
    makeEmptySplayTree()
    {
        return new SplayBst();
    }

    makeRandomSplayTree(number_of_elements)
    {
        let tree = new SplayBst();
        for(let i = 0; i < number_of_elements; i++)
        {
            tree.insert(Math.floor((Math.random()*1000)).toString(), (Math.floor(Math.random()*1000)).toString());
        }
        return tree;
    }

    makeFixedSplayTree()
    {
        let tree = new SplayBst();
        tree.insert((14409).toString(),calcTriPer.toString());
        tree.insert((7979).toString(),calcTriSquare.toString());
        tree.insert((4167).toString(),calcQuadPer.toString());
        tree.insert((10781).toString(),calcQuadSquare.toString());
        tree.insert((2657).toString(),calcDist.toString());
        return tree;
    }

    makeOwnSplayTree(keys_arr, elems_arr)
    {
        let tree = new SplayBst();
        for(let i = 0; i < elems_arr.length; i++)
        {
            tree.insert(keys_arr[i], elems_arr[i]);
        }
        return tree;
    }
    /** --------------------------------------------- **/

    /** Створює різні B+-дерева **/
    makeEmptyBPlusTree()
    {
        return new BPlusTree();
    }

    makeRandomBPlusTree(number_of_elements)
    {
        let tree = new BPlusTree();
        for(let i = 0; i < number_of_elements; i++)
        {
            tree.add(Math.floor(Math.random()*1000));
        }
        return tree;
    }

    makeFixedBPlusTree()
    {
        let tree = new BPlusTree();
        tree.add(makeTri.toString());
        tree.add(makeRect.toString());
        tree.add(Trian.toString());
        tree.add(Quad.toString());
        tree.add(Rect.toString());
        return tree;
    }

    makeOwnBPlusTree(elems_arr)
    {
        let tree = new BPlusTree();
        for(let i = 0; i < elems_arr.length; i++)
        {
            tree.add(elems_arr[i]);
        }
        return tree;
    }
    /** --------------------------------------------- **/

    /** Створює різні Hash-таблиці **/
    makeEmptyHashTable()
    {
        return new HashTable(1000);
    }

    makeRandomHashTable(number_of_elements)
    {
        let hash = new HashTable(1000);
        for(let i = 0; i < number_of_elements; i++)
        {
            hash.insert((Math.floor(Math.random()*1000)).toString(), (Math.floor(Math.random()*1000)).toString());
        }
        return hash;
    }

    makeFixedHashTable()
    {
        let hash = new HashTable(1000);
        hash.insert((4409).toString(),MathOrg.toString());
        hash.insert((7979).toString(),Geometry.toString());
        hash.insert((4167).toString(),Figures.toString());
        hash.insert((781).toString(),Trian.toString());
        hash.insert((2657).toString(),Rect.toString());
        return hash;
    }

    makeOwnHashTable(keys_arr, elems_arr)
    {
        let hash = new HashTable(1000);
        for(let i = 0; i < elems_arr.length; i++)
        {
            hash.insert(keys_arr[i], elems_arr[i]);
        }
        return hash;
    }
    /** --------------------------------------------- **/
}

                            /** Паттерн Decorator **/
/** Перетворює звичайний список в список для обчислення часу виконання операцій **/
class TimeMeasureListDecorator
{
    constructor(list)
    {
        this.list = list;
    }

    push_back(element)
    {
        let time = performance.now();
        this.list.push_back(element);
        time = performance.now() - time;
        return time;
    }

    insertAt(element, index)
    {
        let time = performance.now();
        const bool = this.list.insertAt(element, index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    removeFrom(index)
    {
        let time = performance.now();
        const bool = this.list.removeFrom(index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    findWithIndex(index)
    {
        let time = performance.now();
        const bool = this.list.findWithIndex(index);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return [bool,time];
    }

    getSize(){
        return this.list.size;
    }

    showList()
    {
        let curr = this.list.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}

                                /** Паттерн Decorator **/
/** Перетворює звичайне Splay дерево в Splay дерево для обчислення часу виконання операцій **/
class TimeMeasureSplayTreeDecorator
{
    constructor(tree)
    {
        this.tree = tree;
    }

    insert(k,v)
    {
        let time = performance.now();
        this.tree.insert(k,v);
        time = performance.now() - time;
        return time;
    }

    remove(k)
    {
        let time = performance.now();
        const bool = this.tree.remove(k);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    min(n)
    {
        let time = performance.now();
        const bool = this.tree.min(n);
        time = performance.now() - time;
        if(bool === null)
        {
            return bool;
        }
        return [bool,time];
    }

    max(n)
    {
        let time = performance.now();
        const bool = this.tree.max(n);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return [bool,time];
    }

    contains(k)
    {
        let time = performance.now();
        const bool = this.tree.contains(k);
        time = performance.now() - time;
        return [bool,time];
    }

    search(k)
    {
        let time = performance.now();
        const bool = this.tree.search(k);
        time = performance.now() - time;
        return [bool,time];
    }

    inOrder(n, fun)
    {
        if (n instanceof NodeT) {
            this.inOrder(n.left,fun);
            if (fun) {fun(n);}
            this.inOrder(n.right,fun);
        }
    }
}

                                /** Паттерн Decorator **/
/** Перетворює звичайне BPlus дерево в BPlus дерево для обчислення часу виконання операцій **/
class TimeMeasureBPlusTreeDecorator
{
    constructor(tree)
    {
        this.tree = tree;
    }

    add(key)
    {
        let time = performance.now();
        this.tree.add(key);
        time = performance.now() - time;
        return time;
    }

    remove(key)
    {
        let time = performance.now();
        const bool = this.tree.remove(key);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    toString()
    {
        return this.tree._root.toString();
    }
}

                                    /** Паттерн Decorator **/
/** Перетворює звичайну Hash-таблицю в Hash-таблицю для обчислення часу виконання операцій **/
class TimeMeasureHashTableDecorator
{
    constructor(hash)
    {
        this.hash = hash;
    }

    isFull()
    {
        let time = performance.now();
        this.hash.isFull();
        time = performance.now() - time;
        return time;
    }

    insert(key, value)
    {
        let time = performance.now();
        this.hash.insert(key, value);
        time = performance.now() - time;
        return time;
    }

    find(key)
    {
        let time = performance.now();
        const bool = this.hash.find(key);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return [bool,time];
    }

    remove(key)
    {
        let time = performance.now();
        const bool = this.hash.remove(key);
        time = performance.now() - time;
        if(bool === false)
        {
            return bool;
        }
        return time;
    }

    show()
    {
        console.table(this.hash.array);;
    }
}

                    /** Паттерн Adapter **/
/** Перетворює звичайний список в масив для використання в інших операціях **/
class ArrayAdapter
{
    makeArray(list)
    {
        let arr = [];
        while(list.size !== 0)
        {
            arr.push(list.removeFrom(0));
        }
        return arr;
    }

    makeList(array)
    {
        const lf = new DataStructureFactory();
        let list = lf.makeEmptyCyclicList();
        for(let i = 0; i < array.length; i++)
        {
            list.push_back(array[i]);
        }
        return list;
    }
}

                                        /** Паттерн Strategy **/
                        /** Стратегія для найбільш оптимального сортування списку і масиву **/
/** Якщо розмір списку < 5, то використовуєм SelectionSort, якщо > 5 i < 15 - HeapSort, якщо > 15 i < 50 - MergeSort, якщо > 50 - BucketSort **/
class SortingStrategy
{
    constructor()
    {
        this.usedMethod;
    }

    sort_up(list)
    {
        if(list.size <= 5)
        {
            this.usedMethod = 'SelectionSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = Selection_Sort(arr, function(a, b) { return a - b; })
            return arrAdapter.makeList(arr);
        }
        else if(list.size > 5 && list.size <= 15)
        {
            this.usedMethod = 'HeapSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            heapSort(arr);
            return arrAdapter.makeList(arr);
        }
        else if(list.size > 15 && list.size <= 50)
        {
            this.usedMethod = 'MergeSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = mergeSort(arr);
            return arrAdapter.makeList(arr);
        }
        else
        {
            this.usedMethod = 'BucketSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = bucketSort(arr);
            return arrAdapter.makeList(arr);
        }
    }

    sort_down(list)
    {
        if(list.size <= 5)
        {
            this.usedMethod = 'SelectionSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = Selection_Sort(arr, function(a, b) { return b - a; })
            return arrAdapter.makeList(arr);
        }
        else if(list.size > 5 && list.size <= 15)
        {
            this.usedMethod = 'HeapSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            heapSort(arr);
            arr.reverse();
            return arrAdapter.makeList(arr);
        }
        else if(list.size > 15 && list.size <= 50)
        {
            this.usedMethod = 'MergeSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = mergeSort(arr);
            arr.reverse();
            return arrAdapter.makeList(arr);
        }
        else
        {
            this.usedMethod = 'BucketSort';
            const arrAdapter = new ArrayAdapter();
            let arr = arrAdapter.makeArray(list);
            arr = bucketSort(arr);
            arr.reverse();
            return arrAdapter.makeList(arr);
        }
    }
    
    sort_arr(arr)
    {
        if(arr.length <= 5)
        {
            this.usedMethod = 'SelectionSort';
            arr = Selection_Sort(arr, function(a, b) { return a - b; })
            return arr;
        }
        else if(arr.length > 5 && arr.length <= 15)
        {
            this.usedMethod = 'HeapSort';
            heapSort(arr);
            return arr;
        }
        else if(arr.length > 15 && arr.length <= 50)
        {
            this.usedMethod = 'MergeSort';
            arr = mergeSort(arr);
            return arr;
        }
        else
        {
            this.usedMethod = 'BucketSort';
            arr = bucketSort(arr);
            return arr;
        }
    }
}

    /** Паттерн Iterator **/
/** Потрібний для обходу списку **/
class ListIterator
{

    showList(list)
    {
        let curr = list.head;
        let str = "";
        while (curr) {
            str += "[" + curr.element + "] ";
            curr = curr.next;
        }
        return str;
    }

    IndexOf(element, list)
    {
        let count = 0;
        let current = list.head;

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

    findWithIndex(index, list)
    {
        let count = 0;
        let current = list.head;

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

    SizeOfList(list)
    {
        return list.size;
    }
}

    /** Паттерн Iterator **/
/** Потрібний для обходу Hash-таблиці **/
class HashIterator
{
    find(key, hash)
    {
        let i = key % hash.array.length;
        let base = i;
        let step = 1;
        while(true) {
            if (!hash.array[i]) {
                return false;
            }
            else if (hash.array[i].key === key) {
                return hash.array[i].value;
            }
            else {
                i = (base+step*step) % hash.array.length;
            }
            step++;
        }
    }

    show(hash)
    {
        console.table(hash.array);
    }
}

    /** Паттерн Iterator **/
/** Потрібний для обходу Splay-дерева **/
class SplayTreeIterator
{
    search(k, tree)
    {
        if (tree.root === null || ( !(Number(k) || k === 0) && typeof k !== "string"))
            return null;

        tree.splay(k);
        return tree.root.key === k ? tree.root.val : null;
    }

    inOrder(n, fun)
    {
        if (n instanceof NodeT) {
            this.inOrder(n.left,fun);
            if (fun) {fun(n);}
            this.inOrder(n.right,fun);
        }
    }
}

    /** Паттерн Iterator **/
/** Потрібний для обходу B+-дерева **/
class BPlusTreeIterator
{
    indexOf(key, tree)
    {
        return tree._root.indexOfKey(key);
    }

    toString(tree)
    {
        return tree._root.toString();
    }
}

