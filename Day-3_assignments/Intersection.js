let unique=[]
function intersection(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            if(!unique.includes(arr1[i])){
                unique.push(arr1[i])

            }
        }
      
    }
    return unique

}
console.log(intersection([1,4,3,2,4],[6,3,2,1,8]))
console.log(intersection([1, 9, 3], [1, 8, 9]));
console.log(intersection([4, 0, 2, 3], [2, 0, 3, 4]));