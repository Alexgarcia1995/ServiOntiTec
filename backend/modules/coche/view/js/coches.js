//Crear un plugin
jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        //if ($("#marca").val() == "") {
        if ($("#marca").val() == "") {
            $("#marca").val("Introduce marca");
            $("#marca").focus(function () {
                if ($("#marca").val() == "Introduce marca") {
                    $("#marca").val('');
                }
            });
        }
        $("#marca").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#marca").val() == "") {
                $("#marca").val("Introduce marca");
            }
        });

        if ($("#matricula").val() == "") {
            $("#matricula").val("Introduce matricula");
            $("#matricula").focus(function () {
                if ($("#matricula").val() == "Introduce matricula") {
                    $("#matricula").val('');
                }
            });
        }
        $("#matricula").blur(function () {
            if ($("#matricula").val() == "") {
                $("#matricula").val("Introduce matricula");
            }
        });
        /*if ($("#birth_date").val() == "") {
            $("#birth_date").val("Introduce date of birth");
            $("#birth_date").focus(function () {
                if ($("#birth_date").val() == "Introduce date of birth") {
                    $("#birth_date").val('');
                }
            });
        }
        $("#birth_date").blur(function () {
            if ($("#birth_date").val() == "") {
                $("#birth_date").val("Introduce date of birth");
            }
        });*/
        if ($("#title_date").val() == "") {
            $("#title_date").val("Introduce fecha compra vehiculo");
            $("#title_date").focus(function () {
                if ($("#title_date").val() == "Introduce fecha compra vehiculo") {
                    $("#title_date").val('');
                }
            });
        }
        $("#title_date").blur(function () {
            if ($("#title_date").val() == "") {
                $("#title_date").val("Introduce fecha compra vehiculo");
            }
        });
        if ($("#kilometraje").val() == "") {
            $("#kilometraje").val("Introduce kilometraje");
            $("#kilometraje").focus(function () {
                if ($("#kilometraje").val() == "Introduce kilometraje") {
                    $("#kilometraje").val("");
                }
            });
        }
        $("#kilometraje").blur(function () {
            if ($("#kilometraje").val() == "") {
                $("#kilometraje").val("Introduce kilometraje");
            }
        });
        if ($("#user").val() == "") {
            $("#user").val("Introduce user");
            $("#user").focus(function () {
                if ($("#user").val() == "Introduce user") {
                    $("#user").val("");
                }
            });
        }
        $("#user").blur(function () {
            if ($("#user").val() == "") {
                $("#user").val("Introduce user");
            }
        });
        if ($("#pass").val() == "") {
            $("#pass").val("password");
            $("#pass").focus(function () {
                if ($("#pass").val() == "password") {
                    $("#pass").val("");
                }
            });
        }
        $("#pass").blur(function () {
            if ($("#pass").val() == "") {
                $("#pass").val("password");
            }
        });
        if ($("#conf_pass").val() == "") {
            $("#conf_pass").val("password");
            $("#conf_pass").focus(function () {
                if ($("#conf_pass").val() == "password") {
                    $("#conf_pass").val("");
                }
            });
        }
        $("#conf_pass").blur(function () {
            if ($("#conf_pass").val() == "") {
                $("#conf_pass").val("password");
            }
        });
        if ($("#email").val() == "") {
            $("#email").val("Introduce email");
            $("#email").focus(function () {
                if ($("#email").val() == "Introduce email") {
                    $("#email").val("");
                }
            });
        }
        $("#email").blur(function () {
            if ($("#email").val() == "") {
                $("#email").val("Introduce email");
            }
        });
        if ($("#conf_email").val() == "") {
            $("#conf_email").val("Repeat email");
            $("#conf_email").focus(function () {
                if ($("#conf_email").val() == "Repeat email") {
                    $("#conf_email").val("");
                }
            });
        }
        $("#conf_email").blur(function () {
            if ($("#conf_email").val() == "") {
                $("#conf_email").val("Repeat email");
            }
        });
    });//each
    return this;
};//function

//Solution to : "Uncaught Error: Dropzone already attached."
Dropzone.autoDiscover = false;
$(document).ready(function () {

    //Datepicker///////////////////////////
    $("#birth_date").datepicker({
        dateFormat: 'mm/dd/yy',
        defaultDate: '05/05/1999',
        changeMonth: true,
        changeYear: true,
        yearRange: '-110:-16'
    });
    $("#title_date").datepicker({
        maxDate: 'today',
        dateFormat: 'mm/dd/yy',
        defaultDate: 'today',
        changeMonth: true,
        changeYear: true
    });

    //Valida users /////////////////////////
    $('#submit_user').click(function () {
        validate_user();
    });

    //Control de seguridad para evitar que al volver atrás de la pantalla results a create, no nos imprima los datos
    $.get("modules/users/controller/controller_users.class.php?load_data=true",
            function (response) {
                //alert(response.user);
                if (response.user === "") {
                    $("#marca").val('');
                    $("#matricula").val('');
                    //$("#birth_date").val('');
                    $("#title_date").val('');
                    $("#kilometraje").val('');
                    /*$("#user").val('');
                    $("#pass").val('');
                    $("#conf_pass").val('');
                    $("#email").val('');
                    $("#conf_email").val('');*/
                    $("#Tipo").val('Seleccione Tipo Vehiculo');
                    var inputElements = document.getElementsByClassName('messageCheckbox');
                    for (var i = 0; i < inputElements.length; i++) {
                        if (inputElements[i].checked) {
                            inputElements[i].checked = false;
                        }
                    }
                    //siempre que creemos un plugin debemos llamarlo, sino no funcionará
                    $(this).fill_or_clean();
                } else {
                    $("#marca").val(response.user.marca);
                    $("#matricula").val(response.user.matricula);
                    //$("#birth_date").val(response.user.birth_date);
                    $("#title_date").val(response.user.title_date);
                    $("#kilometraje").val(response.user.kilometraje);
                    /*$("#user").val(response.user.user);
                    $("#pass").val(response.user.pass);
                    $("#conf_pass").val(response.user.conf_pass);
                    $("#email").val(response.user.email);
                    $("#conf_email").val(response.user.conf_email);*/
                    $("#Tipo").val(response.user.Tipo);
                    var interests = response.user.interests;
                    var inputElements = document.getElementsByClassName('messageCheckbox');
                    for (var i = 0; i < interests.length; i++) {
                        for (var j = 0; j < inputElements.length; j++) {
                            if (interests[i] === inputElements[j])
                                inputElements[j].checked = true;
                        }
                    }
                }
            }, "json");

    //Dropzone function //////////////////////////////////
    $("#dropzone").dropzone({
        url: "modules/Coches/controller/controller_coches.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function () {
            this.on("success", function (file, response) {
                //alert(response);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
            });
        },
        complete: function (file) {
            //if(file.status == "success"){
            //alert("El archivo se ha subido correctamente: " + file.marca);
            //}
        },
        error: function (file) {
            //alert("Error subiendo el archivo " + file.marca);
        },
        removedfile: function (file, serverFileName) {
            var marca = file.marca;
            $.ajax({
                type: "POST",
                url: "modules/Coches/controller/controller_coches.class.php?delete=true",
                data: "filemarca=" + marca,
                success: function (data) {
                    $("#progress").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");

                    var json = JSON.parse(data);
                    if (json.res === true) {
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                            //alert("Imagen eliminada: " + marca);
                        } else {
                            false;
                        }
                    } else { //json.res == false, elimino la imagen también
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                        } else {
                            false;
                        }
                    }
                }
            });
        }
    });

    //Utilizamos las expresiones regulares para las funciones de  fadeout
    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var kilometraje_reg = /^[0-9- -.]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[0-9A-Za-z]{2,30}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#marca, #matricula").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#conf_email").keyup(function () {
        if ($(this).val() != "" && $(this).val() == $('#email').val()) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#user").keyup(function () {
        if ($(this).val() != "" && usr_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#conf_pass").keyup(function () {
        if ($(this).val() != "" && $(this).val() == $('#pass').val()) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#pass").keyup(function () {
        if ($(this).val() != "" && pass_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#title_date, #birth_date").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#kilometraje").keyup(function () {
        if ($(this).val() != "" && kilometraje_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#email").keyup(function () {
        if ($(this).val() != "" && email_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
});
load_countries_v1();

$("#province").empty();
$("#province").append('<option value="" selected="selected">Select province</option>');
$("#province").prop('disabled', true);
$("#city").empty();
$("#city").append('<option value="" selected="selected">Select city</option>');
$("#city").prop('disabled', true);
$("#country1").change(function() {
var country = $(this).val();
var province = $("#province");
var city = $("#city");
if(country !== 'ES'){
       province.prop('disabled', true);
       city.prop('disabled', true);
       $("#province").empty();
    $("#city").empty();
}else{
       province.prop('disabled', false);
       city.prop('disabled', false);
       load_provinces_v2();
}
});

$("#province").change(function() {
var prov = $(this).val();
if(prov > 0){
  load_cities_v2(prov);
}else{
  $("#city").prop('disabled', false);
}
});

function validate_user() {
    var result = true;

    var marca = document.getElementById('marca').value;
    var matricula = document.getElementById('matricula').value;
    //var birth_date = document.getElementById('birth_date').value;
    var title_date = document.getElementById('title_date').value;
    var kilometraje = document.getElementById('kilometraje').value;
    var Tipo = document.getElementById('Tipo').value;
    var Potencia=document.getElementById('Potencia').value;
    var Combustible=document.getElementById('Combustible').value;
    var Descripcion=document.getElementById('Descripcion').value;
    /*var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conf_pass = document.getElementById('conf_pass').value;
    var email = document.getElementById('email').value;
    var conf_email = document.getElementById('conf_email').value;*/
    var interests = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            interests[j] = inputElements[i].value;
            j++;
        }
    }

    //Utilizamos las expresiones regulares para la validación de errores JS
    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var kilometraje_reg = /^[0-9- -.]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[0-9A-Za-z]{2,}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    $(".error").remove();

    if ($("#marca").val() == "" || $("#marca").val() == "Introduce marca") {
        $("#marca").focus().after("<span class='error'>Introduce marca</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#marca").val())) {
        $("#marca").focus().after("<span class='error'>Name must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    else if ($("#matricula").val() == "" || $("#matricula").val() == "Introduce matricula") {
        $("#matricula").focus().after("<span class='error'>Introduce matricula</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#matricula").val())) {
        $("#matricula").focus().after("<span class='error'>Matricula must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    /*else if ($("#birth_date").val() == "" || $("#birth_date").val() == "Introduce date of birth") {
        $("#birth_date").focus().after("<span class='error'>Introduce date of birth</span>");
        result = false;
        return false;
    } else if (!date_reg.test($("#birth_date").val())) {
        $("#birth_date").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }
*/
    else if ($("#title_date").val() == "" || $("#title_date").val() == "Introduce fecha compra vehiculo") {
        $("#title_date").focus().after("<span class='error'>Introduce fecha compra vehiculo</span>");
        result = false;
        return false;
    } else if (!date_reg.test($("#title_date").val())) {
        $("#title_date").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }

    if ($("#kilometraje").val() == "" || $("#kilometraje").val() == "Introduce kilometraje") {
        $("#kilometraje").focus().after("<span class='error'>Introduce kilometraje</span>");
        result = false;
        return false;
    } else if (!kilometraje_reg.test($("#kilometraje").val())) {
        $("#kilometraje").focus().after("<span class='error'>El kilometraje solo se puede expresar con numeros.</span>");
        result = false;
        return false;
    }
    if ($("#Potencia").val() == "" || $("#Potencia").val() == "Introduce Potencia") {
        $("#Potencia").focus().after("<span class='error'>Introduce kilometraje</span>");
        result = false;
        return false;
    } else if (!kilometraje_reg.test($("#Potencia").val())) {
        $("#Potencia").focus().after("<span class='error'> Potencia solo se puede expresar con numeros.</span>");
        result = false;
        return false;
    }
    else if ($("#Descripcion").val() == "" || $("#Descripcion").val() == "Introduce Descripcion") {
        $("#Descripcion").focus().after("<span class='error'>Introduce Descripcion</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#Descripcion").val())) {
        $("#Descripcion").focus().after("<span class='error'>Descripcion must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    /*if ($("#user").val() == "" || $("#user").val() == "Introduce user") {
        $("#user").focus().after("<span class='error'>Introduce user</span>");
        result = false;
        return false;
    } else if (!usr_reg.test($("#user").val())) {
        $("#user").focus().after("<span class='error'>Last marca must be 2 to 20 characters.</span>");
        result = false;
        return false;
    }

    if ($("#pass").val() == "" || $("#pass").val() == "password") {
        $("#pass").focus().after("<span class='error'>Introduce pass</span>");
        result = false;
        return false;
    } else if (!pass_reg.test($("#pass").val())) {
        $("#pass").focus().after("<span class='error'>Last marca must be 6 to 32 characters.</span>");
        result = false;
        return false;
    }

    if ($("#conf_pass").val() == "" || $("#conf_pass").val() == "password") {
        $("#conf_pass").focus().after("<span class='error'>Repeat pass</span>");
        result = false;
        return false;
    } else if ($("#pass").val() != $("#conf_pass").val()) {
        $("#conf_pass").focus().after("<span class='error'>Pass doesn't match.</span>");
        result = false;
        return false;
    }

    if ($("#email").val() == "" || $("#email").val() == "Introduce email") {
        $("#email").focus().after("<span class='error'>Introduce email</span>");
        result = false;
        return false;
    } else if (!email_reg.test($("#email").val())) {
        $("#email").focus().after("<span class='error'>Error format email (example@example.com).</span>");
        result = false;
        return false;
    }

    if ($("#conf_email").val() == "" || $("#conf_email").val() == "Repeat email") {
        $("#conf_email").focus().after("<span class='error'>Repeat email</span>");
        result = false;
        return false;
    } else if ($("#email").val() != $("#conf_email").val()) {
        $("#conf_email").focus().after("<span class='error'>Email doesn't match.</span>");
        result = false;
        return false;
    }
*/
    //Si ha ido todo bien, se envian los datos al servidor
    if (result) {
        var data = {"marca": marca, "matricula": matricula, "title_date": title_date, "kilometraje": kilometraje, "Tipo": Tipo, "interests": interests,
        "potencia":Potencia, "combustible":Combustible, "descripcion":Descripcion};
        var data_users_JSON = JSON.stringify(data);
        console.log(data_users_JSON);
        $.post('../../coche/alta_coches',
                {alta_users_json: data_users_JSON},
        function (response) {
          console.log(typeof(response));
            if (response.success) {
                console.log(response);
                debugger;
                window.location.href = response.redirect;
            }
            console.log(response);
            //alert(response);  //para debuguear
            //}); //para debuguear
        }, "json").fail(function (xhr, textStatus, errorThrown ) {
          console.log(xhr.responseText);
          if (xhr.responseJSON === undefined || xhr.responseJSON === null)
            xhr.responseJSON = JSON.parse(xhr.responseText);
            //alert(xhr.status);
            //alert(textStatus);
            //alert(errorThrown);
            if (xhr.status === 0) {
                alert('Not connect: Verify Network.');
            } else if (xhr.status == 404) {
                alert('Requested page not found [404]');
            } else if (xhr.status == 500) {
                alert('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (textStatus === 'timeout') {
                alert('Time out error.');
            } else if (textStatus === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error: ' + xhr.responseText);
            }

            if (xhr.responseJSON == 'undefined' && xhr.responseJSON == null )
                xhr.responseJSON = JSON.parse(xhr.responseText);

            if (xhr.responseJSON.error.marca)
                $("#marca").focus().after("<span  class='error1'>" + xhr.responseJSON.error.marca + "</span>");

            if (xhr.responseJSON.error.matricula)
                $("#matricula").focus().after("<span  class='error1'>" + xhr.responseJSON.error.matricula + "</span>");

            if (xhr.responseJSON.error.title_date)
                $("#title_date").focus().after("<span  class='error1'>" + xhr.responseJSON.error.title_date + "</span>");

            if (xhr.responseJSON.error.kilometraje)
                $("#kilometraje").focus().after("<span  class='error1'>" + xhr.responseJSON.error.kilometraje + "</span>");

  /*          if (xhr.responseJSON.error.birth_date)
                $("#birth_date").focus().after("<span  class='error1'>" + xhr.responseJSON.error.birth_date + "</span>");

            if (xhr.responseJSON.error.user)
                $("#user").focus().after("<span  class='error1'>" + xhr.responseJSON.error.user + "</span>");

            if (xhr.responseJSON.error.pass)
                $("#pass").focus().after("<span  class='error1'>" + xhr.responseJSON.error.pass + "</span>");

            if (xhr.responseJSON.error.conf_pass)
                $("#conf_pass").focus().after("<span  class='error1'>" + xhr.responseJSON.error.conf_pass + "</span>");

            if (xhr.responseJSON.error.email)
                $("#email").focus().after("<span  class='error1'>" + xhr.responseJSON.error.email + "</span>");

            if (xhr.responseJSON.error.conf_email)
                $("#conf_email").focus().after("<span class='error1'>" + xhr.responseJSON.error.conf_email + "</span>");
*/
            if (xhr.responseJSON.error.Tipo)
                $("#Tipo").focus().after("<span  class='error1'>" + xhr.responseJSON.error.Tipo + "</span>");

            if (xhr.responseJSON.error.interests)
                $("#e_interests").focus().after("<span  class='error1'>" + xhr.responseJSON.error.interests + "</span>");

            if (xhr.responseJSON.error_avatar)
                $("#dropzone").focus().after("<span  class='error1'>" + xhr.responseJSON.error_avatar + "</span>");

            if (xhr.responseJSON.success1) {
                if (xhr.responseJSON.img_avatar !== "/PhpProject1/media/default-avatar.png") {
                    //$("#progress").show();
                    //$("#bar").width('100%');
                    //$("#percent").html('100%');
                    //$('.msg').text('').removeClass('msg_error');
                    //$('.msg').text('Success Upload image!!').addClass('msg_ok').animate({ 'right' : '300px' }, 300);
                }
            } else {
                $("#progress").hide();
                $('.msg').text('').removeClass('msg_ok');
                $('.msg').text('Error Upload image!!').addClass('msg_error').animate({'right': '300px'}, 300);
            }
        });
    }
}

function load_countries_v2(cad) {
    $.getJSON( cad, function(data) {
      $("#country1").empty();
      $("#country1").append('<option value="" selected="selected">Select country</option>');

      $.each(data, function (i, valor) {
        $("#country1").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
      });
    })
    .fail(function() {
        alert( "error load_countries" );
    });
}

function load_countries_v1() {
    $.get( "modules/Coches/controller/controller_coches.class.php?load_country=true",
        function( response ) {
            //console.log(response);
            if(response === 'error'){
                load_countries_v2("resources/ListOfCountryNamesByName.json");
            }else{
                load_countries_v2("modules/Coches/controller/controller_coches.class.php?load_country=true"); //oorsprong.org
            }
    })
    .fail(function(response) {
        load_countries_v2("resources/ListOfCountryNamesByName.json");
    });
}

function load_provinces_v2() {
    $.get("resources/provinciasypoblaciones.xml", function (xml) {
	    $("#province").empty();
	    $("#province").append('<option value="" selected="selected">Select province</option>');

        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text();
            $("#province").append("<option value='" + id + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}

function load_provinces_v1() { //provinciasypoblaciones.xml - xpath
    $.get( "modules/Coches/controller/controller_coches.class.php?load_provinces=true",
        function( response ) {
          $("#province").empty();
	        $("#province").append('<option value="" selected="selected">Select province</option>');

            //alert(response);
        var json = JSON.parse(response);
		    var provinces=json.provinces;
		    //alert(provinces);
		    //console.log(provinces);

		    //alert(provinces[0].id);
		    //alert(provinces[0].nombre);

            if(provinces === 'error'){
                load_provinces_v2();
            }else{
                for (var i = 0; i < provinces.length; i++) {
        		    $("#province").append("<option value='" + provinces[i].id + "'>" + provinces[i].nombre + "</option>");
    		    }
            }
    })
    .fail(function(response) {
        load_provinces_v2();
    });
}

function load_cities_v2(prov) {
    $.get("resources/provinciasypoblaciones.xml", function (xml) {
		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

		$(xml).find('provincia[id=' + prov + ']').each(function(){
    		$(this).find('localidad').each(function(){
    			 $("#city").append("<option value='" + $(this).text() + "'>" + $(this).text() + "</option>");
    		});
        });
	})
	.fail(function() {
        alert( "error load_cities" );
    });
}

function load_cities_v1(prov) { //provinciasypoblaciones.xml - xpath
    var datos = { idPoblac : prov  };
	$.post("modules/Coches/controller/controller_coches.class.php", datos, function(response) {
	    //alert(response);
        var json = JSON.parse(response);
		var cities=json.cities;
		//alert(poblaciones);
		//console.log(poblaciones);
		//alert(poblaciones[0].poblacion);

		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

        if(cities === 'error'){
            load_cities_v2(prov);
        }else{
            for (var i = 0; i < cities.length; i++) {
        		$("#city").append("<option value='" + cities[i].poblacion + "'>" + cities[i].poblacion + "</option>");
    		}
        }
	})
	.fail(function() {
        load_cities_v2(prov);
    });
}
