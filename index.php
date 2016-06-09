<!DOCTYPE html>
<html>
<head>
	<title>Data Vizualisation - TP1</title>
	<!-- Inclusion CSS (librairie + perso) -->
	<link rel="stylesheet" type="text/css" href="css/jquery.jqplot.min.css">
	<link rel="stylesheet" type="text/css" href="css/dataviz.css">

	<!-- Inclusion JS (librairie + scripts de création de graph) -->
	<script type="text/javascript" src="js/jquery.js"></script>

	<!--jqplot-->
	<script type="text/javascript" src="js/jquery.jqplot.min.js"></script>
	<script type="text/javascript" src="js/renderer/jqplot.dateAxisRenderer.js"></script>
	<script type="text/javascript" src="js/renderer/jqplot.barRenderer.js"></script>
	<script type="text/javascript" src="js/renderer/jqplot.CategoryAxisRenderer.js"></script>
	<!--Google charts-->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

	<script type="text/javascript" src="js/dataviz.js"></script>

	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
</head>
<body>
	<?php include ('structure/header.php'); ?>

	<div id="content">
		<div class="row">
			<div class="nav-selection">
				<ul class="tabs">
					<li class="tab col s3"><a class="active" selection="all">ALL</a></li>
					<li class="tab col s3 disabled"><a selection="exo1">Exo 1</a></li>
					<li class="tab col s3 disabled"><a selection="exo2">Exo 2</a></li>
					<li class="tab col s3 disabled"><a selection="exo3">Exo 3</a></li>
					<li class="tab col s3 disabled"><a selection="exo4">Exo 4</a></li>
				</ul>
			</div>
		</div>

		<div id="exo1" class="graph" style="display:none;"><p class="no-data">NO DATA</p></div>

		<div id="jqplot-graph-exo2" class="jqplot-graph graph"  style="display:none;">
			<div id="exo2" style="width: 90%; margin: auto; height: 470px;">
				<p class="no-data">NO DATA</p>
			</div>
		</div>

		<div id="exo3" class="graph"  style="display:none;"><p class="no-data">NO DATA</p></div>

		<div id="jqplot-graph-exo4"  class="jqplot-graph graph"  style="display:none;">
			<div id="exo4" style="width: 90%; margin: auto; height: 470px;">
				<p class="no-data">NO DATA</p>
			</div>
		</div>
	</div>
	<?php include ('structure/footer.php'); ?>
</body>
</html>
