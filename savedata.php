<?php 

print "Hello world!"; 


$data = $_GET["result"];
$myfile = fopen('data.txt', 'a');
fwrite($myfile, $data);
fclose($myfile);

print "Hello world!"; 
?>