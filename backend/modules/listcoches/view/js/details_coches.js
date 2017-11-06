$(document).ready(function () {
 load_coche();
});

function load_coche() {
  $.post("../../listcoches/detailcoche", function(data){
    var json = JSON.parse(data);
    console.log(data);
    detalles_coche(json);
    //alert( "success" );
}).done(function () {
    //alert( "second success" );
}).fail(function () {
    alert( "error" );
}).always(function () {
    //alert( "finished" );
});
}

function detalles_coche(data) {
      console.log(data);
      var content = document.getElementById("content");
      var div_user = document.createElement("div");
      var parrafo = document.createElement("p");
              var dat = document.createElement("div");
              var button=document.createElement("button");
              var view=document.createTextNode("Volver");
              button.appendChild(view);
              var Matricula=data[0].Matricula;
              var Tipo=data[0].Tipo;
              var Marca=data[0].marca;
              var Fecha=data[0].Fecha_compra;
              var Potencia=data[0].Potencia;
              var Combustible=data[0].Combustible;
              var Kilometraje=data[0].kilometraje;
              var abs=data[0].ABS;
              var dsc=data[0].DSC;
              var esp=data[0].ESP;
              var direccion=data[0].Direccion_Asistida;
              //console.log(valor);
              button.addEventListener("click",function(){
                window.location.href="../../listcoches/start_list";
              });
              dat.innerHTML = avatar2(data[0].avatar) + "<br> Matricula:" + Matricula +"<br> Tipo:"+Tipo+"<br> Marca:"+Marca
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
