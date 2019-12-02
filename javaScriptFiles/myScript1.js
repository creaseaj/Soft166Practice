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
    var Sec1,Sec2,Sec3,Sec4 = false;


    if(userField.value.length > 11){
        document.getElementById("check1").style.color = "green";
        document.getElementById("checkIcon1").style.color = "green";
        document.getElementById("checkIcon1").innerText = "done";
        Sec1 = true;
    }
    else{
        document.getElementById("check1").style.color = "red";
        document.getElementById("checkIcon1").style.color = "red";
        document.getElementById("checkIcon1").innerText = "clear";
        Sec1 = false;
    }
    if(checkForNumber(userField.value)){
        document.getElementById("check2").style.color = "green";
        document.getElementById("checkIcon2").style.color = "green";
        document.getElementById("checkIcon2").innerText = "done";
        Sec2 = true;
    }
    else{
        document.getElementById("check2").style.color = "red";
        document.getElementById("checkIcon2").style.color = "red";
        document.getElementById("checkIcon2").innerText = "clear";
        Sec2 = false;
    }
    if(checkForSymbol(userField.value)){
        document.getElementById("check3").style.color = "green";
        document.getElementById("checkIcon3").style.color = "green";
        document.getElementById("checkIcon3").innerText = "done";
        Sec3 = true;
    }
    else{
        document.getElementById("check3").style.color = "red";
        document.getElementById("checkIcon3").style.color = "red";
        document.getElementById("checkIcon3").innerText = "clear";
        Sec3 = false;
    }
    if(checkForUpperAndLower(userField.value)){
        document.getElementById("check4").style.color = "green";
        document.getElementById("checkIcon4").style.color = "green";
        document.getElementById("checkIcon4").innerText = "done";
        Sec4 = true;
    }
    else{
        document.getElementById("check4").style.color = "red";
        document.getElementById("checkIcon4").style.color = "red";
        document.getElementById("checkIcon4").innerText = "clear";
        Sec4 = false;
    }
    if(checkForSymbol(userField.value)){
        document.getElementById("check5").style.color = "green";
        document.getElementById("checkIcon5").style.color = "green";
        document.getElementById("checkIcon5").innerText = "done";
        Sec5 = true;
    }
    else{
        document.getElementById("check5").style.color = "red";
        document.getElementById("checkIcon5").style.color = "red";
        document.getElementById("checkIcon5").innerText = "clear";
        Sec5 = false;
    }if(checkForSymbol(userField.value)){
        document.getElementById("check6").style.color = "green";
        document.getElementById("checkIcon6").style.color = "green";
        document.getElementById("checkIcon6").innerText = "done";
        Sec6 = true;
    }
    else{
        document.getElementById("check6").style.color = "red";
        document.getElementById("checkIcon6").style.color = "red";
        document.getElementById("checkIcon6").innerText = "clear";
        Sec6 = false;
    }
    //Checking all requirements are met
    if(Sec1 && Sec2 && Sec3 && Sec4 && Sec5 && Sec6){
        document.getElementById("secIcon").style.color = "green";
        document.getElementById("secIcon").innerText = "lock";
    }
    else{
        document.getElementById("secIcon").style.color = "red";
        document.getElementById("secIcon").innerText = "lock_open";
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
function checkForUpperAndLower(input){
    if(RegExp("[A-Z][a-z]|[a-z][A-Z]").test(input)){
        return true;
    }
    return false;
}
