const dobForm = document.getElementById("dobForm");
const dobInput = document.getElementById("dobInput");
const ageDisplay = document.getElementById("ageDisplay");
const ResetButton = document.getElementById("ResetButton");


dobForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    // get dob
    let DOB_value = e.target["dobInput"].value;
    if(!DOB_value){
        alert("Bhai D.O.B toh select kar!!!...");
        return
    }
     
    let dob = new Date(DOB_value);
    let today = new Date();

    let year = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();

    // Adjust day
    if (day < 0) {
        month--;
        // get days in previous month
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        day = prevMonth + day;
    }

    // Adjust month
    if (month < 0) {
        year--;
        month = 12 + month;
    }

    // display span.
    let displayContent = `Yrr tum toh ${year} saal, ${month} mahinoo oor ${day} din k hoo gyaa hoo... <br/> Kyuun hilaa dala naa.`
    ageDisplay.innerHTML = displayContent;

    // display reload button
    ResetButton.style.display = "block";
})

ResetButton.addEventListener("click" , ()=>{
    location.reload();
})