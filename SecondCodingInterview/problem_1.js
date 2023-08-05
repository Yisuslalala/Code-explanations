// Given an unordored list with repeated elements
// delete those who are repeated.

const list = [1, 2, 3, 9, 2, 3, 4, 1, 7];

const RemoveRepeted = (nums) => {
    let cleanList = [];
    const seens = {};
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in seens)) {
            cleanList.push(nums[i]);
        }
        seens[nums[i]] = i;
        // console.log(seens);
    }
    return cleanList;
};

console.log(RemoveRepeted(list));