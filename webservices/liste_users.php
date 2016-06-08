<?php
	header('Content-Type: application/json');
	// Le tableau de résultat
	$result_request = array();

	/*
		On teste si le paramètre GET existe
		0 -> tous les utilisateurs
		id_unique -> un seul utilisateur
		plusieurs id séparés par des virgules -> plusieurs utilisateurs
	*/
	// Connexion à la BDD
	include("../bdd/connexion_bdd.php");

	$query = "SELECT id, pseudo, email FROM utilisateurs";

	$result = mysqli_query($conn, $query);

	while ($row = mysqli_fetch_array($result)) {
		$result_request[] = array('id' => intval($row[0]), 'pseudo' => $row[1], 'email' => $row[2]);
	}

	mysqli_free_result($result);

	// Déconnexion de la BDD
	include("../bdd/deconnexion_bdd.php");

	// Renvoyer le résultat au javascript
	echo json_encode($result_request);
