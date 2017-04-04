<?php include("header.php"); ?>
<body class="profile">
	<?php include("main-nav-back.php"); ?>

	<div class="container-fluid">
		<section class="row">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="list profile">
							<li>
								<img src="./img/menu_user.png" alt="" class="img-circle">
								<div class="row">
									<div class="col-sm-6">
										<h4>Alexandra Peregrina Gonzalo</h4>
										<p>
											917015500 <br>
											<a href="#">alejandra_peregrina@elcorteingles.es</a>
										</p>
										<hr>
										<label for="idioma">Idioma:</label>
										<label class="radio">
											<input type="radio" name="idioma" id="idioma" value="es"> <span>Español</span>
										</label>
										<label class="radio">
											<input type="radio" name="idioma" id="idioma" value="en"> <span>English</span>
										</label>
										<label class="radio">
											<input type="radio" name="idioma" id="idioma" value="fr"> <span>Français</span>
										</label>
									</div>
									<div class="col-sm-6">
										<table>
											<tr>
												<td>Empresa</td>
												<td>El Corte Inglés S.A.</td>
											</tr>
											<tr>
												<td>Centro</td>
												<td>Tomás Bretón 53</td>
											</tr>
											<tr>
												<td>Departamento</td>
												<td>Oficina, Planificación, Tec. Inf. Opti.</td>
											</tr>
											<tr>
												<td>Planta</td>
												<td>3ª Central</td>
											</tr>
											<tr>
												<td>Extensión</td>
												<td>05 363 1640</td>
											</tr>
										</table>
									</div>
									<div class="col-sm-12">
										<div class="row">
												<hr>
												<button type="button" class="btn btn-default btn-lg">Editar perfil</button>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div class="container-fluid">
		<?php include("footer.php"); ?>
	</div>

</body>
</html>
