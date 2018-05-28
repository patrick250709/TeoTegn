<?php
$ini = parse_ini_file("php.ini"); //SKAL FLYTES TIL SIKKER LOCATION 

$host = $ini['host'];
$db   = $ini['db'];
$user = 'root';
$pass = '';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$opt = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES   => false,];
$pdo = new PDO($dsn, $user, $pass, $opt);


function searchDb($pdo,$searchString){
	$searchString = "%".$searchString."%";
	$stmt = $pdo->prepare('SELECT fileName,word,description FROM link WHERE word LIKE ? OR  description LIKE ?');
	$stmt->execute([$searchString, $searchString]);
	return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


$searchList = '';

if(isset($_GET['searchString'])){
	$search_string = $_GET['searchString'];
	if (strlen($search_string) >= 1 && $search_string !== ' ' && $search_string !== '') {
		//$searchList = '<tbody>';
		$searchList = '<ul>';
		try { 
		$search_string = searchDb($pdo, '%'.$_GET['searchString'].'%');
		foreach ($search_string as $row){
				$searchList .= '<li data-src=" '.$row['fileName'].' ">'.$row['word'].'filename:'.$row['fileName'].'</li>';
				//$searchList .='<tr>222</tr>';
				//$searchList .='<li>222</li>';
			}
		
		} catch(PDOException $ex) {
			 //handle me. 
			}
		//$searchList .= '</tbody>';
		$searchList .= '</ul>';
	}
}


echo($searchList);

?>