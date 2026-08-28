const nums = [2, 4, 7, 8, 11, 14];
let resultIndexes = [];
let target = 18;

for (let i = 0; i < nums.length; i++) {

    // Start j from i + 1 to avoid comparing an element with itself and to avoid checking the same pair again.
    for (let j = i + 1; j < nums.length; j++) {

        // Checking whether the two numbers add up to the target.
        if (nums[i] + nums[j] === target) {
            console.log(true);
            resultIndexes.push([i, j]);
        }
    }
}

console.log(resultIndexes);
