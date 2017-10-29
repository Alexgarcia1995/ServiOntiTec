app.controller('listadoCtrl', function ($scope, services,CommonService) {
    var json;
    var limit;
    var i;
    let valor="";
    load_coches(valor);
    $(window).scroll(function(){
      if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
        //alert("Hola");
        scroll();
       }
    });
    $scope.buscar = function() {
      let vista= document.getElementById("data");
      while (vista.firstChild) {
        vista.removeChild(vista.firstChild);
      }
      valor=$scope.filtro;
      load_coches(valor);
      $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
          //alert("Hola");
          scroll();
         }
      });
    }

function load_coches(filtro) {
   services.get('listcoches', 'load_list').then(function (data) {
        if(filtro===""){
        json=data;
        i=0;
        limit=1;
        //console.log(data);
        pintar_coche(json,limit);
        }
        else{
          let datos=[];
          for (i; i < data.length;i++) {
            if(data[i].Tipo===filtro){
              datos.push(data[i]);
            }
          }
          json=datos;
          i=0;
          limit=1;
          //console.log(data);
          pintar_coche(json,limit);
        }
        
    });
}
function scroll() {
   services.get('listcoches', 'scroll').then(function (data) {
        //var datos = JSON.parse(data);
        limit+=data.valor;
        //alert(limit);
        //console.log(json);
        pintar_coche(json,limit);
        //alert( "success" );
    });
  
}


// $(document).ready(function () {
//     var json;
//     var limit;
//     var i;
//     load_coches();
//     $(window).scroll(function(){
//       if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
//         //alert("Hola");
//         scroll();
//        }
//     });
// });

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
              var a=document.createElement("a");            
              var Matricula=data[i].Matricula;
              var Tipo=data[i].Tipo;
              var Marca=data[i].marca;
              a.href = "#/listado&id="+Matricula;
              button.appendChild(view);
              a.appendChild(button); 
              dat.innerHTML = avatar(data[i].avatar) + " " + Matricula +" "+Tipo+" "+Marca + "<br>";
              //View_More(button,Matricula);
              parrafo.appendChild(dat).appendChild(a);
      }
      i=limit;
      div_user.appendChild(parrafo);
      content.appendChild(div_user);
    }
    else {
      var final=limit;
      if (final>limites) {
        final=limites
      }
      for (i; i < final;i++) { 
        console.log(i);
        var dat = document.createElement("div");
        var button=document.createElement("button");
        var view=document.createTextNode("Mas info");
        var a=document.createElement("a");            
        var Matricula=data[i].Matricula;
        var Tipo=data[i].Tipo;
        var Marca=data[i].marca;
        a.href = "#/listado&id="+Matricula;
        button.appendChild(view);
        a.appendChild(button); 
        dat.innerHTML = avatar(data[i].avatar) + " " + Matricula +" "+Tipo+" "+Marca + "<br>";
        //View_More(button,Matricula);
        parrafo.appendChild(dat).appendChild(a);
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
        // function View_More(button,identificador){
        //   button.addEventListener("click",function(){
        //     var pretty_list_articles = CommonService.pretty("?module=listcoches&function=redirect_details&aux="+identificador);
        //     services.get(pretty_list_articles).then(function (data, status) {
        //    // $.get(pretty_list_articles,
        //     //function (data, status) {
        //     console.log(data);
        //     //var myResponse = JSON.parse(data);
        //     console.log(myResponse);
        //     window.location.href = myResponse.redirect;
        //     });
        //   });
        // } 
    }
});


app.controller('detailsCtrl', function ($scope,data,services,ofertas_map) {
  detalles_coche(data);
  ofertas_map.cargarmap($scope);
  
  function detalles_coche(data) {
    console.log(data.data);
    var content = document.getElementById("datos");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");
            var dat = document.createElement("div");
            var button=document.createElement("button");
            var view=document.createTextNode("Volver");
            button.appendChild(view);
            var Matricula=data.data[0].Matricula;
            var Tipo=data.data[0].Tipo;
            var Marca=data.data[0].marca;
            var Fecha=data.data[0].Fecha_compra;
            var Potencia=data.data[0].Potencia;
            var Combustible=data.data[0].Combustible;
            var Kilometraje=data.data[0].kilometraje;
            var abs=data.data[0].ABS;
            var dsc=data.data[0].DSC;
            var esp=data.data[0].ESP;
            var direccion=data.data[0].Direccion_Asistida;
            //console.log(valor);
            button.addEventListener("click",function(){
              window.location.href="#/listado";
            });
            dat.innerHTML = avatar2(data.data[0].avatar) + "<br> Matricula:" + Matricula +"<br> Tipo:"+Tipo+"<br> Marca:"+Marca
            + "<br> Fecha compra:" + Fecha + "<br> Potencia:" + Potencia + "<br> Combustible:" + Combustible + "<br> Kilometraje:" + Kilometraje
            + "<br> abs:" + abs + "<br> dsc:" + dsc+ "<br> esp:" + esp + "<br> Direccion_Asistida:" + direccion + "<br>";
            parrafo.appendChild(dat).appendChild(button);

    div_user.appendChild(parrafo);
    content.appendChild(div_user);

    function avatar2(names) {
        if (names != null) {
                var html = '<img src="' + names + '" height="100" width="100"> ';
                return html;
            } else {
              var html = '<img src="" height="100" width="100"> ';
              return html;
            }
        }

}
})

  

