function studentsScore(score){
    switch (true) {
        case score>=90:
        return "A Grade";
            break;
        case score>=75:
        return "B Grade";
            break;
        case score>=50:
        return "C Grade";
            break;
    
        default:
        console.log("Fail");
            break;
    }
}
console.log(studentsScore(80))