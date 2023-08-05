// Given an unsorted list, use a sort algorithm to 
// order it from the highest to the lowest.

const list = [1, 2, 3, 9, 2, 3, 4, 1, 7];

const BubbleSortAlgorithm = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] < list[j + 1]) {
                let tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
    console.log(list);
};

BubbleSortAlgorithm(list);