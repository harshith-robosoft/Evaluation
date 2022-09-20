let a = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];
let arr1 = [];
let arr2 = []
let maxcount = 0;
for (let i = 0; i < a.length; i++) {
    count = 0
    for (j = 0; j < a.length; j++) {
        if (a[i] == a[j]) {
            count++
        }
    }
    if (count > 1) {
        arr1.push(a[i])


    }
    if (count <= 1) {
        arr2.push(a[i])
    }
}
console.log(arr1.concat(arr2))

