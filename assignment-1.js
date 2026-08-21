let genderType="female"
function printGender(){
    let color = "brown"
    
    if(genderType=="female"){

        var age=30
        let color="pink"
        console.log(color) //pink

    }
    console.log(age) 
    //console.log(color)  //brown

}

printGender()
console.log(genderType)
genderType="male"
//console.log(color)//referenceerror