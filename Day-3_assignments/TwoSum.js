const nums = [2, 4, 7, 8, 11, 14];
let result=[]
let target = 18;

for (let i = 0; i < nums.length; i++) {
    for(let j=i+1;j<nums.length;j++){
         if (nums[i] + nums[j] === target) {
            console.log(true);
            result.push([i,j])

        }

   
    }
}
console.log(result)