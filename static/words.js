function minimise(){
    if (document.getElementById("minimisephrase").innerHTML == "+"){
        document.getElementById("phraseslist").style.dsplay = "";
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
SUSISkill=`
What is * in * | * in * 
!console:$ans$
{
  "url":"http://andwhyjaycee.herokuapp.com/api/susi?language=$2$&phrase=$1$",
  "path":"$.ans"
}
eol

Give me a word | Random word
!console:$ans$
{
  "url":"http://andwhyjaycee.herokuapp.com/api/susi/random",
  "path":"$.ans"
}
eol
`;
SUSISkillEncoded = 'What%20is%20%2A%20in%20%2A%20%7C%20%2A%20in%20%2A%20%0A%21console%3A%24ans%24%0A%7B%0A%20%20%22url%22%3A%22http%3A%2F%2Fandwhyjaycee.herokuapp.com%2Fapi%2Fsusi%3Flanguage%3D%242%24%26phrase%3D%241%24%22%2C%0A%20%20%22path%22%3A%22%24.ans%22%0A%7D%0Aeol%0A%0AGive%20me%20a%20word%20%7C%20Random%20word%0A%21console%3A%24ans%24%0A%7B%0A%20%20%22url%22%3A%22http%3A%2F%2Fandwhyjaycee.herokuapp.com%2Fapi%2Fsusi%2Frandom%22%2C%0A%20%20%22path%22%3A%22%24.ans%22%0A%7D%0Aeol';
//Use URL encoder to encode SUSI Skill https://www.urlencoder.org/
function test(text){
    url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+encodeURI(text)+"&instant="+encodeURI(SUSISkill);
    //hi";//"https://api.susi.ai/susi/chat.json";
    //url = "https://api.susi.ai/susi/chat.json";//?timezoneOffset=-480&q="+text;
    url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+text+"&instant="+SUSISkillEncoded;
    //alert(url);    
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
