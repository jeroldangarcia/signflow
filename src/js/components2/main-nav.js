import React from 'react';

const MainNav = (props) => {
  return(

    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
    	<div className="container-fluid">
    		<div className="">
    			<div className="navbar-header top-bar">

    				<ul className="nav navbar-nav navbar-left">
    					<li><a href="#"><i className="icon icon-network-facebook"></i></a></li>
    					<li><a href="#"><i className="icon icon-twitter"></i></a></li>
    					<li><a href="#"><i className="icon icon-network-instagram"></i></a></li>
    					<li><a href="#"><i className="icon icon-network-linquedin"></i></a></li>
    				</ul>

    				<ul className="nav navbar-nav navbar-right pull-right">
    					<li><a href="#" data-toggle="modal" data-target="#modalAyuda"><i className="icon icon-question-circle"></i>¿Necesita ayuda?</a></li>
    				</ul>

    				<div className="promoted-links visible-md-block visible-lg-block pull-right">
    					<a href="#">
    						<img src="./img/apps_aula.png" alt="Aula@ECI"/>
    					</a>
    					<a href="#">
    						<img src="./img/apps_sienet.png" alt="SIENET"/>
    					</a>
    				</div>

    			</div>

    			<button type="button" className="navbar-toggle">
    				<span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
    			</button>

    			<div className="navbar-header">
    				<a className="navbar-brand0" href="portal.php"></a>

    				<div className="main-navigation">
    					<ul>
    						<li>
    							<a href="#" className="active">
    								<i className="icon icon-home-footer"></i>
    								<span className="md-only">información</span>
    							</a>
    						</li>
    						<li>
    							<a href="#">
    								<i className="icon icon-more-options-full"></i>
    								<span className="md-only">aplicaciones</span>
    							</a>
    						</li>
    						<li>
    							<a href="#">
    								<i className="icon icon-personal-footer"></i>
    								<span className="md-only">personas</span>
    							</a>
    						</li>
    						<li>
    							<a href="#">
    								<i className="icon icon-services"></i>
    								<span className="md-only">servicios</span>
    							</a>
    						</li>
    					</ul>
    				</div>

    				<div className="login">
    					<div style={{ display: "none" }} className="login-trigger hidden-md hidden-lg">
    						<a href="#">
    							<i className="icon icon-private"></i>
    							<span>Iniciar sesión</span>
    						</a>
    					</div>
    					<form style={{display: "none" }} className="form-inline hidden-xs hidden-sm">
    						<div className="form-group">
    							<label className="sr-only" for="exampleInputEmail3">Email</label>
    							<input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
    						</div>
    						<div className="form-group">
    							<label className="sr-only" for="exampleInputPassword3">Contraseña</label>
    							<input type="password" className="form-control" id="exampleInputPassword3" placeholder="Contraseña"/>
    						</div>
    						<button type="submit" className="btn btn-primary">Entrar</button>
    						<div>
    							<div className="checkbox">
    								<label>
    									<input type="checkbox"/> Recordar
    								</label>
    							</div>
    							<a href="#">Recuperar contraseña</a>
    						</div>
    					</form>
    				</div>

    				<ul className="nav navbar-nav navbar-right">
    					<li><a href="#" className="icon icon-mail-received"><span>299</span></a></li>
    					<li><a href="#" className="icon icon-small-comment"><span>17</span></a></li>
    					<li>
    						<a href="#" className="icon icon-lupa-search-person"></a>
    						<form action="#" id="search-main">
    							<textarea name="search-main" placeholder="Busca aquí personas, noticias o eventos..." cols="1" rows="0"></textarea>
    							<button className="btn spacing light">Buscar</button>
    						</form>
    					</li>
    					<div className="profile">
    						<div className="actions">
    							<a href="./perfil.php" className="icon icon-job">
    								<span>Mi perfil</span>
    							</a>
    							<a href="#" className="icon icon-private">
    								<span>Cerrar sesión</span>
    							</a>
    						</div>
    						<a href="#" className="user">
    							<img src="./img/menu_user.png" alt="" className="img-circle"/>
    							<span>Francisco Rovira</span>
    						</a>
    					</div>
    				</ul>
    			</div>

    			<div className="navbar-right-side navbar-collapse">

    				<div className="profile">
    					<div className="actions">
    						<a href="./perfil.php" className="icon icon-configuration"></a>
    						<a href="#" className="icon icon-private"></a>
    					</div>
    					<a href="#" className="user">
    						<img src="./img/menu_user.png" alt="" className="img-circle"/>
    						<span>Francisco Rovira</span>
    					</a>
    				</div>

    				<ul>
    					<li>
    						<a href="#externo">Inicio</a>
    					</li>
    					<li>
    						<a href="#">Productividad</a>

    						<ul>
    							<span>PRODUCTIVIDAD</span>
    							<a href="#" className="back">Menú principal</a>
    							<li>
    								<a href="#">Correo Net0</a>

    								<ul>
    									<span>Correo Net0</span>
    									<a href="#" className="back">
    										<span>Menú principal</span>
    										<span>Correo Net0</span>
    									</a>
    									<li>
    										<a href="#">Configuración</a>

    										<ul>
    											<span>Configuración correo Net0</span>
    											<a href="#" className="back">
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
    									<a href="#" className="back">Volver</a>
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
    							<a href="#" className="back">Volver</a>
    							<li><a href="#externo">Configuración</a></li>
    							<li><a href="#externostatus">Estado</a></li>
    							<li><a href="#externo">Desconectar</a></li>
    						</ul>
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>

    	<div className="hidden-xs hidden-sm top-link-block">
    		<a href="#top">
    			<i className="glyphicon glyphicon-chevron-up"></i>
    		</a>
    	</div>
    </nav>
  )
}

export default MainNav;
