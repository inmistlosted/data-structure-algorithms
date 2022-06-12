/** ------------------------------------------------Set------------------------------------------------------- **/

document.getElementById('set').onclick = function () {
    const choose = document.getElementById('choose_typeof_set');
    const close = document.getElementById('choose_functionality');
    const title = document.getElementById("set_title");
    title.style.display = 'block';
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_list_based').onclick = function () {
    const choose = document.getElementById('set_choose');
    const close = document.getElementById('choose_typeof_set');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина(Cycled-List based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_hash_based').onclick = function () {
    const choose = document.getElementById('set_choose_hash');
    const close = document.getElementById('choose_typeof_set');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина(Hash-Table based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_tree_based').onclick = function () {
    const choose = document.getElementById('set_choose_tree');
    const close = document.getElementById('choose_typeof_set');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина(B+-Tree based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_other_func').onclick = function () {
    const close = document.getElementById('choose_typeof_set');
    const choose = document.getElementById('choose_functionality');
    const title = document.getElementById("set_title");
    title.style.display = 'none';
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_other_realiz').onclick = function () {
    const choose = document.getElementById('choose_typeof_set');
    const close = document.getElementById('set_choose');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_other_realiz_hash').onclick = function () {
    const choose = document.getElementById('choose_typeof_set');
    const close = document.getElementById('set_choose_hash');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('set_other_realiz_tree').onclick = function () {
    const choose = document.getElementById('choose_typeof_set');
    const close = document.getElementById('set_choose_tree');
    const title = document.getElementById("set_title");
    title.innerHTML = "Множина";
    choose.style.display = 'block';
    close.style.display = 'none';
}

/** ---------------------------------------------Based on Cycled List----------------------------------------------- **/

function set_list_show_values(list)
{
    const listIterator = new ListIterator();
    if(listIterator.showList(list) === "")
    {
        alert('Множина: *EMPTY*');
    }
    else
    {
        alert("Множина: " + listIterator.showList(list));
    }
}

function set_list_push(list)
{
    let element = prompt('Введіть елемент щоб додати до множини:');
    if(element === null || element === "")
    {
        list.push_back(0);
    }
    else
    {
        list.push_back(+element);
    }
    return sortList(list);
}

function set_list_removeElement(list)
{
    if(list.isEmpty())
    {
        alert("Множина порожня! Додайте щось в неї спочатку");
    }
    else
    {
        let element = prompt('Введіть елемент, який потрібно видалити із множини:');
        if(element === null || element === "")
        {
            alert("Введіть елемент буль-ласка");
        }
        else if(list.removeElement(+element) === false)
        {
            alert("Введений елемент НЕ НАЛЕЖИТЬ множині");
        }
        else
        {
            alert(`Eлемент ${element} успішно видалений`);
        }
    }
}

function set_list_findIndex(list)
{
    if(list.isEmpty())
    {
        alert("Множина порожня! Додайте щось в неї спочатку");
    }
    else
    {
        let element = prompt('Введіть елемент, який потрібно перевірити на приналежність множині:');
        const listIterator = new ListIterator();

        if(element === null || element === "")
        {
            alert("Введіть елемент буль-ласка");
        }
        else if(listIterator.IndexOf(+element,list) === false)
        {
            alert("Введений елемент НЕ НАЛЕЖИТЬ множині");
        }
        else
        {
            alert(`Введений елемент НАЛЕЖИТЬ множині`);
        }
    }
}

function set_list_union(list)
{
    const listFactory = new DataStructureFactory();
    let un_list = listFactory.makeRandomCyclicList(10);
    const listIterator = new ListIterator();
    alert(`Об'єднано з множиною ${listIterator.showList(un_list)}`);

    const arrAdapter = new ArrayAdapter();
    let arr1 = arrAdapter.makeArray(list);
    let arr2 = arrAdapter.makeArray(un_list);
    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr2.splice(j, 1);
            }
        }
    }

    for(let k = 0; k<arr2.length; k++)
    {
        arr1 = [...arr1, arr2[k]];
    }
    arr1.sort((a,b) => a-b);
    return arrAdapter.makeList(arr1);
}

function set_list_sect(list)
{
    const listFactory = new DataStructureFactory();
    let un_list = listFactory.makeRandomCyclicList(10);
    const listIterator = new ListIterator();
    alert(`Перетин з множиною ${listIterator.showList(un_list)}`);

    const arrAdapter = new ArrayAdapter();
    let arr1 = arrAdapter.makeArray(list);
    let arr2 = arrAdapter.makeArray(un_list);
    let arr3 = [];
    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr3.push(arr1[i]);
            }
        }
    }

    arr3.sort((a,b) => a-b);
    return arrAdapter.makeList(arr3);
}

function set_list_tract(list)
{
    const listFactory = new DataStructureFactory();
    let un_list = listFactory.makeRandomCyclicList(10);
    const listIterator = new ListIterator();
    alert(`Різниця з множиною ${listIterator.showList(un_list)}`);

    const arrAdapter = new ArrayAdapter();
    let arr1 = arrAdapter.makeArray(list);
    let arr2 = arrAdapter.makeArray(un_list);
    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr1.splice(i, 1);
            }
        }
    }

    arr1.sort((a,b) => a-b);
    return arrAdapter.makeList(arr1);
}

function set_list_symtract(list)
{
    const listFactory = new DataStructureFactory();
    let un_list = listFactory.makeRandomCyclicList(10);
    const listIterator = new ListIterator();
    alert(`Симетрична різниця з множиною ${listIterator.showList(un_list)}`);
    
    const arrAdapter = new ArrayAdapter();
    let arr1 = arrAdapter.makeArray(list);
    let arr2 = arrAdapter.makeArray(un_list);
    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
            }
        }
    }

    for(let k = 0; k<arr2.length; k++)
    {
        arr1 = [...arr1, arr2[k]];
    }
    arr1.sort((a,b) => a-b);
    return arrAdapter.makeList(arr1);
}

document.getElementById('set_empty_list_choose').onclick = function()
{
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeEmptyCyclicList();

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {list = set_list_push(list);}
    document.getElementById('set_check').onclick = function () {set_list_findIndex(list);}
    document.getElementById('set_rem').onclick = function () {set_list_removeElement(list);}
    document.getElementById('set_un').onclick = function () {list = set_list_union(list);}
    document.getElementById('set_sect').onclick = function () {list = set_list_sect(list);}
    document.getElementById('set_tract').onclick = function () {list = set_list_tract(list);}
    document.getElementById('set_symtract').onclick = function () {list = set_list_symtract(list)}
    document.getElementById('set_show').onclick = function () {set_list_show_values(list);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_random_list').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у множині: ');
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeRandomCyclicList(number);
    list = sortList(list);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {list = set_list_push(list);}
    document.getElementById('set_check').onclick = function () {set_list_findIndex(list);}
    document.getElementById('set_rem').onclick = function () {set_list_removeElement(list);}
    document.getElementById('set_un').onclick = function () {list = set_list_union(list);}
    document.getElementById('set_sect').onclick = function () {list = set_list_sect(list);}
    document.getElementById('set_tract').onclick = function () {list = set_list_tract(list);}
    document.getElementById('set_symtract').onclick = function () {list = set_list_symtract(list)}
    document.getElementById('set_show').onclick = function () {set_list_show_values(list);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_cstm_list').onclick = function()
{
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeFixedCyclicList();

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {list = set_list_push(list);}
    document.getElementById('set_check').onclick = function () {set_list_findIndex(list);}
    document.getElementById('set_rem').onclick = function () {set_list_removeElement(list);}
    document.getElementById('set_un').onclick = function () {list = set_list_union(list);}
    document.getElementById('set_sect').onclick = function () {list = set_list_sect(list);}
    document.getElementById('set_tract').onclick = function () {list = set_list_tract(list);}
    document.getElementById('set_symtract').onclick = function () {list = set_list_symtract(list)}
    document.getElementById('set_show').onclick = function () {set_list_show_values(list);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_own_list').onclick = function()
{
    let number = +prompt('Enter number of elements in list: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Enter element: ");
        elements = [...elements, elem];
    }
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeOwnCyclicList(elements);
    list = sortList(list);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {list = set_list_push(list);}
    document.getElementById('set_check').onclick = function () {set_list_findIndex(list);}
    document.getElementById('set_rem').onclick = function () {set_list_removeElement(list);}
    document.getElementById('set_un').onclick = function () {list = set_list_union(list);}
    document.getElementById('set_sect').onclick = function () {list = set_list_sect(list);}
    document.getElementById('set_tract').onclick = function () {list = set_list_tract(list);}
    document.getElementById('set_symtract').onclick = function () {list = set_list_symtract(list)}
    document.getElementById('set_show').onclick = function () {set_list_show_values(list);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ---------------------------------------------------------------------------------------------------------------- **/

/** ------------------------------------------Based on Hash Table--------------------------------------------------- **/

function set_hash_show_values(hash)
{
    let str = "Множина: ";
    for(let i = 0; i < hash.array.length; i++)
    {
        if(hash.array[i] !== undefined)
        {
            str += `[${hash.array[i].value}]     `;
        }
    }
    if (str === "Множина: ")
    {
        alert("Множина: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function set_hash_push(hash)
{
    let element = prompt('Введіть значення, яке потрібно додати у множини:');
    if(element === null || element === "")
    {
        hash.insert(0,0);
    }
    else
    {
        hash.insert(element,element);
    }
}

function set_hash_removeElement(hash)
{
    let elem = prompt('Введіть елемент, який потрібно видалити із множини:');
    if(elem === null || elem === "")
    {
        alert("Введіть елемент будь-ласка");
    }
    else if(hash.remove(elem) === false)
    {
        alert("Елемента з таким ключем немає в множині");
    }
    else
    {
        alert(`Елемент ${elem} видалений`);
    }
}

function set_hash_findIndex(hash)
{
    
    let element = prompt('Введіть елемент, який потрібно перевірити на приналежність множині:');
    const hashIterator = new HashIterator();

    if(element === null || element === "")
    {
        alert("Введіть елемент буль-ласка");
    }
    else if(hashIterator.find(element,hash) === false)
    {
        alert("Введений елемент НЕ НАЛЕЖИТЬ множині");
    }
    else {
        alert(`Введений елемент НАЛЕЖИТЬ множині`);
    }
}

function set_hash_union(hash)
{
    const hashFactory = new DataStructureFactory();
    let un_hash = hashFactory.makeRandomHashTable(10);
    let str = '';
    for(let k = 0; k < un_hash.array.length; k++)
    {
        if(un_hash.array[k] !== undefined)
        {
            str += `${un_hash.array[k].value}     `;
        }
    }
    alert(`Об'єднано з множиною ${str}`);

    for(let l = 0; l<un_hash.array.length; l++)
    {
        if(un_hash.array[l] !== undefined)
        {
            hash.insert(un_hash.array[l].value, un_hash.array[l].value);
        }
    }
}

function set_hash_sect(hash)
{
    const hashFactory = new DataStructureFactory();
    let un_hash = hashFactory.makeRandomHashTable(10);
    let new_hash = hashFactory.makeEmptyHashTable();
    let str = '';
    for(let k = 0; k < un_hash.array.length; k++)
    {
        if(un_hash.array[k] !== undefined)
        {
            str += `${un_hash.array[k].value}     `;
        }
    }
    alert(`Перетин з множиною ${str}`);

    for(let i = 0; i < hash.array.length; i++)
    {
        for(let j = 0; j < un_hash.array.length; j++)
        {
            if(hash.array[i] !== undefined && un_hash.array[j] !== undefined)
            {
                if(hash.array[i].value === un_hash.array[j].value)
                {
                    new_hash.insert(hash.array[i].value,hash.array[i].value);
                }
            }

        }
    }
    return new_hash;
}

function set_hash_tract(hash) {
    const hashFactory = new DataStructureFactory();
    let un_hash = hashFactory.makeRandomHashTable(10);
    let str = '';
    for (let k = 0; k < un_hash.array.length; k++) {
        if (un_hash.array[k] !== undefined) {
            str += `${un_hash.array[k].value}     `;
        }
    }
    alert(`Симетрична різниця з множиною ${str}`);

    for (let i = 0; i < hash.array.length; i++) {
        for (let j = 0; j < un_hash.array.length; j++) {
            if (hash.array[i] !== undefined && un_hash.array[j] !== undefined)
            {
                if (hash.array[i].value === un_hash.array[j].value) {
                    hash.remove(hash.array[i].value);
                }
            }
        }
    }
}

function set_hash_symtract(hash) {
    let arr = [];
    for (let h = 0; h < 10; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    
    const hashFactory = new DataStructureFactory();
    let un_hash = hashFactory.makeOwnHashTable(arr,arr);
    let str = '';
    for (let k = 0; k < un_hash.array.length; k++) {
        if (un_hash.array[k] !== undefined) {
            str += `${un_hash.array[k].value}     `;
        }
    }
    alert(`Симетрична різниця з множиною ${str}`);

    for (let i = 0; i < hash.array.length; i++) {
        for (let j = 0; j < un_hash.array.length; j++) {
            if (hash.array[i] !== undefined && un_hash.array[j] !== undefined) {
                if (hash.array[i].value === un_hash.array[j].value) {
                    un_hash.remove(un_hash.array[j].value);
                    hash.remove(hash.array[i].value);
                }
            }
        }
    }

    for (let l = 0; l < un_hash.array.length; l++) {
        if (un_hash.array[l] !== undefined) {
            hash.insert(un_hash.array[l].value, un_hash.array[l].value);
        }
    }
}

document.getElementById('set_empty_hash_choose').onclick = function()
{
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeEmptyHashTable();

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_hash_push(hash);}
    document.getElementById('set_check').onclick = function () {set_hash_findIndex(hash);}
    document.getElementById('set_rem').onclick = function () {set_hash_removeElement(hash);}
    document.getElementById('set_un').onclick = function () {set_hash_union(hash);}
    document.getElementById('set_sect').onclick = function () {hash = set_hash_sect(hash);}
    document.getElementById('set_tract').onclick = function () {set_hash_tract(hash);}
    document.getElementById('set_symtract').onclick = function () {set_hash_symtract(hash)}
    document.getElementById('set_show').onclick = function () {set_hash_show_values(hash);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_random_hash').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у множині: ');
    let arr = [];
    for (let h = 0; h < number; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeOwnHashTable(arr,arr);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_hash_push(hash);}
    document.getElementById('set_check').onclick = function () {set_hash_findIndex(hash);}
    document.getElementById('set_rem').onclick = function () {set_hash_removeElement(hash);}
    document.getElementById('set_un').onclick = function () {set_hash_union(hash);}
    document.getElementById('set_sect').onclick = function () {hash = set_hash_sect(hash);}
    document.getElementById('set_tract').onclick = function () {set_hash_tract(hash);}
    document.getElementById('set_symtract').onclick = function () {set_hash_symtract(hash)}
    document.getElementById('set_show').onclick = function () {set_hash_show_values(hash);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_cstm_hash').onclick = function()
{
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeFixedHashTable();

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_hash_push(hash);}
    document.getElementById('set_check').onclick = function () {set_hash_findIndex(hash);}
    document.getElementById('set_rem').onclick = function () {set_hash_removeElement(hash);}
    document.getElementById('set_un').onclick = function () {set_hash_union(hash);}
    document.getElementById('set_sect').onclick = function () {hash = set_hash_sect(hash);}
    document.getElementById('set_tract').onclick = function () {set_hash_tract(hash);}
    document.getElementById('set_symtract').onclick = function () {set_hash_symtract(hash)}
    document.getElementById('set_show').onclick = function () {set_hash_show_values(hash);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_own_hash').onclick = function()
{

    let number = +prompt('Ведіть кількість елементів у множині: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Введіть елемент: ");
        elements = [...elements, elem];
    }
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeOwnHashTable(elements,elements);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_hash_push(hash);}
    document.getElementById('set_check').onclick = function () {set_hash_findIndex(hash);}
    document.getElementById('set_rem').onclick = function () {set_hash_removeElement(hash);}
    document.getElementById('set_un').onclick = function () {set_hash_union(hash);}
    document.getElementById('set_sect').onclick = function () {hash = set_hash_sect(hash);}
    document.getElementById('set_tract').onclick = function () {set_hash_tract(hash);}
    document.getElementById('set_symtract').onclick = function () {set_hash_symtract(hash)}
    document.getElementById('set_show').onclick = function () {set_hash_show_values(hash);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ---------------------------------------------------------------------------------------------------------------- **/


/** -------------------------------------------------Based on B+ Tree----------------------------------------------- **/


function set_tree_show_values(tree)
{
    let str = "Множина: ";
    let trace = function(node) {
        str += `[${node.val}]  `;
    }
    tree.inOrder(tree.root, trace);
    
    if (str === "Множина: ")
    {
        alert("Множина: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function set_tree_push(tree)
{
    let element = prompt('Введіть значення, яке потрібно додати у множинy:');
    if(element === null || element === "")
    {
        tree.insert(0,0);
    }
    else
    {
        tree.insert(element,element);
    }
}

function set_tree_removeElement(tree)
{
    let elem = prompt('Введіть елемент, який потрібно видалити із множини:');
    if(elem === null || elem === "")
    {
        alert("Введіть елемент будь-ласка");
    }
    else if(tree.remove(elem) === false)
    {
        alert("Елемента з таким ключем немає в множині");
    }
    else
    {
        alert(`Елемент ${elem} видалений`);
    }
}

function set_tree_findIndex(tree)
{
    let element = prompt('Введіть елемент, який потрібно перевірити на приналежність множині:');
    const treeIterator = new SplayTreeIterator();

    if(element === null || element === "")
    {
        alert("Введіть елемент буль-ласка");
    }
    else if(treeIterator.search(element,tree) === null)
    {
        alert("Введений елемент НЕ НАЛЕЖИТЬ множині");
    }
    else {
        alert(`Введений елемент НАЛЕЖИТЬ множині`);
    }
}

function set_tree_union(tree)
{
    const treeFactory = new DataStructureFactory();
    let un_tree = treeFactory.makeRandomSplayTree(10);
    let arr = [];
    let str = "";
    let trace = function(node) {
        arr.push(node.val);
    }
    un_tree.inOrder(un_tree.root, trace);
    
    for(let i = 0;i < arr.length;i++)
    {
        str += arr[i] + "  ";
    }
    alert(`Об'єднано з множиною ${str}`);

    for(let l = 0; l<arr.length; l++)
    {
        tree.insert(arr[l], arr[l]);
    }
}

function set_tree_sect(tree)
{
    let arr = [];
    for (let h = 0; h < 10; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    
    const treeFactory = new DataStructureFactory();
    let un_tree = treeFactory.makeOwnSplayTree(arr,arr);
    let new_tree = treeFactory.makeEmptySplayTree();
    let arr1 = [];
    let arr2 = [];
    let str = "";
    let trace1 = function(node) {
        arr1.push(node.val);
    }
    let trace2 = function(node) {
        arr2.push(node.val);
    }
    un_tree.inOrder(un_tree.root, trace1);
    tree.inOrder(tree.root, trace2);
    for(let i = 0;i < arr1.length;i++)
    {
        str += arr1[i] + "  ";
    }
    alert(`Перетин з множиною ${str}`);

    for(let i = 0; i < arr1.length; i++)
    {
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                new_tree.insert(arr1[i],arr1[i]);
            }
        }
    }

    return new_tree;
}

function set_tree_tract(tree) {
    let arr = [];
    for (let h = 0; h < 10; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    
    const treeFactory = new DataStructureFactory();
    let un_tree = treeFactory.makeOwnSplayTree(arr,arr);
    let arr1 = [];
    let arr2 = [];
    let str = "";
    let trace1 = function(node) {
        arr1.push(node.val);
    }
    let trace2 = function(node) {
        arr2.push(node.val);
    }
    un_tree.inOrder(un_tree.root, trace1);
    tree.inOrder(tree.root, trace2);
    for(let i = 0;i < arr1.length;i++)
    {
        str += arr1[i] + "  ";
    }
    alert(`Різниця з множиною ${str}`);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                tree.remove(arr1[i]);
            }
        }
    }
}

function set_tree_symtract(tree) {
    let arr = [];
    for (let h = 0; h < 10; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    
    const treeFactory = new DataStructureFactory();
    let un_tree = treeFactory.makeOwnSplayTree(arr,arr);
    let arr1 = [];
    let arr2 = [];
    let str = "";
    let trace1 = function(node) {
        arr1.push(node.val);
    }
    let trace2 = function(node) {
        arr2.push(node.val);
    }
    un_tree.inOrder(un_tree.root, trace1);
    tree.inOrder(tree.root, trace2);
    for(let i = 0;i < arr1.length;i++)
    {
        str += arr1[i] + "  ";
    }
    alert(`Симетрична різниця з множиною ${str}`);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(j,1);
                tree.remove(arr1[i]);
            }
        }
    }

    for (let l = 0; l < arr1.length; l++) {
        tree.insert(arr1[l],arr1[l]);
    }
}

document.getElementById('set_random_tree').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у множині: ');
    let arr = [];
    for (let h = 0; h < number; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeOwnSplayTree(arr,arr);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_tree_push(tree);}
    document.getElementById('set_check').onclick = function () {set_tree_findIndex(tree);}
    document.getElementById('set_rem').onclick = function () {set_tree_removeElement(tree);}
    document.getElementById('set_un').onclick = function () {set_tree_union(tree);}
    document.getElementById('set_sect').onclick = function () {tree = set_tree_sect(tree);}
    document.getElementById('set_tract').onclick = function () {set_tree_tract(tree);}
    document.getElementById('set_symtract').onclick = function () {set_tree_symtract(tree)}
    document.getElementById('set_show').onclick = function () {set_tree_show_values(tree);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_empty_tree_choose').onclick = function()
{
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeEmptySplayTree();
    
    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_tree_push(tree);}
    document.getElementById('set_check').onclick = function () {set_tree_findIndex(tree);}
    document.getElementById('set_rem').onclick = function () {set_tree_removeElement(tree);}
    document.getElementById('set_un').onclick = function () {set_tree_union(tree);}
    document.getElementById('set_sect').onclick = function () {tree = set_tree_sect(tree);}
    document.getElementById('set_tract').onclick = function () {set_tree_tract(tree);}
    document.getElementById('set_symtract').onclick = function () {set_tree_symtract(tree)}
    document.getElementById('set_show').onclick = function () {set_tree_show_values(tree);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_cstm_tree').onclick = function()
{
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeFixedSplayTree();

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_tree_push(tree);}
    document.getElementById('set_check').onclick = function () {set_tree_findIndex(tree);}
    document.getElementById('set_rem').onclick = function () {set_tree_removeElement(tree);}
    document.getElementById('set_un').onclick = function () {set_tree_union(tree);}
    document.getElementById('set_sect').onclick = function () {tree = set_tree_sect(tree);}
    document.getElementById('set_tract').onclick = function () {set_tree_tract(tree);}
    document.getElementById('set_symtract').onclick = function () {set_tree_symtract(tree)}
    document.getElementById('set_show').onclick = function () {set_tree_show_values(tree);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('set_own_tree').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у множині: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Введіть елемент: ");
        elements = [...elements, elem];
    }

    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeOwnSplayTree(elements,elements);

    const empty_list = document.getElementById('set_list');
    empty_list.style.display = 'block';

    document.getElementById('set_push').onclick = function() {set_tree_push(tree);}
    document.getElementById('set_check').onclick = function () {set_tree_findIndex(tree);}
    document.getElementById('set_rem').onclick = function () {set_tree_removeElement(tree);}
    document.getElementById('set_un').onclick = function () {set_tree_union(tree);}
    document.getElementById('set_sect').onclick = function () {tree = set_tree_sect(tree);}
    document.getElementById('set_tract').onclick = function () {set_tree_tract(tree);}
    document.getElementById('set_symtract').onclick = function () {set_tree_symtract(tree)}
    document.getElementById('set_show').onclick = function () {set_tree_show_values(tree);}
    document.getElementById('other_set').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ------------------------------------------------------------------------------------------------------- **/