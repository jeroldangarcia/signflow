<!-- Modal Ayuda -->
<div class="modal fade" id="modalAyuda" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">¿Necesitas ayuda?</h4>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        <p>Duis leo.</p>
        <p><strong>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</strong></p>
        <p>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Aceptar</button>
      </div>
    </div>
  </div>
</div>


<!-- Nav -->
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="container-fluid">
		<div class="row">

			<div class="navbar-header top-bar">

				<!-- Topbar Izq RRSS -->
				<ul class="nav navbar-nav navbar-left">
					<li><a href="#"><i class="icon icon-network-facebook"></i></a></li>
					<li><a href="#"><i class="icon icon-twitter"></i></a></li>
					<li><a href="#"><i class="icon icon-network-instagram"></i></a></li>
					<li><a href="#"><i class="icon icon-network-linquedin"></i></a></li>
				</ul>

				<!-- Topbar Dch Auxiliar -->
				<ul class="nav navbar-nav navbar-right pull-right">
					<li><a href="#" data-toggle="modal" data-target="#modalAyuda"><i class="icon icon-question-circle"></i>¿Necesita ayuda?</a></li>
				</ul>

				<!-- Enlaces destacados -->
				<div class="promoted-links visible-md-block visible-lg-block pull-right">
					<a href="#">
						<img src="./img/apps_aula.png" alt="Aula@ECI">
					</a>
					<a href="#">
						<img src="./img/apps_sienet.png" alt="SIENET">
					</a>
				</div>

			</div>

			<!-- Back button -->
			<a href="portal.php" class="navbar-back icon-simple-nav-left hidden-md hidden-lg"></a>

			<!-- Nav Toggle - Responsive -->
			<button type="button" class="navbar-toggle hidden-sm hidden-xs">
				<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
			</button>

			<div class="navbar-header">
				<a class="navbar-brand hidden-sm hidden-xs" href="portal.php"></a>

				<!-- Nav Principal - Tabs -->
				<div class="main-navigation">
					<ul>
						<li>
							<a href="#" class="active">
								<i class="icon icon-home-footer"></i>
								<span class="md-only">información</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="icon icon-more-options-full"></i>
								<span class="md-only">aplicaciones</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="icon icon-personal-footer"></i>
								<span class="md-only">personas</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="icon icon-services"></i>
								<span class="md-only">servicios</span>
							</a>
						</li>
					</ul>
				</div>

				<!-- Login-->
				<div class="login">
					<div style="display: none;" class="login-trigger hidden-md hidden-lg">
						<a href="#">
							<i class="icon icon-private"></i>
							<span>Iniciar sesión</span>
						</a>
					</div>
					<form style="display: none;" class="form-inline hidden-xs hidden-sm">
						<div class="form-group">
							<label class="sr-only" for="exampleInputEmail3">Email</label>
							<input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
						</div>
						<div class="form-group">
							<label class="sr-only" for="exampleInputPassword3">Contraseña</label>
							<input type="password" class="form-control" id="exampleInputPassword3" placeholder="Contraseña">
						</div>
						<button type="submit" class="btn btn-primary">Entrar</button>
						<div>
							<div class="checkbox">
								<label>
									<input type="checkbox"> Recordar
								</label>
							</div>
							<a href="#">Recuperar contraseña</a>
						</div>
					</form>
				</div>

				<!-- Nav Dch + Buscador -->
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#" class="icon icon-mail-received"><span>299</span></a></li>
					<li><a href="#" class="icon icon-small-comment"><span>17</span></a></li>
					<li>
						<a href="#" class="icon icon-lupa-search-person"></a>
						<form action="#" id="search-main">
							<textarea name="search-main" placeholder="Busca aquí personas, noticias o eventos..." cols="1" rows="0"></textarea>
							<button class="btn spacing light">Buscar</button>
						</form>
					</li>
					<div class="profile">
						<div class="actions">
							<a href="./perfil.php" class="icon icon-job">
								<span>Mi perfil</span>
							</a>
							<a href="#" class="icon icon-private">
								<span>Cerrar sesión</span>
							</a>
						</div>
						<a href="#" class="user">
							<img src="./img/menu_user.png" alt="" class="img-circle">
							<span>Francisco Rovira</span>
						</a>
					</div>
				</ul>
			</div>

			<!-- Menu Lateral -->
			<div class="navbar-right-side navbar-collapse">

				<!-- Perfil Menu Lateral -->
				<div class="profile">
					<div class="actions">
						<a href="./perfil.php" class="icon icon-configuration"></a>
						<a href="#" class="icon icon-private"></a>
					</div>
					<a href="#" class="user">
						<img src="./img/menu_user.png" alt="" class="img-circle">
						<span>Francisco Rovira</span>
					</a>
				</div>

				<!-- Niveles Menu Lateral -->
				<ul>
					<li>
						<a href="#externo">Inicio</a>
					</li>
					<li>
						<a href="#">Productividad</a>

						<ul>
							<span>PRODUCTIVIDAD</span>
							<a href="#" class="back">Menú principal</a>
							<li>
								<a href="#">Correo Net0</a>

								<ul>
									<span>Correo Net0</span>
									<a href="#" class="back">
										<span>Menú principal</span>
										<span>Correo Net0</span>
									</a>
									<li>
										<a href="#">Configuración</a>

										<ul>
											<span>Configuración correo Net0</span>
											<a href="#" class="back">
												<span>...</span>
												<span>Correo Net0</span>
												<span>Configuración</span>
											</a>
											<li><a href="#externo">Bandeja de entrada</a></li>
											<li><a href="#externo">Bandeja de salida</a></li>
										</ul>
									</li>
									<li><a href="#externo">Estado</a></li>
									<li><a href="#externo">Desconectar</a></li>
								</ul>
							</li>
							<li><a href="#externo">Mi calendar</a></li>
							<li><a href="#externo">Mi profile</a></li>
							<li>
								<a href="#">Mi red</a>

								<ul>
									<span>Mi red</span>
									<a href="#" class="back">Volver</a>
									<li><a href="#externo">Configuración</a></li>
									<li><a href="#externo">Estado</a></li>
									<li><a href="#externo">Desconectar</a></li>
								</ul>
							</li>
							<li><a href="#externo">Mis actividades</a></li>
							<li><a href="#externo">Mis archivos</a></li>
						</ul>
					</li>
					<li>
						<a href="#test">Organización</a>
					</li>
					<li>
						<a href="#apps">Aplicaciones</a>
					</li>
					<li>
						<a href="#">Puesto de trabajo</a>

						<ul>
							<span>Puesto de trabajo</span>
							<a href="#" class="back">Volver</a>
							<li><a href="#externo">Configuración</a></li>
							<li><a href="#externostatus">Estado</a></li>
							<li><a href="#externo">Desconectar</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Go to top button -->
	<div class="hidden-xs hidden-sm top-link-block">
		<a href="#top">
			<i class="glyphicon glyphicon-chevron-up"></i>
		</a>
	</div>
</nav>
