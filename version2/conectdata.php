<?php


 $server = "localhost";
 $username = "root";
 $password = "12345678";
 


 $myconection =mysql_connect($server,$username,$password);
 $data=mysql_query('CREATE DATABASE IF NOT EXISTS localstorg',$myconection);
 mysql_select_db('localstorg');
 $table="
CREATE TABLE IF NOT EXISTS eventlocal (
    action varchar(100),
    target varchar(300),
    date   varchar(500)  
)";
mysql_query($table);
 

 if(isset($_POST['data'])){
	   $events = json_decode($_POST['event'], true);
	if($events)
	{

	for($i = 0; $i < count($events); $i++){
		$splevent =array();
		$counter=0;
      foreach ($events[$i] as $key => $value) {
      	$splevent[$c]=$value;
          $counter++;
          }
mysql_query("Insert Into eventlocal values('$splevent[0]','$splevent[1]','$splevent[2]')");
      
}
  }
}
 
if(isset($_GET['db'])){
    $q=mysql_query("select * from eventlocal");
	$a=mysql_fetch_assoc($q);
if ($a){
    $rows = array();
    if($a->num_rows > 0){
     while($row = $a->fetch_assoc()){
      array_push($rows, $row);
     }
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}

 
 
?>