<?php include("header.php"); ?>
<body class="home">
	<?php include("main-nav.php"); ?>

	<div class="tabs-wrapper transform-0">
		<!-- Tab 1 - Info -->
		<div class="tab-content" id="informacion">
			<?php include("landing-informacion.php"); ?>
			<?php //include("landing-informacion-slider.php"); ?>
			<?php /*include("landing-informacion-80-20.php");*/ ?>
		</div>

		<!-- Tab 2 - Apps -->
		<div class="tab-content" id="aplicaciones">
			<?php include("landing-aplicaciones.php"); ?>
		</div>

		<!-- Tab 3 - Personal -->
		<div class="tab-content" id="personal">
			<?php include("landing-personal.php"); ?>
		</div>

		<!-- Tab 4 - Servicios -->
		<div class="tab-content" id="organizacion">
			<?php include("landing-organizacion.php"); ?>
		</div>
	</div>
</body>
</html>
