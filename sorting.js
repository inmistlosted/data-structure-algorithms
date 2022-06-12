/** ------------------------------------------------Sorting------------------------------------------------------- **/

document.getElementById('sorting').onclick = function () {
    const choose = document.getElementById('choose_typeof_sorting');
    const close = document.getElementById('choose_functionality');
    const title = document.getElementById("sort_title");
    title.style.display = 'block';
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('sort_list_based').onclick = function () {
    const choose = document.getElementById('sort_choose');
    const close = document.getElementById('choose_typeof_sorting');
    const title = document.getElementById("sort_title");
    title.innerHTML = "Сортування(Cycled-List based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('sort_tree_based').onclick = function () {
    const choose = document.getElementById('sort_choose_tree');
    const close = document.getElementById('choose_typeof_sorting');
    const title = document.getElementById("sort_title");
    title.innerHTML = "Сортування(Splay-Tree based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('sort_other_func').onclick = function () {
    const close = document.getElementById('choose_typeof_sorting');
    const choose = document.getElementById('choose_functionality');
    const title = document.getElementById("sort_title");
    title.style.display = 'none';
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('sort_other_realiz').onclick = function () {
    const choose = document.getElementById('choose_typeof_sorting');
    const close = document.getElementById('sort_choose');
    const title = document.getElementById("sort_title");
    title.innerHTML = "Сортування";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('sort_other_realiz_tree').onclick = function () {
    const choose = document.getElementById('choose_typeof_sorting');
    const close = document.getElementById('sort_choose_tree');
    const title = document.getElementById("sort_title");
    title.innerHTML = "Сортування";
    choose.style.display = 'block';
    close.style.display = 'none';
}

/** ---------------------------------------------Based on Cycled List----------------------------------------------- **/


function sort_list_showValues(list)
{
    const listIterator = new ListIterator();
    if(listIterator.showList(list) === "")
    {
        alert('*EMPTY*');
    }
    else
    {
        alert("Контейнер: " + listIterator.showList(list));
    }
}

function sort_list_push(list)
{
    let element = prompt('Введіть елемент щоб додати у контейнер:');
    if(element === null || element === "")
    {
        list.push_back(0);
    }
    else
    {
        list.push_back(+element);
    }
}

function sort_list_sortUp(list)
{
    if(list.isEmpty())
    {
        alert("Контейнер пустий! Введіть щось спочатку");
    }
    else
    {
        const sortStrat = new SortingStrategy();
        list = sortStrat.sort_up(list);
        alert(`Відсортовано`);
        return list;
    }
}

function sort_list_sortDown(list)
{
    if(list.isEmpty())
    {
        alert("Контейнер пустий! Введіть щось спочатку");
    }
    else
    {
        const sortStrat = new SortingStrategy();
        list = sortStrat.sort_down(list);
        alert(`Відсортовано`);
        return list;
    }
}

function sort_list_receiveStart(list)
{
    const arrAdapter = new ArrayAdapter();
    let arr = arrAdapter.makeArray(list);
    let arr1 = [];
    let number = +prompt('Введіть кількість елементів, щоб отримати з початку контейнера');
    arr1 = arr.slice(0,number);
    let str = `${number} елементів з початку контейнера: `;
    for(let i = 0;i<arr1.length;i++)
    {
        str += arr1[i] + " ";
    }
    alert(str);
    return arrAdapter.makeList(arr);
}

function sort_list_receiveEnd(list)
{
    const arrAdapter = new ArrayAdapter();
    let list1 = list;
    let arr = arrAdapter.makeArray(list1);
    let arr1 = [];
    let number = +prompt('Введіть кількість елементів, щоб отримати з кінця контейнера');
    arr1 = arr.slice(arr.length - number);
    let str = `${number} елементів з кінця контейнера: `;
    for(let i = 0;i<arr1.length;i++)
    {
        str += arr1[i] + " ";
    }
    alert(str);
    return arrAdapter.makeList(arr);
}

function sort_list_receiveMid(list)
{
    const arrAdapter = new ArrayAdapter();
    let list1 = list;
    let arr = arrAdapter.makeArray(list1);
    let arr1 = [];
    let number = +prompt('Введіть кількість елементів, щоб отримати з середини контейнера');
    arr1 = arr.slice(arr.length/2 - number/2, arr.length/2 - number/2  + number);
    let str = `${number} елементів з середини контейнера: `;
    for(let i = 0;i<arr1.length;i++)
    {
        str += arr1[i] + " ";
    }
    alert(str);
    return arrAdapter.makeList(arr);
}

function sort_list_receivePos(list)
{
    const arrAdapter = new ArrayAdapter();
    let list1 = list;
    let arr = arrAdapter.makeArray(list1);
    let arr1 = [];
    let number1 = +prompt('Введіть позицію першого елемента');
    let number2 = +prompt('Введіть позицію другого елемента');
    
    if(number1 < number2)
    {
        arr1 = arr.slice(number1, number2+1);
    }
    else
    {
        alert("Перше число повинно бути менше другого!!!");
    }

    let str = ` Між ${number1} і ${number2} знаходяться: `;
    for(let i = 0;i<arr1.length;i++)
    {
        str += arr1[i] + " ";
    }
    alert(str);
    return arrAdapter.makeList(arr);
}

document.getElementById('sort_empty_list_choose').onclick = function()
{
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeEmptyCyclicList();

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_list_push(list);}
    document.getElementById('sort_up').onclick = function () {list = sort_list_sortUp(list);}
    document.getElementById('sort_down').onclick = function () {list = sort_list_sortDown(list);}
    document.getElementById('sort_start').onclick = function () {list = sort_list_receiveStart(list);}
    document.getElementById('sort_end').onclick = function () {list = sort_list_receiveEnd(list);}
    document.getElementById('sort_mid').onclick = function () {list = sort_list_receiveMid(list);}
    document.getElementById('sort_pos').onclick = function () {list = sort_list_receivePos(list);}
    document.getElementById('sort_show').onclick = function () {sort_list_showValues(list);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_random_list').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у контейнері: ');
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeRandomCyclicList(number);

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_list_push(list);}
    document.getElementById('sort_up').onclick = function () {list = sort_list_sortUp(list);}
    document.getElementById('sort_down').onclick = function () {list = sort_list_sortDown(list);}
    document.getElementById('sort_start').onclick = function () {list = sort_list_receiveStart(list);}
    document.getElementById('sort_end').onclick = function () {list = sort_list_receiveEnd(list);}
    document.getElementById('sort_mid').onclick = function () {list = sort_list_receiveMid(list);}
    document.getElementById('sort_pos').onclick = function () {list = sort_list_receivePos(list);}
    document.getElementById('sort_show').onclick = function () {list_show_values(list);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_cstm_list').onclick = function()
{

    const listFactory = new DataStructureFactory();
    let list = listFactory.makeFixedCyclicList();

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_list_push(list);}
    document.getElementById('sort_up').onclick = function () {list = sort_list_sortUp(list);}
    document.getElementById('sort_down').onclick = function () {list = sort_list_sortDown(list);}
    document.getElementById('sort_start').onclick = function () {list = sort_list_receiveStart(list);}
    document.getElementById('sort_end').onclick = function () {list = sort_list_receiveEnd(list);}
    document.getElementById('sort_mid').onclick = function () {list = sort_list_receiveMid(list);}
    document.getElementById('sort_pos').onclick = function () {list = sort_list_receivePos(list);}
    document.getElementById('sort_show').onclick = function () {sort_list_showValues(list);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_own_list').onclick = function()
{
    let number = +prompt('Ведіть кількість елементів у контейнері: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Enter element: ");
        elements = [...elements, elem];
    }
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeOwnCyclicList(elements);

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_list_push(list);}
    document.getElementById('sort_up').onclick = function () {list = sort_list_sortUp(list);}
    document.getElementById('sort_down').onclick = function () {list = sort_list_sortDown(list);}
    document.getElementById('sort_start').onclick = function () {list = sort_list_receiveStart(list);}
    document.getElementById('sort_end').onclick = function () {list = sort_list_receiveEnd(list);}
    document.getElementById('sort_mid').onclick = function () {list = sort_list_receiveMid(list);}
    document.getElementById('sort_pos').onclick = function () {list = sort_list_receivePos(list);}
    document.getElementById('sort_show').onclick = function () {sort_list_showValues(list);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ---------------------------------------------------------------------------------------------------------------- **/


/** -------------------------------------------------Based on Splay Tree-------------------------------------------- **/

function sort_tree_showValues(tree)
{
    let str = "Контейнер: ";
    let trace = function(node) {
        str += `[${node.val}]  `;
    }
    tree.inOrder(tree.root, trace);
    if (str === "Контейнер: ")
    {
        alert("Контейнер: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function sort_tree_push(tree)
{
    let element = prompt('Введіть значення, яке потрібно додати у контейнер:');
    if(element === null || element === "")
    {
        tree.insert(0,0);
    }
    else
    {
        tree.insert(element,element);
    }
}

function sort_tree_sortUp(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    const sortStrat = new SortingStrategy();
    arr = sortStrat.sort_arr(arr);
    alert(`Відсортовано`);

    const treeFactory = new DataStructureFactory();
    let sorted_tree = treeFactory.makeOwnSplayTree(arr,arr);
    return sorted_tree;
}

function sort_tree_sortDown(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    const sortStrat = new SortingStrategy();
    arr = sortStrat.sort_arr(arr);
    arr.reverse();
    alert(`Відсортовано`);

    const treeFactory = new DataStructureFactory();
    let sorted_tree = treeFactory.makeOwnSplayTree(arr,arr);
    return sorted_tree;
}

function sort_tree_receiveStart(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    let number = +prompt('Введіть кількість елементів, щоб отримати з початку контейнера');
    arr = arr.slice(0,number);
    let str = `${number} елементів з початку контейнера: `;
    for(let i = 0;i<arr.length;i++)
    {
        str += arr[i] + " ";
    }
    alert(str);
    return tree;
}

function sort_tree_receiveEnd(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    let number = +prompt('Введіть кількість елементів, щоб отримати з кінця контейнера');
    arr = arr.slice(arr.length - number);
    let str = `${number} елементів з кінця контейнера: `;
    for(let i = 0;i<arr.length;i++)
    {
        str += arr[i] + " ";
    }
    alert(str);
    return tree;
}

function sort_tree_receiveMid(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    let number = +prompt('Введіть кількість елементів, щоб отримати з середини контейнера');
    arr = arr.slice(arr.length/2 - number/2, arr.length/2 - number/2  + number);
    let str = `${number} елементів з середини контейнера: `;
    for(let i = 0;i<arr.length;i++)
    {
        str += arr[i] + " ";
    }
    alert(str);
    return tree;
}

function sort_tree_receivePos(tree)
{
    let arr = [];
    let trace = function(node) {
        arr.push(node.val);
    }
    tree.inOrder(tree.root, trace);

    let number1 = +prompt('Введіть позицію першого елемента');
    let number2 = +prompt('Введіть позицію другого елемента');
    if(number1 < number2)
    {
        arr = arr.slice(number1, number2+1);
    }
    else
    {
        alert("Перше число повинно бути менше другого!!!");
    }

    let str = ` Між ${number1} і ${number2} знаходяться: `;
    for(let i = 0;i<arr.length;i++)
    {
        str += arr[i] + " ";
    }
    alert(str);
    return tree;
}

document.getElementById('sort_empty_tree_choose').onclick = function()
{

    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeEmptySplayTree();

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_tree_push(tree);}
    document.getElementById('sort_up').onclick = function () {tree = sort_tree_sortUp(tree);}
    document.getElementById('sort_down').onclick = function () {tree = sort_tree_sortDown(tree);}
    document.getElementById('sort_start').onclick = function () {tree = sort_tree_receiveStart(tree);}
    document.getElementById('sort_end').onclick = function () {tree = sort_tree_receiveEnd(tree);}
    document.getElementById('sort_mid').onclick = function () {tree = sort_tree_receiveMid(tree);}
    document.getElementById('sort_pos').onclick = function () {tree = sort_tree_receivePos(tree);}
    document.getElementById('sort_show').onclick = function () {sort_tree_showValues(tree);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_random_tree').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у контейнері: ');
    let arr = [];
    for (let h = 0; h < number; h++) {
        arr.push((Math.floor(Math.random()*1000)).toString());
    }
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeOwnSplayTree(arr,arr);

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {tree_push(tree);}
    document.getElementById('sort_up').onclick = function () {tree = sort_tree_sortUp(tree);}
    document.getElementById('sort_down').onclick = function () {tree = sort_tree_sortDown(tree);}
    document.getElementById('sort_start').onclick = function () {tree = sort_tree_receiveStart(tree);}
    document.getElementById('sort_end').onclick = function () {tree = sort_tree_receiveEnd(tree);}
    document.getElementById('sort_mid').onclick = function () {tree = sort_tree_receiveMid(tree);}
    document.getElementById('sort_pos').onclick = function () {tree = sort_tree_receivePos(tree);}
    document.getElementById('sort_show').onclick = function () {sort_tree_showValues(tree);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_cstm_tree').onclick = function()
{
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeFixedSplayTree();

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_tree_push(tree);}
    document.getElementById('sort_up').onclick = function () {tree = sort_tree_sortUp(tree);}
    document.getElementById('sort_down').onclick = function () {tree = sort_tree_sortDown(tree);}
    document.getElementById('sort_start').onclick = function () {tree = sort_tree_receiveStart(tree);}
    document.getElementById('sort_end').onclick = function () {tree = sort_tree_receiveEnd(tree);}
    document.getElementById('sort_mid').onclick = function () {tree = sort_tree_receiveMid(tree);}
    document.getElementById('sort_pos').onclick = function () {tree = sort_tree_receivePos(tree);}
    document.getElementById('sort_show').onclick = function () {sort_tree_showValues(tree);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('sort_own_tree').onclick = function()
{
    let number = prompt('Ведіть кількість елементів у контейнері: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Введіть елемент: ");
        elements = [...elements, elem];
    }

    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeOwnSplayTree(elements,elements);

    const empty_list = document.getElementById('sort_list');
    empty_list.style.display = 'block';

    document.getElementById('sort_push').onclick = function() {sort_tree_push(tree);}
    document.getElementById('sort_up').onclick = function () {tree = sort_tree_sortUp(tree);}
    document.getElementById('sort_down').onclick = function () {tree = sort_tree_sortDown(tree);}
    document.getElementById('sort_start').onclick = function () {tree = sort_tree_receiveStart(tree);}
    document.getElementById('sort_end').onclick = function () {tree = sort_tree_receiveEnd(tree);}
    document.getElementById('sort_mid').onclick = function () {tree = sort_tree_receiveMid(tree);}
    document.getElementById('sort_pos').onclick = function () {tree = sort_tree_receivePos(tree);}
    document.getElementById('sort_show').onclick = function () {sort_tree_showValues(tree);}
    document.getElementById('other_sort').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ------------------------------------------------------------------------------------------------------- **/