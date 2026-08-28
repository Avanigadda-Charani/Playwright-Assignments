function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("chrome")
    } else {
        console.log("not chrome");

    }

}
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("smoke");  //checks bacis functionality of an application
            break;
        case "sanity":
            console.log("sanity");  //checks specific functionality after code changes
            break;
        case "regression":
            console.log("regression"); //checks existing functionality still working or not
            break;
        default:
            console.log("default smoke");
            break;
    }

}
runTests("regression")
launchBrowser("firefox")
