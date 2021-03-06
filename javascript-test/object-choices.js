window.onload = () => {
    const simpleObjectButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    simpleObjectButton.onclick = () => {
        const simpleObjectDisplay = document.getElementById('simple-object-display');
    }

    functionButton.onclick = () => {
        const functionObjectDisplay = document.getElementById('function-object-display');
    }

    customClassButton.onclick = function() {
        const customClassDisplay = document.getElementById('customClassNameDisplay');
        const customClass = new CustomClass();
        const name = customClass.getName();
        customClassDisplay.textContent = name;
    }
}

    //const myObject = new FunctionObject();
   // console.log(functionObject.getFullName());
//}


//key value pairs
//comma separated list of key value pairs.
const myObject = {
    firstName: 'Jonas',
    lastName: 'Laid',
    getName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
myObject.middleName = 'Karth';

myObject.getFullName = function() {
    return this.firstName +
        " " + this.middleName +
        " " + this.lastName;
};

function FunctionObject() {
    const firstName = "Jonas";
    const lastName = "Laid";

    FunctionObject.prototype.getFullName = () => {
        return firstName + " " + lastName;
    }
}

const functionObject = new FunctionObject();

class CustomClass {
    constructor() {
        this.firstName = 'Jonas';
        this.lastName = 'Laid'
    }

    getName() {
       return this.firstName + ' ' + this.lastName;
    }
}

console.log (myObject.firstName);
console.log (myObject['firstName']);
console.log (myObject.getName());
console.log (myObject.middleName);
console.log (myObject.getFullName());
console.log (functionObject.getFullName());
