<!DOCTYPE html>
<html>
	<head>
		<title>Data Vizualisation - TP1</title>
		<!-- Inclusion CSS (librairie + perso) -->
		<link rel="stylesheet" type="text/css" href="css/jquery.jqplot.min.css">
		<link rel="stylesheet" type="text/css" href="css/dataviz.css">

		<!-- Inclusion JS (librairie + scripts de création de graph) -->
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jquery.jqplot.min.js"></script>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

		<script type="text/javascript" src="js/dataviz.js"></script>
	</head>
	<body>
		<?php include ('structure/header.php'); ?>
		<div id="content">
    		<div id="curve_chart" style="width: 900px; height: 500px"></div>
		</div>
		<?php include ('structure/footer.php'); ?>
	</body>
</html>
