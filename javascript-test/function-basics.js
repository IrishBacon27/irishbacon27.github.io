window.onload = () => {

    const functionCalls = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input')

    functionCalls.onclick = () => {
        simpleFunction();
        functionParameters("Many functions take parameters.");
        functionReturn();
        const returnValue = functionReturn()
        console.log(returnValue);
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById('show-user-input');
        const userInput = document.getElementById('user-input');
        userInputParagraph.textContent = userInput.value;
    }
}

function simpleFunction() {
    const displayText = "functions shoud consist of statements designed to perfor a task."
    const simpleFunctionParagraph = document.getElementById('simple-function');
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}

function functionParameters(value) {
    const functionParametersParagraph = document.getElementById('function-parameters');
    console.log(value)
    functionParametersParagraph.textContent = value;
}

function functionReturn() {
    return "Many functions return values";
}

//functionParameters("many functions take parameters");

//function add(a, b) {
    //console.log(a + b);
//}

//function adder() {
    //console.log(2 +3);
//}

//add(2, 3);
//adder();
