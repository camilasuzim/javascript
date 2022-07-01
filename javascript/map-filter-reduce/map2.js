function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 12];

console.log(mapSemThis(nums));
