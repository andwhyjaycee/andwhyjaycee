function RESTAPI(text){
        url = "https://api.susi.ai/susi/chat.json?timezoneOffset=-480&q="+text;
        //alert(text);    
        console.log("test");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 languages = JSON.parse(this.responseText); 
             }
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send("Your JSON Data Here");

    };
