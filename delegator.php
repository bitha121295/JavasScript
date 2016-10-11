<?php
class DelegateA{
	function imprimirA(){
		echo "Imprimiendo delegado A";
		echo "<br>"; 
	
		
		}
	
	}
class DelegateB{
	function __construct(){


		echo "Imprimiendo delegado B";
		echo "<br>"; 
		
		}
	
	}
class Delegator extends DelegateA{

	function __construct(){
		
	$db= new DelegateB();
	
	}
}
	

$app = new Delegator();
$app->imprimirA();

?>
