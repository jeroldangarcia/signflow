<?php include("header.php"); ?>
<body class="detail">
	<?php include("main-nav.php"); ?>

	<div class="container-fluid">
		<section class="row">
			<div class="col-sm-">
				<!-- Imagen destacada -->
				<div class="featured-img">
					<img src="./img/slider-header.jpg" alt="Imagen destacada">
				</div>
			</div>
		</section>

		<section class="row">
			<div class="container">
				<div class="row">
					<aside class="col-xs-12 col-sm-4 col-md-3 col-md-offset-1">
						<nav>
							<ul>
								<li>
									<span>Clientes Extranjero</span>
									<ul>
										<li><a href="#">Registro Express</a></li>
										<li><a href="#">Consulta por documento</a></li>
										<li><a href="#">Extracción clientes con T.P.</a></li>
									</ul>
								</li>
								<li>
									<span>Clientes Tarjeta Club</span>
									<ul>
										<li><a href="#">Consulta de Clientes</a></li>
										<li><a href="#">Alta de clientes</a></li>
									</ul>
								</li>
								<li>
									<span>Clientes Familia Numerosa</span>
									<ul>
										<li><a href="#">Clientes Familia Numerosa</a></li>
									</ul>
								</li>
								<li>
									<span>Clientes Fidelización</span>
									<ul>
										<li><a href="#">Clientes Fidelización</a></li>
									</ul>
								</li>
								<li class="active">
									<span>Registro Básico de Clientes</span>
									<ul>
										<li class="active"><a href="#">Alta de clientes</a></li>
										<li><a href="#">Consulta de clientes</a></li>
									</ul>
								</li>
								<li>
									<span>Clientes Empresa Colaboradora</span>
									<ul>
										<li><a href="#">Gestión de clientes</a></li>
									</ul>
								</li>
							</ul>
						</nav>
					</aside>

					<article class="col-xs-12 col-sm-8 col-md-7">

						<ol class="breadcrumb">
							<li><a href="#">Registro básico de clientes</a></li>
							<li class="active">Alta</li>
						</ol>

						<form class="form-horizontal">

							<fieldset>
								<legend>Negocio y campaña</legend>
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
							</fieldset>

							<fieldset>
								<legend>Información de contacto</legend>
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
							</fieldset>

							<fieldset>
								<legend>Otros</legend>
								<div class="row">
									<div class="form-group col-sm-12">
										<div class="checkbox">
											<label><input type="checkbox">No aceptar publicidad</label>
										</div>
									</div>
									<div class="form-group col-md-6">
										<label for="comentario">Comentario</label>
										<textarea class="form-control" id="comentario" rows="5"></textarea>
									</div>
								</div>
							</fieldset>

							<button type="submit" class="btn btn-primary">Enviar</button>

						</form>
					</article>
				</div>
			</div>
		</section>

		<?php include("footer.php"); ?>
	</div>
</body>
</html>
