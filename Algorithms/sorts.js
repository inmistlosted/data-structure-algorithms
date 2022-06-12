
/** --------------------Selection Sort-------------------- **/

function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
        return a - b;
    }
    var min = 0;
    var index = 0;
    var temp = 0;

    compare_Function = compare_Function || compare;

    for (var i = 0; i < arr.length; i += 1) {
        index = i;
        min = arr[i];

        for (var j = i + 1; j < arr.length; j += 1) {
            if (compare_Function(min, arr[j]) > 0) {
                min = arr[j];
                index = j;
            }
        }

        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    return arr;
}

/** --------------------Heap Sort-------------------- **/

var array_length;
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {

    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;


        heap_root(input, 0);
    }
}

/** --------------------Merge Sort-------------------- **/

function mergeSort(arr)
{
    let len = arr.length;
    if(len <2)
    {
        return arr;
    }
    let mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right)
{
    let result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen)
    {
        if(left[l] < right[r])
        {
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

/** --------------------Bucket Sort-------------------- **/

function bucketSort(list,bucketCount){
    var min = Math.min.apply(Math,list),
        buckets = [],
        bucket_count = bucketCount || 200;
    
    for(var i = 0;i<list.length;i++){
        // this is a simple hash function that will make sure the basic rule of bucket sort
        var newIndex = Math.floor( (list[i] - min) / bucket_count );
        buckets[newIndex] = buckets[newIndex] || [];
        buckets[newIndex].push(list[i]);
    }
    // refill the elements into the list
    var idx = 0;
    for(i = 0;i<buckets.length;i++){
        if(typeof buckets[i] !== "undefined"){
            // select those non-empty buckets
            Selection_Sort(buckets[i]);  // use any sorting algorithm would be fine
            // sort the elements in the bucket
            for(var j = 0;j<buckets[i].length;j++){
                list[idx++] = buckets[i][j];
            }
        }
    }
    return list;
}