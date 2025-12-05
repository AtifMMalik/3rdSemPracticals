/////////// ADD PARAGRAPH //////////////

const form_addParagraph = document.getElementById("form")
const textarea_addParagraph = document.getElementById("textarea_para")
const button_addParagraph = document.getElementById("addParagraph")
const paragraphContainer = document.getElementById("paragraphContainer")
const paragraph = document.getElementById("paragraph")

let paragraphContent = ""

button_addParagraph.addEventListener('click', ()=>{
    paragraphContent = textarea_addParagraph.value;
    if(paragraphContent === ""){
        alert("Firstly enter some text in the field.")
        return;
    }
    paragraph.innerText = paragraphContent;
    paragraphContainer.style.display = "block";
})

/////////// FIND //////////////
const findField = document.getElementById("findField")
const findBtn = document.getElementById("findBtn")
const label_frequencyCount = document.getElementById("frequencyCount")
const replaceFieldset_container = document.getElementById("replaceFieldset_container");

findField.addEventListener('input', ()=>{
    let toFind = findField.value;
    let regex = new RegExp(toFind, 'g')

    paragraphContent = paragraph.innerText

    let matchFrequency = paragraphContent.match(regex)?.length

    if(findField.value){
        if (matchFrequency) {
            label_frequencyCount.innerText = `${matchFrequency} times.`
            paragraph.innerHTML = paragraphContent.replaceAll(regex, `<span class="highlight">${toFind}</span>`)
            replaceFieldset_container.style.display = "flex"
        }else{
            label_frequencyCount.innerText = `0 times.`
            paragraph.innerText = paragraphContent
            replaceFieldset_container.style.display = "none"
        }   
    }else{
        label_frequencyCount.innerText = ``;
        paragraph.innerText = paragraphContent
        replaceFieldset_container.style.display = "none"
    }

})


/////////// REPLACE //////////////

const replaceBtn = document.getElementById("replaceBtn")
const replaceField = document.getElementById("replaceField")

replaceBtn.addEventListener('click', ()=>{
    let toReplace = findField.value;
    let replaceWith = replaceField.value;

    paragraphContent = paragraph.innerText;

    paragraph.innerText = paragraphContent.replaceAll(toReplace, replaceWith);

    label_frequencyCount.innerText = `0 times.`
})
