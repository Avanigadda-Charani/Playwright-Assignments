function intersection(arr1, arr2) {
     let uniqueValues = []
    for (let i = 0; i < arr1.length; i++) {
        
        if (arr2.includes(arr1[i])) {
           
            if (!uniqueValues.includes(arr1[i])) { //includes find common elements and avoid duplicates
                uniqueValues.push(arr1[i])

            }
        }

    }
    return uniqueValues

}
console.log(intersection([1, 4, 3, 2, 4], [6, 3, 2, 1, 8]))
console.log(intersection([1, 9, 3], [1, 8, 9]));
console.log(intersection([4, 0, 2, 3], [2, 0, 3, 4]));
