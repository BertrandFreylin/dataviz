$(document).ready(function(){
	// Pas de cache sur les requête IMPORTANT !
	$.ajaxSetup({ cache: false });

	/***
		On définit ici les fonctions de base qui vont nous servir à la récupération des données
		Je ne définis que le GET ici, mais il est possible d'utiliser POST pour récupérer ses données (on le verra dans un prochain TP)
	****/
	function getRequest(url, callback) {
		$.get(url, function(data) {
			data = $.parseJSON(data);
			callback(data);
		});
	}

	/***************************************
		QUESTION 1 : évolution des amis par date
	****************************************/
	getRequest("webservices/liste_amis_user.php?user=4", function(data) {
		var tab = [['Date', 'Amis', 'Total Amis']];
		console.log(data);
		var total =0;
		for (var i = 0; i<data.length; i++) {
			var date = data[i][2];
			value = 0;
			for(var j = i; j<data.length; j++) {
				if(date == data[j][2]){
					value+=1;
					i = j;
				}
			}
			total += value;
			tab.push([date, value, total]);

		}

		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
			var data = google.visualization.arrayToDataTable( tab );

			var options = {
			title: 'Nombre d\'amis par date (google charts)',
			legend: { position: 'bottom' }
			};

			var chart = new google.visualization.LineChart(document.getElementById('exo1'));

			chart.draw(data, options);
		}
	});

    /***************************************
		QUESTION 2 : évolution de la notation par date
        http://www.jqplot.com/examples/date-axes.php
	****************************************/
	getRequest("webservices/notations_user.php?user=4", function(data) {
		var tab = [];

		for (var i = 0; i<data.length; i++) {
			var date = data[i][3];
			var value = data[i][2];
			tab.push([date, parseInt(value)]);
		}

        var plot1 = $.jqplot('exo2', [tab], {
            title:'évolution de la note (jqplot)',
            axes:{
                xaxis:{
                    renderer:$.jqplot.DateAxisRenderer
                }
            },
            series:[{lineWidth:4, markerOptions:{style:'square'}}]
        });
	});

});
