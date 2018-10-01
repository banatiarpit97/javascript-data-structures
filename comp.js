sentence = "I love to code."
sentence = sentence.toLowerCase();

sentence = sentence.split(" ");
sentence[sentence.length - 1] = sentence[sentence.length-1].split(".")[0]

// sentence.sort((x,y) => {
//     return x.length-y.length;
// })
// QuickSort(sentence)
// bubble(sentence)
mergesort(sentence)
sentence = sentence.join(" ");
res = sentence[0].toUpperCase() + sentence.substring(1, sentence.length)+".";
console.log(res)


function mergesort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergesort(...left), mergesort(...right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0].length < right[0].length) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    }

    // console.log([...results, ...left, ...right]);
    return [...results, ...left, ...right];
}

// mergesort(8, 4, 0, 1, 99, 4, 88);


// function bubble(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j].length > arr[j + 1].length) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
// }
// function QuickSort(arr) {
//     quick(arr, 0, arr.length - 1)
// }

// function quick(arr, left, right) {
//     if (arr.length > 1) {
//         var index = partition(arr, left, right);

//         if (left < index - 1) {
//             quick(arr, left, index - 1);
//         }
//         if (right > index) {
//             quick(arr, index, right);
//         }
//     }

// }

// function partition(arr, left, right) {
//     var pivot = arr[Math.floor((left + right) / 2)];

//     while (left <= right) {
//         while (arr[left].length < pivot.length) {
//             left++;
//         }
//         while (arr[right].length > pivot.length) {
//             right--;
//         }

//         if (arr[left].length < arr[right].length) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++; right--;
//         }
//     }
//     return left;
// }
