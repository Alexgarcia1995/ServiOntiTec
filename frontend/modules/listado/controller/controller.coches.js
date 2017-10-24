

app.controller('listadoCtrl', function ($scope, services) {
function load_coches() {
   services.get('listcoches', 'load_list').then(function (data) {
        json = JSON.parse(data);
        i=0;
        limit=1;
        //console.log(data);
        pintar_coche(json,limit);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });
}
function scroll() {
   services.get('listcoches', 'scroll').then(function (data) {
        var datos = JSON.parse(data);
        limit+=datos.valor;
        alert(limit);
        //console.log(json);
        pintar_coche(json,limit);
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
    var json;
    var limit;
    var i;
    load_coches();
    $(window).scroll(function(){
      if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
        //alert("Hola");
        scroll();
       }
    });
});

function pintar_coche(data, limit) {
    var content = document.getElementById("data");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");
    var limites= data.length;
    if (i === 0) {
      for (i; i < limit;i++) {
              console.log(i);
              var dat = document.createElement("div");
              var button=document.createElement("button");
              var view=document.createTextNode("Mas info");
              button.appendChild(view);
              var Matricula=data[i].Matricula;
              var Tipo=data[i].Tipo;
              var Marca=data[i].marca;
              //console.log(valor);
              dat.innerHTML = avatar(data[i].avatar) + " " + Matricula +" "+Tipo+" "+Marca + "<br>";
              View_More(button,Matricula);
              parrafo.appendChild(dat).appendChild(button);
      }
      i=limit;
      div_user.appendChild(parrafo);
      content.appendChild(div_user);
    }
    else {
      alert("i="+ i);
      var final=limit;
      if (final>limites) {
        final=limites
      }
      for (i; i < final;i++) {
              console.log(i);
              var dat = document.createElement("div");
              var button=document.createElement("button");
              var view=document.createTextNode("Mas info");
              button.appendChild(view);
              var Matricula=data[i].Matricula;
              var Tipo=data[i].Tipo;
              var Marca=data[i].marca;
              //console.log(valor);
              dat.innerHTML = avatar(data[i].avatar) + " " + Matricula +" "+Tipo+" "+Marca + "<br>";
              View_More(button,Matricula);
              parrafo.appendChild(dat).appendChild(button);
      }

    div_user.appendChild(parrafo);
    content.appendChild(div_user);
    }



    //function to print dynamically divs
    function avatar(names) {
        if (names != null) {
                var html = '<img src="' + names + '" height="75" width="75"> ';
                return html;
            } else {
              var html = '<img src="" height="75" width="75"> ';
              return html;
            }
        }
        function View_More(button,identificador){
          button.addEventListener("click",function(){
            var pretty_list_articles = pretty("?module=listcoches&function=redirect_details&aux="+identificador);
            services.get(pretty_list_articles).then(function (data, status) {
           // $.get(pretty_list_articles,
            //function (data, status) {
            console.log(data);
            var myResponse = JSON.parse(data);
            console.log(myResponse);
            window.location.href = myResponse.redirect;
            });
          });
        } 
    }
});
    function pretty(url) {
        var pretty_url="";
        url = url.replace("?", "");
        url = url.split("&");
        for(var i=0; i<url.length;i++){
        var aux = url[i].split("=");
        pretty_url += "/"+aux[1];
        }
        var SITEROOT = "http://localhost/ServiOntiTec/"
        var long_url = SITEROOT + pretty_url;
        return long_url;
        }

