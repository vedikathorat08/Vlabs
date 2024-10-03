function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return `Element found at index: ${mid}`;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return "Element not found in the array.";
}

// Example usage:
let arr = [2, 3, 4, 10, 40];
let target = 10;
console.log(binarySearch(arr, target));
