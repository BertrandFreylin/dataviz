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
		<div id="content">
            <div class="profile">
                <h1>Statistiques pour <span class="name"></span></h1>
                <div><span class="avatar"></span></div>
                <div>email: <span class="email"></span></div>
            </div>
            <div id="exo1" class="graph"></div>
			<div class="jqplot-graph graph">
            	<div id="exo2" style="width: 820px; height: 500px;"></div>
			</div>
            <div id="exo3" class="graph"></div>
		</div>
		<?php include ('structure/footer.php'); ?>
	</body>
</html>
