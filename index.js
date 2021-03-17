function receivesAFunction(secondFunction) {
    secondFunction();
}
function returnsANamedFunction() {
    return receivesAFunction
}
function returnsAnAnonymousFunction() {
    return function() {
        return `Test test`
    }
}