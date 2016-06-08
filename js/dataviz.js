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
		QUESTION 1 : PIE CHART : Visite par marque
	****************************************/
	getRequest("webservices/liste_amis_user.php?user=4", function(data) {
		console.log(data);
		// var count = 0;
		var tab = [];
		for (var i = 0; i<data.length; i++) {
			var date = data[i][2];
			value = 0;
			for(var j = i; j<data.length; j++) {
				if(date == data[j][2]){
					value+=1;
				}
			}
			tab.push([date, value]);
		}
		console.log(tab);
	});
});
