

function nextPage(){
    let checkID = document.getElementById("studentID").value;
    let checkPass = document.getElementById("pass").value;
    
    
    if(checkID && checkPass){
        window.location.href = "studentReg.html";
    }
    
}