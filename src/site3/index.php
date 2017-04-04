<?php include("header.php"); ?>
<body>

  <div class="container">
    <h1>Directorio de enlaces <span><a class="btn btn-primary btn-lg" href="portal.php" role="button">Ir al portal</a></span></h1>
    <p class="lead">Listado de todos los enlaces del proyecto</p>

    <h2>Páginas</h2>
    <div class="row">
      <div class="col-lg-6">
        <h4><a href="portal.php">Página principal</a></h4>
        <p>Portal del proyecto</p>

        <h4><a href="dos-col.php">Página principal (2 columnas)</a></h4>
        <p>Página con diseño a dos columnas</p>

        <h4><a href="detail.php">Detalle</a></h4>
        <p>Detalle de un artículo</p>

        <h4><a href="tabla-avanzada.php">Tabla avanzada (formulario)</a></h4>
        <p>Ejemplo de formulario en tabla a tamaño completo</p>
      </div>
      <div class="col-lg-6">
        <h4><a href="perfil.php">Perfil</a></h4>
        <p>Perfil de usuario</p>

        <h4><a href="registro-basico-cliente.php">Formulario</a></h4>
        <p>Ejemplo de uso de formularios</p>

        <h4><a href="soivre.php">Formulario con tabs</a></h4>
        <p>Ejemplo de uso de formularios con tabs</p>

        <h4><a href="actualidad.php">Actualidad</a></h4>
        <p>Listado de noticias de actualidad</p>
      </div>
    </div>
    <h2>Componentes</h2>
    <div class="row">
      <div class="col-lg-6">
        <h4><a href="componentes">Componentes</a></h4>
        <p>Página con la descripción y ejemplos de uso de componentes</p>

        <h4><a href="componentes/componentes-css.php">Componentes CSS</a></h4>
        <p>Página con la descripción y ejemplos de uso de componentes CSS (botones, formularios...)</p>
      </div>
      <div class="col-lg-6">
        <h4><a href="componentes/componentes-javascript.php">Componentes JavaScript</a></h4>
        <p>Página con la descripción y ejemplos de uso de componentes JavaScript (tabs, modals...)</p>

        <h4><a href="fonts/Icomoon/demo.html">Icomoon</a></h4>
        <p>Listado de iconos personalizados (Icomoon)</p>
      </div>
    </div>

    <h2>Documentación</h2>
    <div class="row">
      <div class="col-lg-6">
        <h4><a href="./componentes_personalizados.pdf">Guía de componentes personalizados</a></h4>
        <p>Documento PDF correspondiente a la guía de componentes personalizados para la intranet NET0 de ECI.</p>
      </div>
      <div class="col-lg-6">
        <h4><a href="./eci_net0.zip">Archivo comprimido .ZIP</a></h4>
        <p>Archivos con fuentes del proyecto.</p>
      </div>
    </div>

	<h2>Layout aplicación intranet (no integrada)</h2>
    <div class="row">
      <div class="col-lg-6">
        <h4><a href="layout-aplicacion-intranet-basico.php">Layout básico</a></h4>
        <p>Layout con cabecera básica</p>
      </div>
      <div class="col-lg-6">
        <h4><a href="layout-aplicacion-intranet-basico-sin-footer.php">Layout básico (sin footer)</a></h4>
        <p>Layout con cabecera básica sin footer</p>
      </div>
      <div class="col-lg-6">
        <h4><a href="layout-aplicacion-intranet-personalizada.php">Layout personalizado</a></h4>
        <p>Layout con cabecera fotográfica personalizada</p>
      </div>
    </div>

    <footer class="footer">
      <p></p>
      <p>© 2016 NET0</p>
    </footer>

  </div>
</div>

<div class="container-fluid">
  <?php include("footer.php"); ?>
</div>
</body>
</html>
