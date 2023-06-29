function add(...nums) {
    let value = 0;
    nums.forEach(a => {
        value += a;
    })
    return value;
}

function subtract(...nums) {
    let value = nums[0];
    for (let i = 1; i < nums.length; i++) {
        value -= nums[i];
    }
    return value;
}

function multiply(...nums) {
    let value = 1;
    nums.forEach(a => {
        value *= a;
    })
    return value;
}

function divide(...nums) {
    let value = nums[0];
    for (let i = 1; i < nums.length; i++) {
        value /= nums[i];
    }
    return value;
}