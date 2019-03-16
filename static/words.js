data={};
function RESTAPI(text){
        url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q=hi"//+encodeURI(text);
        alert(text);    
        //console.log("test");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 alert();
                 data = JSOH.parse(this.responseText);
             }
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();//"Your JSON Data Here");

    };
    
function minimise(){
    if (document.getElementById("minimisephrase").innerHTML == "+"){
        document.getElementById("phraseslist").style.display = "";
        document.getElementById("minimisephrase").innerHTML = "-";
    }
    else if (document.getElementById("minimisephrase").innerHTML == "-"){
        document.getElementById("phraseslist").style.display = "none";
        document.getElementById("minimisephrase").innerHTML = "+";
    }
    
}
document.getElementById("minimisephrase").addEventListener("click", minimise);

function searchCheck(){
    if (document.getElementById("search-phrase").value == ""){
        alert("Please enter a phrase to search for");
        return false
    }
    if (document.getElementById("search-language").value == ""){
        alert("Please enter a language");
        return false
    }
    return true
}
data={};
function test(text){
    url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+text;//hi";//"https://api.susi.ai/susi/chat.json";
    //url = "https://api.susi.ai/susi/chat.json";//?timezoneOffset=-480&q="+text;
    //alert(text);    
    console.log(url);
    document.getElementById("susioutput").innerHTML = "loading....";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             //alert(this.responseText);
             data = this.responseText;
             document.getElementById("susioutput").innerHTML = JSON.parse(data).answers[0].actions[0].expression; 
         }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();//"?timezoneOffset=-480&q="+decodeURI(text));

};
