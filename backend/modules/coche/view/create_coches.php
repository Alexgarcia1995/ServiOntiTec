<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
<!-- Script with absolute route -->

<section id="contact-page">
    <div class="container">
        <div class="center">
            <h2>ADD USER    </h2>
            <p class="lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row contact-wrap">
            <div class="status alert alert-success" style="display: none"></div>

            <form id="form_user" name="form_user">
                <div class ="form-group">
                    <input type="hidden" name="alta_users" value="alta_users">
                </div>
                <div class="col-sm-5 col-sm-offset-1">
                    <div class="form-group">
                      <label for="Tipo">Tipo</label>
                      <table border="0">
                      <tr>
                       <td>
                         <select name="Tipo" id="Tipo">
                        <option value="Seleccione Tipo Vehiculo">Seleccione Tipo Vehiculo</option>
                        <option value="Coche">Coche</option>
                        <option value="Moto">Moto</option>
                        <option value="Furgoneta">Furgoneta</option>
                        <option value="Camion">Camion</option>
                      </td>
                      </tr>
                      </table>
                    </div>

                    <div class="form-group">
                      <label for="marca">Marca del Vehiculo</label>
                      <input name="marca" id="marca" type="text" placeholder="Marca del Vehiculo" value="" />
                        <div id="e_last_name"></div>
                    </div>

                    <div class="form-group">
                      <label for="matricula">Matricula</label>
                      <input name="matricula" id="matricula" type="text" placeholder="Matricula" value="" />
                        <div id="e_matricula"></div>
                    </div>

                    <div class="form-group">
                      <label for="Potencia">Potencia del vehiculo: </label>
                      <input name="Potencia" id="Potencia" type="text" placeholder="Potencia" value="" />
                        <div id="e_potencia"></div>
                    </div>
                    <div class="form-group">
                        <label>Año de compra del vehiculo: </label>
                        <input id="title_date" type="text" name="title_date" placeholder="mm/dd/yyyy" name="Fecha_compra">
                        <!--<input id="title_date" type="text" name="title_date" placeholder="mm/dd/yyyy" value=""  class="form-control" >-->
                        <div id="e_title_date"></div>
                    </div>

                    <div class="form-group">
                      <label for="Combustible">Combustible: </label>
                      Diesel<input name="Combustible" id="Combustible" type="radio" value="Diesel" checked />
                      Gasolina<input name="Combustible" id="Combustible" type="radio" value="Gasolina" />
                    </div>

                    <div class="form-group">
                      <label for="kilometraje">Kilometraje</label>
                      <input name="kilometraje" id="kilometraje" type="text" placeholder="kilometraje" value="" />
                        <div id="e_address"></div>
                    </div>
                    <div class="form-group">
                      <label for="Descripcion">Descripcion</label>
                      <textarea rows='6' name="Descripcion" id="Descripcion" type="text" placeholder="Descripcion" ></textarea>
                        <div id="e_descriptor"></div>
                    </div>
                    <table>
                      <tr><td>Origin:</td></tr>
                      <tr>
                          <td>Country: </td>
                      <td id="error_country">
                        <select name="country1" id="country1">
                      </select>
                      <div ></div>
                    </td>

                    <div ></div>
                  </td>
                      </tr>
                      <tr>
                        <td> </td>
                      </tr>
                      <tr>
                          <td>Province: </td>
                      <td id="error_province">
                        <select name="province" id="province">
                        <option selected>Select province</option>
                      </select>
                      <div></div>
                    </td>
                      </tr>
                      <tr>
                        <td> </td>
                      </tr>
                      <tr>
                          <td>City: </td>
                      <td id="error_city">
                        <select name="city" id="city">
                        <option selected>Select city</option>
                      </select>
                      <div></div>
                    </td>
                    </table>
                    <div class="form-group">
                        <label>Extras</label><br>
                        ABS  <input type="checkbox" name="interests[]" class="messageCheckbox" value="ABS">
                        DSC  <input type="checkbox" name="interests[]" class="messageCheckbox" value="DSC">
                        ESP  <input type="checkbox" name="interests[]" class="messageCheckbox" value="ESP">
                        Direccion_asistida  <input type="checkbox" name="interests[]" class="messageCheckbox" value="Direccion_asistida">
                        <div id="e_interests"></div>
                    </div>

                    <div class="form-group" id="progress">
                        <div id="bar"></div>
                        <div id="percent">0%</div >
                    </div>

                    <div class="msg"></div>
                    <br/>
                    <div id="dropzone" class="dropzone"></div>

                    <div class="form-group">
                        <button type="button" id="submit_user" name="submit_user" class="btn btn-primary btn-lg" value="submit">Submit Message</button>
                    </div>
                </div>
            </form>
        </div><!--/.row-->
    </div><!--/.container-->
</section><!--/#contact-page-->
<script type="text/javascript" src="  <?php echo USERS_JS_PATH ?>coches.js" ></script>
