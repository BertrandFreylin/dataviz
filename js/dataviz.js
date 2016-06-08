$(document).ready(function(){
	// Pas de cache sur les requête IMPORTANT !
	$.ajaxSetup({ cache: false });

	var load = false;
	/***
	On définit ici les fonctions de base qui vont nous servir à la récupération des données
	Je ne définis que le GET ici, mais il est possible d'utiliser POST pour récupérer ses données (on le verra dans un prochain TP)
	****/
	function getRequest(url, callback) {
		$.get(url, function(data) {
			data = $.parseJSON(data);
			return callback(data);
		});
	}

	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};



	function loadStats(user){
		/***************************************
		INFOS PROFIL
		****************************************/
		getRequest("webservices/infos_user.php?user="+user, function(data) {
			$(".name").text(data[0][1]);
			$.ajax({url: "webservices/image_user.php", data: {user: user}, success: function(result){
				$(".avatar").html("<img src='img/"+result[0]+"'>");
			}});
			$(".email").text(data[0][3]);
		});
		/***************************************
		GOOGLE CHARTS
		****************************************/

		getRequest("webservices/liste_amis_user.php?user="+user, function(data) {
			tab = [['Date', 'Amis', 'Total Amis']];
			var total = 0;
			//Double boucle pour compter le nombre d'amis par date
			for (var i = 0; i<data.length; i++) {
				var date = data[i][2];
				value = 0;
				for(var j = i; j<data.length; j++) {
					if(date == data[j][2]){         //Si on est déjà tombé sur la date, on ne rajoute pas de doublon dans le tableau
						value+=1;
						i = j;
					}
				}
				total += value;
				tab.push([date, value, total]);

			}
		});

		getRequest("webservices/liste_amis_user.php?user="+user, function(data) {
			tab2 = [['Date', 'Amis', 'Total Amis']];
			var total = 0;
			//Double boucle pour compter le nombre d'amis par date
			for (var i = 0; i<data.length; i++) {
				var date = data[i][2];
				value = 0;
				for(var j = i; j<data.length; j++) {
					if(date == data[j][2]){         //Si on est déjà tombé sur la date, on ne rajoute pas de doublon dans le tableau
						value+=1;
						i = j;
					}
				}
				total += value;
				tab2.push([date, value, total]);

			}
		});

		if(!load){
			google.charts.load('current', {'packages':['corechart']});
			load = true;
		}
		google.charts.setOnLoadCallback(drawChart1);
		google.charts.setOnLoadCallback(drawChart2);

		//Fonction pour dessiner le graphique des amis par date
		function drawChart1() {
			var data = google.visualization.arrayToDataTable( tab );

			var options = {
				title: 'Nombre d\'amis par date (google charts)',
				legend: { position: 'bottom' }
			};

			var chart = new google.visualization.LineChart(document.getElementById('exo1'));

			chart.draw(data, options);
		}

		function drawChart2() {
			var data = google.visualization.arrayToDataTable( tab2 );

			var options = {
				title: 'Nombre d\'amis par date (google charts)',
				legend: { position: 'bottom' }
			};

			var chart = new google.visualization.LineChart(document.getElementById('exo3'));

			chart.draw(data, options);
		}


		/***************************************
		JQPLOT
		****************************************/
		getRequest("webservices/notations_user.php?user="+user, function(data) {
            var tabJQ = [];
    		for (var i = 0; i<data.length; i++) {
    			var date = data[i][3];
    			var value = data[i][2];
                for(var j = i+1; j<data.length-1; j++) {                //Double boucle pour les cas où plusieurs notes sont données le même jour, dans ce cas, on fait la moyenne des notes données
                    if(date == data[j][3]){
                        value = (parseInt(value)+parseInt(data[j][2]))/2;
                        i = j;
                    }
                }
                tabJQ.push([date, parseInt(value)]);
    		}
            console.log(tabJQ);

			if(tabJQ.length > 0){
				var plot1 = $.jqplot('exo2', [tabJQ], {
					title:'évolution de la note (jqplot)',
					axes:{
						xaxis:{
							renderer:$.jqplot.DateAxisRenderer
						}
					},
					series:[{lineWidth:4, markerOptions:{style:'square'}}]
				});
				plot1.replot();
			}else {
				$('#exo2').html("NO DATA");
			}
		});
	}

	$.ajax({url: "webservices/liste_users.php", success: function(result){
		$("#res").html(result);
		$('#list-users').append($("<option></option>").text("").val(0));
		$.each(result, function() {
			$('#list-users').append(
				$("<option></option>").text(this.pseudo).val(this.id)
			);
		});
	}});

	$('#list-users').on('change', function(){
		loadStats($(this).val());
	});


});
