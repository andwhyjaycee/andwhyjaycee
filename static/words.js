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

Give me a fun fact|fun fact
2 indigenous languages disappear everyday...|Over 200 indigenous languages existed in Australia but it’s only 20 now...|“Omap aoka(i)”in Ainu  means “love you”❤️💝💗!|“I” in Ainu also means “I” in English!|“Man” in Ainu means “to swim”in English.|“Sir” in Ainu has 4 different definitions.|“Hi” in Ainu is a (nominalizing verb suffix) .|“Mom” in Ainu means “to float” in English.|There are over 7000 indigenous languages around the world…|2680 indigenous languages are in danger...|
`;
SUSISkillEncoded = 'What%20is%20%2A%20in%20%2A%20%7C%20%2A%20in%20%2A%20%0A%21console%3A%24ans%24%0A%7B%0A%20%20%22url%22%3A%22http%3A%2F%2Fandwhyjaycee.herokuapp.com%2Fapi%2Fsusi%3Flanguage%3D%242%24%26phrase%3D%241%24%22%2C%0A%20%20%22path%22%3A%22%24.ans%22%0A%7D%0Aeol%0A%0AGive%20me%20a%20word%20%7C%20Random%20word%0A%21console%3A%24ans%24%0A%7B%0A%20%20%22url%22%3A%22http%3A%2F%2Fandwhyjaycee.herokuapp.com%2Fapi%2Fsusi%2Frandom%22%2C%0A%20%20%22path%22%3A%22%24.ans%22%0A%7D%0Aeol%0A%0AGive%20me%20a%20fun%20fact%7Cfun%20fact%0A2%20indigenous%20languages%20disappear%20everyday...%7COver%20200%20indigenous%20languages%20existed%20in%20Australia%20but%20it%E2%80%99s%20only%2020%20now...%7C%E2%80%9COmap%20aoka%28i%29%E2%80%9Din%20Ainu%20%20means%20%E2%80%9Clove%20you%E2%80%9D%E2%9D%A4%EF%B8%8F%F0%9F%92%9D%F0%9F%92%97%21%7C%E2%80%9CI%E2%80%9D%20in%20Ainu%20also%20means%20%E2%80%9CI%E2%80%9D%20in%20English%21%7C%E2%80%9CMan%E2%80%9D%20in%20Ainu%20means%20%E2%80%9Cto%20swim%E2%80%9Din%20English.%7C%E2%80%9CSir%E2%80%9D%20in%20Ainu%20has%204%20different%20definitions.%7C%E2%80%9CHi%E2%80%9D%20in%20Ainu%20is%20a%20%28nominalizing%20verb%20suffix%29%20.%7C%E2%80%9CMom%E2%80%9D%20in%20Ainu%20means%20%E2%80%9Cto%20float%E2%80%9D%20in%20English.%7CThere%20are%20over%207000%20indigenous%20languages%20around%20the%20world%E2%80%A6%7C2680%20indigenous%20languages%20are%20in%20danger...%7C';// encodeURI(SUSISkill);
//Use URL encoder to encode SUSI Skill https://www.urlencoder.org/
function test(text){
    url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+encodeURI(text)+"&instant="+encodeURI(SUSISkill);
    url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+text+"&instant="+SUSISkillEncoded;
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

document.getElementById("susi").addEventListener("keyup",function(){
    if (event.which === 13) {test(document.getElementById("susi").value);}});
document.getElementById("susisend").addEventListener("keyup",function(){test(document.getElementById("susi").value);});
