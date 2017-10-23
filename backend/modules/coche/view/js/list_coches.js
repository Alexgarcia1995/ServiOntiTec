function load_users() {
    var pretty_list_articles = pretty("?module=coche&function=load_coches");
    $.get(pretty_list_articles,
        function (data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
    //var json = JSON.parse(data);
        pintar_user(json);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });

}

$(document).ready(function () {
    load_users();
});

function pintar_user(data) {
    //alert(data.user.avatar);
    var content = document.getElementById("content");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");
 
    for (var name_data in data) {
        if(name_data != 'user'){
            var dat = document.createElement("div");
            dat.innerHTML = name_data + " = " + data[name_data];
            parrafo.appendChild(dat);
        }else{
            for (var name_user in data.user){
                date_print(name_user, data.user[name_user]);
            }
        }
            
    }
    div_user.appendChild(parrafo);
    content.appendChild(div_user);
    
    //function to print dynamically divs
    function date_print(names, dates) {
        if (names === 'avatar' || names === 'interests') {
            if (names === 'avatar') {
                var img = document.createElement("div");
                var cad = dates;
                var html = '<img src="' + cad + '" height="75" width="75"> ';
                img.innerHTML = html;
                parrafo.appendChild(img);
            } else {
                var interests = document.createElement("div");
                interests.innerHTML = "interests = ";
                for (var i = 0; i < data.user.interests.length; i++) {
                    interests.innerHTML += " - " + data.user.interests[i];
                }
                parrafo.appendChild(interests);
            }
        } else {
            var date = document.createElement("div");
            date.innerHTML = names + " = " + dates;
            parrafo.appendChild(date);
        }
    }
}

function pretty(url) {
    var pretty_url="";
    url = url.replace("?", "");
    url = url.split("&");
    for(var i=0; i<url.length;i++){
    var aux = url[i].split("=");
    pretty_url += "/"+aux[1];
    }
    var SITEROOT = "http://localhost/Servidor_2DAW/Exercici_Framework/"
    var long_url = SITEROOT + pretty_url;
    return long_url;
    }
