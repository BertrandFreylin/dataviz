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
        <script type="text/javascript" src="js/renderer/jqplot.dateAxisRenderer.js"></script>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

		<script type="text/javascript" src="js/dataviz.js"></script>
	</head>
	<body>
		<?php include ('structure/header.php'); ?>
		<div id="header">
			<div><span class="avatar"></span></div>
			<select id="list-users"></select>
			<div id="user-name"><span class="name"></span></div>
		</div>
		<div id="content">
			<div id="exo1" class="graph"><p class="no-data">NO DATA</p></div>
			<div class="jqplot-graph graph">

            	<div id="exo2" style="width: 820px; height: 500px;">
					<p class="no-data">NO DATA</p>
				</div>
			</div>
            <div id="exo3" class="graph"><p class="no-data">NO DATA</p></div>
		</div>
		<?php include ('structure/footer.php'); ?>
	</body>
</html>
