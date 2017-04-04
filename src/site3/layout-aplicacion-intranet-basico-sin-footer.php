<?php include("header.php"); ?>
<body class="detail layout-aplicacion basico">
  <?php include("main-nav-layout-apli-basico.php"); ?>

  <div class="container-fluid">

    <section class="row">
      <div class="container">
        <div class="row">
          <aside class="col-xs-12 col-sm-4 col-md-3 col-md-offset-1">
            <nav>
              <ul>
                <li>
                  <span><a href="#">Gestión de entregas</a></span>
                </li>
                <li class="active">
                  <span>Mantenimiento de solicitudes</span>
                  <ul>
                    <li class="active"><a href="#">Alta</a></li>
                    <li><a href="#">Baja</a></li>
                    <li><a href="#">Consulta</a></li>
                    <li><a href="#">Modificación</a></li>
                  </ul>
                </li>
                <li>
                  <span>Gestión de solicitudes</span>
                  <ul>
                    <li><a href="#">Pendiente documentación</a></li>
                    <li><a href="#">Pendientes de envío</a></li>
                    <li><a href="#">En proceso de inspección</a></li>
                    <li><a href="#">Inspeccionadas</a></li>
                  </ul>
                </li>
                <li>
                  <span><a href="#">Petición de información de solicitudes</a></span>
                </li>
                <li>
                  <span><a href="#">Localización de certificados</a></span>
                </li>
                <li>
                  <span><a href="#">Consulta de errores</a></span>
                </li>
              </ul>
            </nav>
          </aside>

          <article class="col-xs-12 col-sm-8 col-md-7">

            <ol class="breadcrumb">
              <li><a href="#">Mantenimiento de solicitudes</a></li>
              <li class="active">Alta</li>
            </ol>

            <div>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#datos-generales" aria-controls="datos-generales" role="tab" data-toggle="tab">Datos generales</a></li>
                <li role="presentation"><a href="#lineas" aria-controls="lineas" role="tab" data-toggle="tab">Líneas</a></li>
                <li role="presentation"><a href="#documentos" aria-controls="documentos" role="tab" data-toggle="tab">Documentos</a></li>
              </ul>

              <form class="form-horizontal">

                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="datos-generales">
                    <div class="row">
                        <div class="form-group col-md-4 col-sm-5">
                          <label for="nombre">Nombre</label>
                          <input type="text" class="form-control" id="nombre">
                        </div>
                        <div class="form-group col-md-8 col-sm-7">
                          <label for="apellidos">Apellidos</label>
                          <input type="text" class="form-control" id="apellidos">
                        </div>
                        <div class="form-group col-md-4">
                          <label for="email">Correo electrónico</label>
                          <input type="email" class="form-control" id="email">
                        </div>
                        <div class="form-group col-md-8">
                          <label for="tarjetaEci">Tarjeta ECI</label>
                          <div class="input-group">
                            <div class="input-group-addon">600833</div>
                            <input type="text" class="form-control" id="tarjetaEci">
                          </div>
                        </div>
                        <div class="form-group col-md-4 col-sm-6">
                          <label for="telefono">Teléfono</label>
                          <input type="tel" class="form-control" id="telefono">
                        </div>
                        <div class="form-group col-md-4 col-sm-6">
                          <label for="nacimiento">Fecha de nacimiento</label>
                          <input type="date" class="form-control" id="nacimiento">
                        </div>
                        <div class="form-group col-md-4 col-sm-6">
                          <label for="sexo">Sexo</label>
                          <select class="form-control" id="sexo">
                            <option value="" selected>Seleccionar...</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                          </select>
                        </div>
                        <div class="form-group col-md-4 col-sm-6">
                          <label for="idioma">Idioma</label>
                          <select class="form-control" id="idioma">
                            <option value="" selected>--Seleccionar--</option>
                            <option value="es">ESPAÑOL, CASTELLANO </option>
                            <option value="en">ENGLISH, UNITED KINGDOM</option>
                            <option value="en">ENGLISH, UNITED STATES</option>
                          </select>
                        </div>
                        <div class="form-group col-md-3 col-sm-4">
                          <label for="tipoDocumento">Tipo documento</label>
                          <select class="form-control" id="tipoDocumento">
                            <option value="" selected>Seleccionar...</option>
                            <option value="dni">DNI</option>
                            <option value="cif">CIF</option>
                            <option value="pasaporte">Pasaporte</option>
                          </select>
                        </div>
                        <div class="form-group col-md-5 col-sm-8">
                          <label for="documento">Documento</label>
                          <input type="text" class="form-control" id="documento">
                        </div>
                    </div>
                  </div>

                  <div role="tabpanel" class="tab-pane" id="lineas">
                    <ul class="list-group">
                      <li class="list-group-item"><span class="badge label-primary">14</span>Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Morbi leo risus</li>
                      <button type="button" class="list-group-item">Morbi leo risus</button>
                      <button type="button" class="list-group-item">Cras justo odio</button>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>

                  <div role="tabpanel" class="tab-pane" id="documentos">
                    <div class="row">
                      <div class="col-sm-12">
                        <table class="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th scope="row">Negocio</th>
                              <td>001</td>
                              <td>El Corte Inglés</td>
                            </tr>
                            <tr>
                              <th scope="row">Campaña</th>
                              <td>DIAMAD</td>
                              <td>DÍA DE LA MADRE</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group inline">
                <button type="submit" class="btn btn-default pull-left">Cancelar</button>
                <button type="submit" class="btn btn-primary pull-right">Enviar <span class="glyphicon glyphicon-send" aria-hidden="true"></span></button>
              </div>

            </form>

          </article>
        </div>
      </div>
    </section>


  <!-- Copyright Layout aplicacion intranet -->
	<div class="row copyright-footer">
		<div class="col-md-12">
			<p>&copy; <?php echo date('Y'); ?> El Corte Inglés, S. A.</p>
		</div>
	</div>

  </div>
</body>
</html>
