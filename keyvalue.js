/** ------------------------------------------------Container "Key-Value"------------------------------------------------------- **/

document.getElementById('start').onclick = function () {
    const choose = document.getElementById('choose_functionality');
    choose.style.display = 'block';
}

document.getElementById('key_value').onclick = function () {
    const choose = document.getElementById('choose_typeof_keyvalue');
    const title = document.getElementById("keyvalue_title");
    const close = document.getElementById('choose_functionality');
    choose.style.display = 'block';
    title.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('keyvalue_list_based').onclick = function () {
    const choose = document.getElementById('choose');
    const close = document.getElementById('choose_typeof_keyvalue');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'(Cycled-List based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('keyvalue_hash_based').onclick = function () {
    const choose = document.getElementById('choose_hash');
    const close = document.getElementById('choose_typeof_keyvalue');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'(Hash-Table based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('keyvalue_tree_based').onclick = function () {
    const choose = document.getElementById('choose_tree');
    const close = document.getElementById('choose_typeof_keyvalue');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'(Splay-Tree based)";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('other_realiz').onclick = function () {
    const choose = document.getElementById('choose_typeof_keyvalue');
    const close = document.getElementById('choose');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('other_realiz_hash').onclick = function () {
    const choose = document.getElementById('choose_typeof_keyvalue');
    const close = document.getElementById('choose_hash');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('other_realiz_tree').onclick = function () {
    const choose = document.getElementById('choose_typeof_keyvalue');
    const close = document.getElementById('choose_tree');
    const title = document.getElementById("keyvalue_title");
    title.innerHTML = "Контейнер 'Ключ-значення'";
    choose.style.display = 'block';
    close.style.display = 'none';
}

document.getElementById('other_func').onclick = function () {
    const close = document.getElementById('choose_typeof_keyvalue');
    const choose = document.getElementById('choose_functionality');
    const title = document.getElementById("keyvalue_title");
    choose.style.display = 'block';
    close.style.display = 'none';
    title.style.display = 'none';
}

/** ---------------------------------------------Based on Cycled List----------------------------------------------- **/

function list_push(list)
{
    let element = prompt('Введіть значення елемента, який потрібно додати до контейнера:');
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

function list_insertAt(list)
{
    const popup = document.getElementById('main_popup');
    const element = document.getElementById('elmnt');
    const index = document.getElementById('index');


    if(list.isEmpty())
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        popup.style.display = 'block';
        document.getElementById('btn_popup').onclick = function () {
            if(element.value === "" || index.value === "")
            {
                element.value = 0;
                index.value = 0;
            }

            if(list.insertAt(+element.value,+index.value) === false)
            {
                alert("Ключ не може бути більше, ніж розмір контейнера");
            }

            popup.style.display = 'none';
        }
    }
}

function sortList(list)
{
    if(list.isEmpty())
    {
        return;
    }
    else
    {
        const sortStrat = new SortingStrategy();
        list = sortStrat.sort_up(list);
        return list;
    }
}

function list_removeIndex(list)
{
    if(list.isEmpty())
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        let position = prompt('Введіть ключ елемента, який потрібно видалити із контейнера:');
        if(position === null || position === "")
        {
            alert("Введіть ключ елемента будь-ласка");
        }
        else if(list.removeFrom(+position) === false)
        {
            alert("Ключ не може бути більше або дорівнювати розміру контейнера");
        }
        else
        {
            alert(`Видалено елемент з ключем ${position}`);
        }
    }
}

function list_findElement(list)
{
    if(list.isEmpty())
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        let index = prompt('Введіть ключ елемента, значення якого потрібно знайти в контейнері:');
        const listIterator = new ListIterator();

        if(index === null || index === "")
        {
            alert("Введіть ключ елемента будь-ласка");
        }
        else if(listIterator.findWithIndex(+index,list) === false)
        {
            alert("Ключ не може бути більше або дорівнювати розміру контейнера");
        }
        else
        {
            alert(`Значення елемента, що відповідає введеному ключу = ${listIterator.findWithIndex(+index,list)}`);
        }
    }
}

function list_show_keys(list)
{
    const arrAdapter = new ArrayAdapter();
    list = arrAdapter.makeArray(list);
    let str = "Список ключів: ";
    for(let i = 0; i < list.length; i++)
    {
        str += "[" + i + "]     ";
    }

    if (str === "Список ключів: ")
    {
        alert("Список ключів: *EMPTY*");
    }
    else
    {
        alert(str);
    }
    return arrAdapter.makeList(list);
}

function list_show_values(list)
{
    const listIterator = new ListIterator();
    if(listIterator.showList(list) === "")
    {
        alert('Список значень: *EMPTY*');
    }
    else
    {
        alert("Список значень: " + listIterator.showList(list));
    }
}

function list_show_keyvalues(list)
{
    const arrAdapter = new ArrayAdapter();
    let arr = arrAdapter.makeArray(list);
    let str = "Список пар ключ-значення:       ";
    for(let i = 0; i < arr.length; i++)
    {
        str += `[${i} -- ${arr[i]}]     `;
    }
    if (str === "Список пар ключ-значення:       ")
    {
        alert("Список пар ключ-значення: *EMPTY*");
    }
    else
    {
        alert(str);
    }
    return arrAdapter.makeList(arr);
}

function time_push(timeList)
{
    const tmr = document.getElementById('showTime');
    let element = prompt('Введіть значення елемента, який потрібно додати до контейнера:');
    if(element === null || element === "")
    {
        showTime.innerHTML = `Час виконання: ${timeList.push_back(0)} ms`;
    }
    else
    {
        showTime.innerHTML = `Час виконання: ${timeList.push_back(+element)} ms`;
    }
}

function time_insertAt(timeList)
{
    const popup = document.getElementById('main_popup');
    const element = document.getElementById('elmnt');
    const index = document.getElementById('index');


    if(timeList.getSize() === 0)
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        popup.style.display = 'block';
        popup.style.zIndex = '999';
        document.getElementById('btn_popup').onclick = function () {
            if(element.value === "" || index.value === "")
            {
                element.value = 0;
                index.value = 0;
            }

            if(timeList.insertAt(+element.value,+index.value) === false)
            {
                timeList.removeFrom(+index.value);
                alert("Ключ не може бути більше, ніж розмір контейнера");
            }
            else
            {
                timeList.removeFrom(+index.value);
                showTime.innerHTML = `Час виконання: ${timeList.insertAt(+element.value,+index.value)} ms`;
            }

            popup.style.display = 'none';
        }
    }
}

function time_removeFrom(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        let position = prompt('Введіть ключ елемента, який потрібно видалити із контейнера:');
        let time = timeList.removeFrom(+position);
        if(position === null || position === "")
        {
            alert("Введіть ключ елемента будь-ласка");
        }
        else if(time === false)
        {
            alert("Ключ не може бути більше або дорівнювати розміру контейнера");
        }
        else
        {
            showTime.innerHTML = `Час виконання: ${time} ms`;
        }
    }
}


function time_findElement(timeList)
{
    if(timeList.getSize() === 0)
    {
        alert("Контейнер пустий! Спочатку додайте туди щось");
    }
    else
    {
        let index = prompt('Введіть ключ елемента, значення якого потрібно знайти в контейнері:');
        let time = timeList.findWithIndex(+index);
        if(index === null || index === "")
        {
            alert("Введіть ключ елемента будь-ласка");
        }
        else if(time === false)
        {
            alert("Ключ не може бути більше або дорівнювати розміру контейнера");
        }
        else
        {
            showTime.innerHTML = `Час виконання: ${time[1]} ms`;
            alert(`Значення елемента, що відповідає введеному ключу = ${time[0]}`);
        }
    }
}


function make_timeMeas(list)
{
    let timeList = new TimeMeasureListDecorator(list);
    const timeShow = document.getElementById('time_measure');
    timeShow.style.display = 'block';
    empty_list.style.display = 'none';

    document.getElementById('time_push').onclick = function () {time_push(timeList);}
    document.getElementById('time_ins_at').onclick = function () {time_insertAt(timeList);}
    document.getElementById('time_rem_ind').onclick = function () {time_removeFrom(timeList);}
    document.getElementById('time_find_elmnt').onclick = function () {time_findElement(timeList);}
    document.getElementById('other_list_time').onclick = function () {
        timeShow.style.display = 'none';
    }
}

document.getElementById('empty_list_choose').onclick = function()
{
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeEmptyCyclicList();

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list = list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('get_keys').onclick = function () {list = list_show_keys(list);}
    document.getElementById('get_values').onclick = function () {list_show_values(list);}
    document.getElementById('get_keyvalues').onclick = function () {list = list_show_keyvalues(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('random_list').onclick = function()
{
    let number = prompt('Введіть кількість елементів в контейнері: ');
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeRandomCyclicList(number);
    list = sortList(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list = list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('get_keys').onclick = function () {list = list_show_keys(list);}
    document.getElementById('get_values').onclick = function () {list_show_values(list);}
    document.getElementById('get_keyvalues').onclick = function () {list = list_show_keyvalues(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('cstm_list').onclick = function()
{
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeFixedCyclicList();

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list = list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('get_keys').onclick = function () {list = list_show_keys(list);}
    document.getElementById('get_values').onclick = function () {list_show_values(list);}
    document.getElementById('get_keyvalues').onclick = function () {list = list_show_keyvalues(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

document.getElementById('own_list').onclick = function()
{
    let number = +prompt('Введіть кількість елементів в контейнері: ');
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let elem = +prompt("Введіть значення елемнта: ");
        elements = [...elements, elem];
    }
    const listFactory = new DataStructureFactory();
    let list = listFactory.makeOwnCyclicList(elements);
    list = sortList(list);

    const empty_list = document.getElementById('empty_list');
    empty_list.style.display = 'block';

    document.getElementById('push').onclick = function() {list = list_push(list);}
    document.getElementById('ins_at').onclick = function () {list_insertAt(list);}
    document.getElementById('rem_ind').onclick = function () {list_removeIndex(list);}
    document.getElementById('get_keys').onclick = function () {list = list_show_keys(list);}
    document.getElementById('get_values').onclick = function () {list_show_values(list);}
    document.getElementById('get_keyvalues').onclick = function () {list = list_show_keyvalues(list);}
    document.getElementById('find_elmnt').onclick = function () {list_findElement(list)}
    document.getElementById('time').onclick = function () {make_timeMeas(list);}
    document.getElementById('other_list').onclick = function () {
        empty_list.style.display = 'none';
    }
}

/** ---------------------------------------------------------------------------------------------------------------- **/


/** ------------------------------------------Based on Hash Table--------------------------------------------------- **/

function hash_show_keys(hash)
{
    let str = "Список ключів: ";
    for(let i = 0; i < hash.array.length; i++)
        {
            if(hash.array[i] !== undefined)
            {
                str += `[${hash.array[i].key}]     `;
            }
        }
    if (str === "Список ключів: ")
    {
        alert("Список ключів: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function hash_show_values(hash)
{
    let str = "Список значень: ";
    for(let i = 0; i < hash.array.length; i++)
    {
        if(hash.array[i] !== undefined)
        {
            str += `[${hash.array[i].value}]     `;
        }
    }
    if (str === "Список значень: ")
    {
        alert("Список значень: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function hash_show_keyvalues(hash)
{
    let str = "Список пар ключ-значення:       ";
    for(let i = 0; i < hash.array.length; i++)
    {
        if(hash.array[i] !== undefined)
        {
            str += `[${hash.array[i].key} -- ${hash.array[i].value}]      `;
        }
    }
    if (str === "Список пар ключ-значення:       ")
    {
        alert("Список пар ключ-значення: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function hash_push(hash)
{
    let key = prompt('Введіть ключ, який потрібно додати у хеш-таблицю:');
    let element = prompt('Введіть значення, яке потрібно додати у хеш-таблицю:');
    if(element === null || element === "" || key === null || key === "")
    {
        hash.insert(0,0);
    }
    else
    {
        hash.insert(key,element);
    }
}

function hash_removeIndex(hash)
{
    let position = prompt('Введіть ключ елемента, значення якого потрібно видалити із хеш-таблиці:');
    if(position === null || position === "")
    {
        alert("Введіть ключ елемента будь-ласка");
    }
    else if(hash.remove(position) === false)
    {
        alert("Елемента з таким ключем немає в хеш-таблиці");
    }
    else
    {
        alert(`Елемент з ключем ${position} видалений`);
    }
}

function hash_findElement(hash)
{

    let index = prompt('Введіть ключ елемента, значення якого потрібно знайти:');
    const hashIterator = new HashIterator();

    if(index === null || index === "")
    {
        alert("Введіть ключ елемента будь-ласка");
    }
    else if(hashIterator.find(index,hash) === false)
    {
        alert("Елемента з таким ключем немає в хеш-таблиці");
    }
    else {
        alert(`Знаяення елемента з введеним ключем: ${hashIterator.find(index,hash)}`);
    }
}

document.getElementById('empty_hash_choose').onclick = function()
{

    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeEmptyHashTable();

    const empty_hash = document.getElementById('empty_hash');
    empty_hash.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {hash_push(hash);}
    document.getElementById('hash_rem_ind').onclick = function () {hash_removeIndex(hash);}
    document.getElementById('hash_get_keys').onclick = function () {hash_show_keys(hash);}
    document.getElementById('hash_get_values').onclick = function () {hash_show_values(hash);}
    document.getElementById('hash_get_keyvalues').onclick = function () {hash_show_keyvalues(hash);}
    document.getElementById('hash_find_elmnt').onclick = function () {hash_findElement(hash)}
    document.getElementById('other_hash').onclick = function () {
        empty_hash.style.display = 'none';
    }
}

document.getElementById('random_hash').onclick = function()
{

    let number = prompt('Введіть кількість елементів, щоб додати у хеш-таблицю: ');
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeRandomHashTable(number);

    const empty_hash = document.getElementById('empty_hash');
    empty_hash.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {hash_push(hash);}
    document.getElementById('hash_rem_ind').onclick = function () {hash_removeIndex(hash);}
    document.getElementById('hash_get_keys').onclick = function () {hash_show_keys(hash);}
    document.getElementById('hash_get_values').onclick = function () {hash_show_values(hash);}
    document.getElementById('hash_get_keyvalues').onclick = function () {hash_show_keyvalues(hash);}
    document.getElementById('hash_find_elmnt').onclick = function () {hash_findElement(hash)}
    document.getElementById('other_hash').onclick = function () {
        empty_hash.style.display = 'none';
    }
}

document.getElementById('cstm_hash').onclick = function()
{
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeFixedHashTable();

    const empty_hash = document.getElementById('empty_hash');
    empty_hash.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {hash_push(hash);}
    document.getElementById('hash_rem_ind').onclick = function () {hash_removeIndex(hash);}
    document.getElementById('hash_get_keys').onclick = function () {hash_show_keys(hash);}
    document.getElementById('hash_get_values').onclick = function () {hash_show_values(hash);}
    document.getElementById('hash_get_keyvalues').onclick = function () {hash_show_keyvalues(hash);}
    document.getElementById('hash_find_elmnt').onclick = function () {hash_findElement(hash)}
    document.getElementById('other_hash').onclick = function () {
        empty_hash.style.display = 'none';
    }
}

document.getElementById('own_hash').onclick = function()
{
    let number = +prompt('Введіть кількість елементів, щоб додати у хеш-таблицю: ');
    let keys = [];
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let key = prompt("Введіть кдюч:")
        let elem = prompt("Введіть значення:");
        keys = [...keys, key];
        elements = [...elements, elem];
    }
    const hashFactory = new DataStructureFactory();
    let hash = hashFactory.makeOwnHashTable(keys, elements);

    const empty_hash = document.getElementById('empty_hash');
    empty_hash.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {hash_push(hash);}
    document.getElementById('hash_rem_ind').onclick = function () {hash_removeIndex(hash);}
    document.getElementById('hash_get_keys').onclick = function () {hash_show_keys(hash);}
    document.getElementById('hash_get_values').onclick = function () {hash_show_values(hash);}
    document.getElementById('hash_get_keyvalues').onclick = function () {hash_show_keyvalues(hash);}
    document.getElementById('hash_find_elmnt').onclick = function () {hash_findElement(hash)}
    document.getElementById('other_hash').onclick = function () {
        empty_hash.style.display = 'none';
    }
}

/** ---------------------------------------------------------------------------------------------------------------- **/


/** -------------------------------------------------Based on Splay Tree-------------------------------------------- **/

function tree_show_keys(tree)
{
    let str = "Список ключів: ";
    //let nodes = '';
    let trace = function(node) {
        str += `[${node.key}]  `;
    }
    tree.inOrder(tree.root, trace);
    if (str === "Список ключів: ")
    {
        alert("Список ключів: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function tree_show_values(tree)
{
    let str = "Список значень: ";
    //let nodes = '';
    let trace = function(node) {
        str += `[${node.val}]  `;
    }
    tree.inOrder(tree.root, trace);
    if (str === "Список значень: ")
    {
        alert("Список значень: *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function tree_show_keyvalues(tree)
{
    let str = "Список пар ключ-значення:       ";
    //let nodes = '';
    let trace = function(node) {
        str += `[${node.key} -- ${node.val}]      `;
    }
    tree.inOrder(tree.root, trace);
    if (str === "Список пар ключ-значення:       ")
    {
        alert("Список пар ключ-значення:  *EMPTY*");
    }
    else
    {
        alert(str);
    }
}

function tree_push(tree)
{
    let key = prompt('Введіть ключ, який потрібно додати у splay-дерево:');
    let element = prompt('Введіть значення, яке потрібно додати у splay-дерево:');
    if(element === null || element === "" || key === null || key === "")
    {
        tree.insert(0,0);
    }
    else
    {
        tree.insert(key,element);
    }
}

function tree_removeIndex(tree)
{
    let position = prompt('Введіть ключ елемента, значення якого потрібно видалити із splay-деревa:');
    if(position === null || position === "")
    {
        alert("Введіть ключ елемента будь-ласка");
    }
    else if(tree.remove(position) === false)
    {
        alert("Елемента з таким ключем немає в splay-деревi");
    }
    else
    {
        alert(`Елемент з ключем ${position} видалений`);
    }
}

function tree_findElement(tree)
{
    let index = prompt('Введіть ключ елемента, значення якого потрібно знайти:');
    const treeIterator = new SplayTreeIterator();

    if(index === null || index === "")
    {
        alert("Введіть ключ елемента будь-ласка");
    }
    else if(treeIterator.search(index,tree) === null)
    {
        alert("Елемента з таким ключем немає в splay-дереві");
    }
    else {
        alert(`Знаяення елемента з введеним ключем: ${treeIterator.search(index,tree)}`);
    }
}

document.getElementById('empty_tree_choose').onclick = function()
{
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeEmptySplayTree();

    const empty_tree = document.getElementById('empty_hash');
    empty_tree.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {tree_push(tree);}
    document.getElementById('hash_rem_ind').onclick = function () {tree_removeIndex(tree);}
    document.getElementById('hash_get_keys').onclick = function () {tree_show_keys(tree);}
    document.getElementById('hash_get_values').onclick = function () {tree_show_values(tree);}
    document.getElementById('hash_get_keyvalues').onclick = function () {tree_show_keyvalues(tree);}
    document.getElementById('hash_find_elmnt').onclick = function () {tree_findElement(tree)}
    document.getElementById('other_hash').onclick = function () {
        empty_tree.style.display = 'none';
    }
}

document.getElementById('random_tree').onclick = function()
{

    let number = prompt('Введіть кількість елементів, щоб додати у splay-дерево: ');
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeRandomSplayTree(number);

    const empty_tree = document.getElementById('empty_hash');
    empty_tree.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {tree_push(tree);}
    document.getElementById('hash_rem_ind').onclick = function () {tree_removeIndex(tree);}
    document.getElementById('hash_get_keys').onclick = function () {tree_show_keys(tree);}
    document.getElementById('hash_get_values').onclick = function () {tree_show_values(tree);}
    document.getElementById('hash_get_keyvalues').onclick = function () {tree_show_keyvalues(tree);}
    document.getElementById('hash_find_elmnt').onclick = function () {tree_findElement(tree)}
    document.getElementById('other_hash').onclick = function () {
        empty_tree.style.display = 'none';
    }
}

document.getElementById('cstm_tree').onclick = function()
{
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeFixedSplayTree();

    const empty_tree = document.getElementById('empty_hash');
    empty_tree.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {tree_push(tree);}
    document.getElementById('hash_rem_ind').onclick = function () {tree_removeIndex(tree);}
    document.getElementById('hash_get_keys').onclick = function () {tree_show_keys(tree);}
    document.getElementById('hash_get_values').onclick = function () {tree_show_values(tree);}
    document.getElementById('hash_get_keyvalues').onclick = function () {tree_show_keyvalues(tree);}
    document.getElementById('hash_find_elmnt').onclick = function () {tree_findElement(tree)}
    document.getElementById('other_hash').onclick = function () {
        empty_tree.style.display = 'none';
    }
}

document.getElementById('own_tree').onclick = function()
{
    let number = +prompt('Введіть кількість елементів, щоб додати у splay-дерево: ');
    let keys = [];
    let elements = [];
    for(let i = 0; i < number; i++)
    {
        let key = prompt("Введіть кдюч:")
        let elem = prompt("Введіть значення:");
        keys = [...keys, key];
        elements = [...elements, elem];
    }
    const treeFactory = new DataStructureFactory();
    let tree = treeFactory.makeOwnSplayTree(keys, elements);

    const empty_tree = document.getElementById('empty_hash');
    empty_tree.style.display = 'block';

    document.getElementById('hash_push').onclick = function() {tree_push(tree);}
    document.getElementById('hash_rem_ind').onclick = function () {tree_removeIndex(tree);}
    document.getElementById('hash_get_keys').onclick = function () {tree_show_keys(tree);}
    document.getElementById('hash_get_values').onclick = function () {tree_show_values(tree);}
    document.getElementById('hash_get_keyvalues').onclick = function () {tree_show_keyvalues(tree);}
    document.getElementById('hash_find_elmnt').onclick = function () {tree_findElement(tree)}
    document.getElementById('other_hash').onclick = function () {
        empty_tree.style.display = 'none';
    }
}

/** ------------------------------------------------------------------------------------------------------- **/