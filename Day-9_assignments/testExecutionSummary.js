"use strict";
//  Create an object literal named testExecutionSummary with the following properties: suiteNametotalTests passedTests failedTests executionTime
let testExecutionSummary = {
    suiteName: 'testing1',
    totalTests: 20,
    passedTests: 10,
    failedTests: 10,
    executionTime: '10s'
};
// Print all properties
console.log("Suite Name:", testExecutionSummary.suiteName);
console.log("Total Tests:", testExecutionSummary.totalTests);
console.log("Passed Tests:", testExecutionSummary.passedTests);
console.log("Failed Tests:", testExecutionSummary.failedTests);
console.log("Execution Time:", testExecutionSummary.executionTime);
//passedTests percentage calculation
let passPercent = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log(passPercent + "%");
//using a conditional statement to check the failedTests count: If failedTests is 0, print Execution
//failedTests Print execution status
if (testExecutionSummary.failedTests == 0) {
    console.log('print Execution Successful');
}
else {
    console.log("print Execution Completed with Failures ");
}
