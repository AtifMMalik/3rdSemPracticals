const NumberCrunching = document.getElementById("NumberCrunching")
const Trigonometry = document.getElementById("Trigonometry")
const Exponential_N_Logarithmic = document.getElementById("Exponential_N_Logarithmic")
const MiscUtilities = document.getElementById("MiscUtilities")



fetch('data.json')
    .then(res => res.json())
    .then(data => {
        injectButtons(data)
    })
    .catch(err => console.error(err));

function injectButtons(data) {
    // console.log(data)
    let element_button
    let inPut_count

    // section 1. Number Crunching
    for(i in data.NumberCrunching){
        inPut_count =  data.NumberCrunching[i].inputsRequired ;
        element_button = document.createElement("button")
        element_button.innerText = data.NumberCrunching[i].name;//
        if (typeof inPut_count === 'number') {
            element_button.setAttribute("onClick", `displayInputs(${inPut_count} , '${data.NumberCrunching[i].method}')`)
        }else{
            element_button.setAttribute("onClick", `displayInputs("${inPut_count}" , '${data.NumberCrunching[i].method}')`)
        }
        element_button.setAttribute("value", i)
        NumberCrunching.appendChild(element_button)
    }

    // section 2. Trigonometry
    for(i in data.Trigonometry){
        inPut_count =  data.Trigonometry[i].inputsRequired ;
        element_button = document.createElement("button")
        element_button.innerText = data.Trigonometry[i].name;
        if (typeof inPut_count === 'number') {
            element_button.setAttribute("onClick", `displayInputs(${inPut_count} , '${data.Trigonometry[i].method}')`)
        }else{
            element_button.setAttribute("onClick", `displayInputs("${inPut_count}" , '${data.Trigonometry[i].method}')`)
        }
        element_button.setAttribute("value", i)
        Trigonometry.appendChild(element_button)
    }

    // section 3. Exponential & Logarithmic
    for(i in data.Exponential_N_Logarithmic){
        inPut_count =  data.Exponential_N_Logarithmic[i].inputsRequired ;
        element_button = document.createElement("button")
        element_button.innerText = data.Exponential_N_Logarithmic[i].name;
        if (typeof inPut_count === 'number') {
            element_button.setAttribute("onClick", `displayInputs(${inPut_count} , '${data.Exponential_N_Logarithmic[i].method}')`)
        }else{
            element_button.setAttribute("onClick", `displayInputs("${inPut_count}" , '${data.Exponential_N_Logarithmic[i].method}')`)
        }
        element_button.setAttribute("value", i)
        Exponential_N_Logarithmic.appendChild(element_button)
    }

    // section 4 Misc Utilities
    for(i in data.MiscUtilities){
        inPut_count =  data.MiscUtilities[i].inputsRequired ;
        element_button = document.createElement("button")
        element_button.innerText = data.MiscUtilities[i].name;
        if (typeof inPut_count === 'number') {
            element_button.setAttribute("onClick", `displayInputs(${inPut_count} , '${data.MiscUtilities[i].method}')`)
        }else{
            element_button.setAttribute("onClick", `displayInputs("${inPut_count}" , '${data.MiscUtilities[i].method}')`)
        }
        element_button.setAttribute("value", i)
        MiscUtilities.appendChild(element_button)
    }
}



const inputFieldsContainer = document.getElementById("inputFieldsContainer")
const inputsField_innerContainer = document.getElementById("inputs")
const addField_btn = document.getElementById("addField_btn")
const calculate_btn = document.getElementById("calculate_btn")

const displayInputs = (noOfFields, method) => {
    if(noOfFields === 0){
        calculate(method, 0);
        return
    }

    // console.log(method)

    if(noOfFields === "n"){
        addField_btn.style.display = "flex"
        let element_inputField = document.createElement("input")
        element_inputField.setAttribute("placeholder" , `value`)
        element_inputField.setAttribute("type" , "number")
        inputsField_innerContainer.append(element_inputField)
        calculate_btn.setAttribute('onclick', `calculate("${method}", "${noOfFields}")`)
    }else{
        for (let i = 0; i < noOfFields; i++) {
            let element_inputField = document.createElement("input")
            element_inputField.setAttribute("placeholder" , `value ${i+1}`)
            element_inputField.setAttribute("type" , "number")
            inputsField_innerContainer.append(element_inputField)
        }
        calculate_btn.setAttribute('onclick', `calculate("${method}", ${noOfFields})`)
    }

    inputFieldsContainer.style.display = "flex"
}

const addInputField = () =>{
    let element_inputField = document.createElement("input")
    element_inputField.setAttribute("placeholder" , `value`)
    element_inputField.setAttribute("type" , "number")
    inputsField_innerContainer.append(element_inputField)
}

const calculate = (method, inputsRequired) => {

    let valuesArr = [];
    for (let i = 0; i < inputsField_innerContainer.childElementCount; i++) {
        valuesArr[i] = Number(inputsField_innerContainer.childNodes[i + 1].value);
    }

    let fn;

    if (inputsRequired === 1) {
        fn = Function("x", `return ${method}`);
        alert(`result for given inputs with ${method} function is ${fn(valuesArr[0])}`);
    }

    else if (inputsRequired === 2) {
        fn = Function("a", "b", `return ${method}`);
        alert(`result for given inputs with ${method} function is ${fn(valuesArr[0], valuesArr[1])}`);
    }

    else if (inputsRequired === "n") {
        fn = Function("...values", `return ${method}`);
        alert(`result for given inputs with ${method} function is ${fn(...valuesArr)}`);
    }

    else if (inputsRequired === 0) {
        fn = Function(`return ${method}`);
        alert(`result for given inputs with ${method} function is ${fn()}`);
    }

    document.location.reload();
}