function ShowAlert() {
    alert("This is an alert!")
}

function runCalc(){

    var int1 = Number(document.getElementById("int1").value);
    var int2 = Number(document.getElementById("int2").value);
    document.getElementById("calcResult").innerText = int1 + int2;
}
function checkPassword(){
    var userField = document.getElementById("password");


    if(userField.value.length > 11){
        document.getElementById("check1").style.color = "green";
        document.getElementById("checkIcon1").style.color = "green";
        document.getElementById("checkIcon1").innerText = "done";
    }
    else{
        document.getElementById("check1").style.color = "red";
        document.getElementById("checkIcon1").style.color = "red";
        document.getElementById("checkIcon1").innerText = "clear";
    }
    if(checkForNumber(userField.value)){
        document.getElementById("check2").style.color = "green";
        document.getElementById("checkIcon2").style.color = "green";
        document.getElementById("checkIcon2").innerText = "done";
    }
    else{
        document.getElementById("check2").style.color = "red";
        document.getElementById("checkIcon2").style.color = "red";
        document.getElementById("checkIcon2").innerText = "clear";
    }
    if(checkForSymbol(userField.value)){
        document.getElementById("check3").style.color = "green";
        document.getElementById("checkIcon3").style.color = "green";
        document.getElementById("checkIcon3").innerText = "done";
    }
    else{
        document.getElementById("check3").style.color = "red";
        document.getElementById("checkIcon3").style.color = "red";
        document.getElementById("checkIcon3").innerText = "clear";
    }
}
function checkForNumber(input){
    var i;
    for (i = 0; i < input.length; i++) {
        if(!isNaN(input[i])){
            return true;
        }
    }
    return false;
}

function checkForSymbol(input){
    if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(input)){
        return true;
    }
    return false;
}