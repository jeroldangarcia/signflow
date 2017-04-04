<?php include("header.php"); ?>
<body class="detail">
	<?php include("main-nav-back.php"); ?>

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
								<ol class="breadcrumb hidden-xs hidden-sm">
		              <li>
		              	<a href="actualidad.php" class="navbar-back icon-arrow-left"> Volver</a>
		              </li>
		            </ol>

								<li class="active">
									<span>Otra sección</span>
									<ul>
										<li><a href="#">Correo NET0</a></li>
										<li><a href="#">Mi agenda</a></li>
										<li class="active">
											<a href="#">Mi red</a>
											<ul>
												<li><a href="#">Mis actividades</a></li>
												<li><a href="#">Mis archivos</a></li>
											</ul>
										</li>
										<li><a href="#">Mi perfil</a></li>
									</ul>
								</li>
								<li>
									<span>Encabezado de sección</span>
									<ul>
										<li><a href="#">Correo NET0</a></li>
										<li><a href="#">Mi agenda</a></li>
										<li><a href="#">Mi red</a></li>
										<li><a href="#">Mis actividades</a></li>
										<li><a href="#">Mis archivos</a></li>
										<li><a href="#">Mi perfil</a></li>
									</ul>
								</li>
							</ul>
						</nav>

						<ul>
							<li>Listado Normal</li>
							<li>Listado Normal</li>
							<li>Listado Normal</li>
						</ul>
					</aside>
					<article class="col-xs-12 col-sm-8 col-md-7">

						<ol class="breadcrumb">
						  <li><a href="actualidad.php">Actualidad</a></li>
						  <li><a href="actualidad.php">Ocio</a></li>
						  <li class="active">Titular de la noticia</li>
						</ol>

						<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat quidem voluptas dolorum aliquam repellendus.</h2>

						<div class="date">18 DIC 2015 · <a href="actualidad.php">#OCIO</a></div>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nam eos veritatis suscipit maxime minus similique perspiciatis accusamus, asperiores unde. Cumque impedit, officiis nihil sequi porro perferendis ipsum illum quod?
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nam eos veritatis suscipit maxime minus similique perspiciatis accusamus, asperiores unde. Cumque impedit, officiis nihil sequi porro perferendis ipsum illum quod?
						</p>
						<p>
							<img src="./img/news_2.jpg" alt="Imagen dentro del contenido">
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nam eos veritatis suscipit maxime minus similique perspiciatis accusamus, asperiores unde. Cumque impedit, officiis nihil sequi porro perferendis ipsum illum quod?
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nam eos veritatis suscipit maxime minus similique perspiciatis accusamus, asperiores unde. Cumque impedit, officiis nihil sequi porro perferendis ipsum illum quod?
						</p>

						<h2>Formulario de contacto</h2>
						<form action="#">
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Contraseña</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
							</div>
							<div class="checkbox">
								<label>
									<input type="checkbox"> Check me out
								</label>
							</div>
							<label class="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox1" value="option1"> 1
							</label>
							<label class="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox2" value="option2"> 2
							</label>
							<label class="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox3" value="option3"> 3
							</label>

							<label class="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> <span>1</span>
							</label>
							<label class="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> <span>2</span>
							</label>
							<label class="radio-inline">
								<input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> <span>3</span>
							</label>
							<button type="submit" class="btn-default">Submit</button>
						</form>
					</article>
				</div>
			</div>
		</section>

		<?php include("footer.php"); ?>
	</div>
</body>
</html>
