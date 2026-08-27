function nValues(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        let oldsum=sum
        sum=sum+i
         console.log(i, sum);
        //console.log(oldsum+"+"+i+"="+sum)
     

    }
    return sum
  
    
}
nValues(5)