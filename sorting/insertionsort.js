// let arr = [5, 3, 8, 4, 2]

// const n = arr.length
// for (let i = 1; i < n; i++) {
//     let current = arr[i]
//     let j = i - 1

//     while (j >= 0 && arr[j] > current) {
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = current
// }
// console.log(arr)

// let arr = [5,3,8,4,2]

// const n = arr.length
// for (let i = 1; i < n; i++) {
//     let current = arr[i]
//     let j =i -1

//     while (j >= 0 && arr[j] > current) {
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = current
// }
// console.log(arr)


let arr = [2,46,9,2,77,3]

const n = arr.length
for (let i = 0; i < n; i++) {
    let key = arr[i]
    let j = i-1

    while (j >= 0 && arr[j] > key) {
        arr[j+ 1] =arr[j]
        j = j -1
    }
    arr[j +1] = key
}
console.log(arr)