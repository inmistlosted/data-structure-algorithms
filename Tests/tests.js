describe("DataStructureFactory",() => {
    describe("Make empty list",() => {
        it("a size of empty list = 0", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeEmptyCyclicList();
            assert.equal(list.getSize(),0);
        });

        it("new list is empty: TRUE", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeEmptyCyclicList();
            assert.isTrue(list.isEmpty());
        });
    });

    describe("Make List with random elements", () => {
        it("a size of list with 7 random elements = 7", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeRandomCyclicList(7);
            assert.equal(list.getSize(),7);
        });

        it("a list made of 3 random elements is empty: FALSE", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeRandomCyclicList(3);
            assert.isFalse(list.isEmpty());
        });

        it("a size of list with 0 random elements = 0", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeRandomCyclicList(0);
            assert.equal(list.getSize(),0);
        });
    });


    describe("Make Own List", () => {
        it("size of this list, made of 34,65,21,46,76,67 elements = 6", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([34,65,21,46,76,67]);
            assert.equal(list.getSize(),6);
        });

        it(`index of element 12 in list made of elements 67, 12, 53 is 1`, () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([67,12,53]);
            assert.equal(list.indexOf(12), 1);
        });
    });
});

describe("Decorators",() => {
    describe('Time Measurement List', () => {
        describe("Time of pushing back an element",() => {
            it("calculates how much time push_back(12) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.push_back(12);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time push_back(1236) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.push_back(1236);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of inserting an element at needed position",() => {
            it("calculates how much time insertAt(3, 1) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.insertAt(3, 1);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time insertAt(876, 4) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.insertAt(876, 4);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of removing an element from needed position",() => {
            it("calculates how much time removeFrom(0) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.removeFrom(0);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time removeFrom(2) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.removeFrom(2);
                assert.isTrue(tmr != undefined);
            });
        });

        describe("Time of searching an element knowing its index",() => {
            it("calculates how much time findWithIndex(3) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(5);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.findWithIndex(3);
                assert.isTrue(tmr != undefined);
            });

            it("calculates how much time findWithIndex(8) is spending", () => {
                const dataStructureFactory = new DataStructureFactory();
                let list = dataStructureFactory.makeRandomCyclicList(9);
                list = new TimeMeasureListDecorator(list);
                let tmr = list.findWithIndex(8);
                assert.isTrue(tmr != undefined);
            });
        });
    });
});

describe("ArrayAdapter",() => {
    describe("Transforms a list into an array",() => {
        it("a list of 5 elements after using makeArray(list) becomes an array", () => {
            const dataStructureFactory = new DataStructureFactory();
            const arrAdapter = new ArrayAdapter();
            let list = dataStructureFactory.makeRandomCyclicList(5);
            list = arrAdapter.makeArray(list);
            assert.isTrue(Array.isArray(list));
        });

        it("a list of 9 elements after using makeArray(list) becomes an array", () => {
            const dataStructureFactory = new DataStructureFactory();
            const arrAdapter = new ArrayAdapter();
            let list = dataStructureFactory.makeOwnCyclicList([12,42,52,633,25,452,342,4,2]);
            list = arrAdapter.makeArray(list);
            assert.isTrue(Array.isArray(list));
        });
    });

    describe("Transforms an array into a list",() => {
        it("an array of 3 elements after using makeList(array) becomes a list", () => {
            const arrAdapter = new ArrayAdapter();
            let array = [34,65,24];
            array = arrAdapter.makeList(array);
            assert.isFalse(array.isEmpty());
        });

        it("an array of 7 elements after using makeList(array) becomes a list", () => {
            const arrAdapter = new ArrayAdapter();
            let array = [34,65,24,96,2,13,45];
            array = arrAdapter.makeList(array);
            assert.isFalse(array.isEmpty());
        });
    });
});

describe("SortingStrategy",() => {
    describe("Sorts a list depending on the size of this list",() => {
        it("a list of 4 elements is sorted using selection sort", () => {
            const dataStructureFactory = new DataStructureFactory();
            const sortStrat = new SortingStrategy();
            let list = dataStructureFactory.makeRandomCyclicList(4);
            list = sortStrat.sort_up(list);
            assert.isTrue(sortStrat.usedMethod === 'SelectionSort');
        });

        it("a list of 11 elements is sorted using heap sort", () => {
            const dataStructureFactory = new DataStructureFactory();
            const sortStrat = new SortingStrategy();
            let list = dataStructureFactory.makeRandomCyclicList(11);
            list = sortStrat.sort_up(list);
            assert.isTrue(sortStrat.usedMethod === 'HeapSort');
        });

        it("a list of 23 elements is sorted using merge sort", () => {
            const dataStructureFactory = new DataStructureFactory();
            const sortStrat = new SortingStrategy();
            let list = dataStructureFactory.makeRandomCyclicList(23);
            list = sortStrat.sort_up(list);
            assert.isTrue(sortStrat.usedMethod === 'MergeSort');
        });

        it("a list of 100 elements is sorted using bucket sort", () => {
            const dataStructureFactory = new DataStructureFactory();
            const sortStrat = new SortingStrategy();
            let list = dataStructureFactory.makeRandomCyclicList(100);
            list = sortStrat.sort_up(list);
            assert.isTrue(sortStrat.usedMethod === 'BucketSort');
        });
    });
});

describe("ListIterator",() => {
    describe("Returns a string of all elements in list",() => {
        it("result of showList() in list [12,3,45] must be string '[12] [3] [45]' ", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([12,3,45]);
            const listIter = new ListIterator();
            assert.equal(listIter.showList(list),'[12] [3] [45] ');
        });

        it("result of showList() in list [43,367,98,23,19,87,6,23,71] must be string '[43] [367] [98] [23] [19] [87] [6] [23] [71]' ", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([43,367,98,23,19,87,6,23,71]);
            const listIter = new ListIterator();
            assert.equal(listIter.showList(list),'[43] [367] [98] [23] [19] [87] [6] [23] [71] ');
        });
    });

    describe("Searches for an index of element", () => {
        it("Index of element 12 in list 34,56,12,78 = 2", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(12,list),2);
        });

        it("Index of element 3 in list 3,65,24,12,98,34,54 = 0", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(3,list),0);
        });

        it("Index of element 417 in list 345,241,654,243,2,62,54,2545,252,87,417 = 10", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.IndexOf(417,list),10);
        });
    });

    describe("Searches for an element using its index", () => {
        it("element with index 1 in list 34,56,12,78 = 56", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(1,list),56);
        });

        it("element with index 5 in list 3,65,24,12,98,34,54 = 34", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(5,list),34);
        });

        it("element with index 8 in list 345,241,654,243,2,62,54,2545,252,87,417 = 252", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.findWithIndex(8,list),252);
        });
    });

    describe("Calculates size of a list", () => {
        it("size of list made of elements 34,56,12,78 = 4", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([34,56,12,78]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),4);
        });

        it("size of list made of elements 3,65,24,12,98,34,54 = 7", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([3,65,24,12,98,34,54]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),7);
        });

        it("size of list made of elements 345,241,654,243,2,62,54,2545,252,87,417 = 11", () => {
            const dataStructureFactory = new DataStructureFactory();
            let list = dataStructureFactory.makeOwnCyclicList([345,241,654,243,2,62,54,2545,252,87,417]);
            const listIter = new ListIterator();
            assert.equal(listIter.SizeOfList(list),11);
        });
    });
});