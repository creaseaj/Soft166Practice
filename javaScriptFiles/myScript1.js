function checkPassword(){
    var userField = document.getElementById("password");
    if(userField.value.length > 11){
        document.getElementById("check1").style.color = "green";
        document.getElementById("checkIcon1").style.color = "green";
        document.getElementById("checkIcon1").innerText = "done";
        Sec1 = true;
        turnLightGreen(1);
    }
    else{
        document.getElementById("check1").style.color = "red";
        document.getElementById("checkIcon1").style.color = "red";
        document.getElementById("checkIcon1").innerText = "clear";
        Sec1 = false;
        turnLightRed(1);
    }
    if(checkForNumber(userField.value)){
        document.getElementById("check2").style.color = "green";
        document.getElementById("checkIcon2").style.color = "green";
        document.getElementById("checkIcon2").innerText = "done";
        Sec2 = true;
        turnLightGreen(4);
    }
    else{
        document.getElementById("check2").style.color = "red";
        document.getElementById("checkIcon2").style.color = "red";
        document.getElementById("checkIcon2").innerText = "clear";
        Sec2 = false;
        turnLightRed(4);
    }
    if(checkForSymbol(userField.value)){
        document.getElementById("check3").style.color = "green";
        document.getElementById("checkIcon3").style.color = "green";
        document.getElementById("checkIcon3").innerText = "done";
        Sec3 = true;
        turnLightGreen(2);
    }
    else{
        document.getElementById("check3").style.color = "red";
        document.getElementById("checkIcon3").style.color = "red";
        document.getElementById("checkIcon3").innerText = "clear";
        Sec3 = false;
        turnLightRed(2);
    }
    if(checkForUpperAndLower(userField.value)){
        document.getElementById("check4").style.color = "green";
        document.getElementById("checkIcon4").style.color = "green";
        document.getElementById("checkIcon4").innerText = "done";
        Sec4 = true;
        turnLightGreen(5);
    }
    else{
        document.getElementById("check4").style.color = "red";
        document.getElementById("checkIcon4").style.color = "red";
        document.getElementById("checkIcon4").innerText = "clear";
        Sec4 = false;
        turnLightRed(5);
    }
    if(checkForWords(userField.value)){
        document.getElementById("check5").style.color = "green";
        document.getElementById("checkIcon5").style.color = "green";
        document.getElementById("checkIcon5").innerText = "done";
        Sec5 = true;
        turnLightGreen(3);
    }
    else{
        document.getElementById("check5").style.color = "red";
        document.getElementById("checkIcon5").style.color = "red";
        document.getElementById("checkIcon5").innerText = "clear";
        Sec5 = false;
        turnLightRed(3);
    }if(checkForCommonPassword(userField.value)){
        document.getElementById("check6").style.color = "green";
        document.getElementById("checkIcon6").style.color = "green";
        document.getElementById("checkIcon6").innerText = "done";
        Sec6 = true;
        turnLightGreen(6);
    }
    else{
        document.getElementById("check6").style.color = "red";
        document.getElementById("checkIcon6").style.color = "red";
        document.getElementById("checkIcon6").innerText = "clear";
        Sec6 = false;
        turnLightRed(6);
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
    if(RegExp("[A-Z].*[a-z]|[a-z].*[A-Z]").test(input)){
        return true;
    }
    return false;
}
function checkForCommonPassword(input){
    for (var i = 0; i < rockYou.length;i++){
        if (rockYou[i] == input){
            return false;
            break;
        }
    }
    return true;
}
function checkForWords(input){
    for (var i = 0; i < commonWords.length;i++){
        if (input.toUpperCase().includes(commonWords[i].toUpperCase())){
            return false;
            break;
        }
    }
    return true;
}

function turnLightGreen(number){
    var lightState = {"hue" : 25500, "on":true,"sat": 255,"bri":120};
    $.ajax({
        url: getLightURI(number) + "state/",
        type: "PUT",
        data: JSON.stringify(lightState)
    })
}
function turnLightRed(number){
    var lightState = {"hue" : 0, "on":true,"sat": 255,"bri":120};
    $.ajax({
        url: getLightURI(number) + "state/",
        type: "PUT",
        data: JSON.stringify(lightState)
    })
}
function getLightURI(index) {
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + index + "/";
}
