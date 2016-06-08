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

    var user = getUrlParameter("user");

	/***************************************
		INFOS PROFIL
	****************************************/
    getRequest("webservices/infos_user.php?user="+user, function(data) {
        $(".name").text(data[0][1]);
        $(".avatar").html("<img src='img/avatar"+data[0][4]+".jpg'>");
        $(".email").text(data[0][3]);
    });
	/***************************************
		GOOGLE CHARTS
	****************************************/

	// Initialiser le Google Chart
	google.charts.load('current', {'packages':['corechart']});


	// GRAPH 1

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
	google.charts.setOnLoadCallback(drawChart1);


	// GRAPH 2

	getRequest("webservices/messages_user.php?user="+user, function(data) {
		getRequest("webservices/liste_amis_user.php?user="+user, function(data_user) {
			var amis = 1;
			var pas_amis = 1;
			for (var i = 0; i<data.length; i++) {
				value = data[i];
				if($.inArray(value, data_user)){
					amis += 1;
				}else{
					pas_amis += 1;
				}
			};

			tab2 = [['Destinataire', 'Message'],
					['Amis',amis],
					['Pas Amis',pas_amis]];

			});	
	});
	
	function drawChart2() {
	
	var data = google.visualization.arrayToDataTable(tab2);

	var options = {
	  title: 'Pourcentage message'
	};

	var chart = new google.visualization.PieChart(document.getElementById('exo3'));

	chart.draw(data, options);
	}
	google.charts.setOnLoadCallback(drawChart2);

    /***************************************
		JQPLOT
	****************************************/
	getRequest("webservices/notations_user.php?user="+user, function(data) {
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
