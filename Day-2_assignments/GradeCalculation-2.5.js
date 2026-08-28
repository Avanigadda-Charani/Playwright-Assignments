function studentsScore(score) {
    switch (true) {
        case score >= 90:  // Score 90 or above gets an A Grade
            return "A Grade";
        case score >= 75:   // Score 75 or above gets an B Grade
            return "B Grade";
         case score >= 50:   // Score 50 or above gets an C Grade
            return "C Grade";
        default:
            console.log("Fail");  //Score less than 50 will fail
    }
}
console.log(studentsScore(80))
