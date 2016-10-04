//creando nuestras clases
function Perro(params){
	this.color = params.color || "Negro";
	this.raza = params.raza || "Labrador";
	this.nombre = params.nombre || "Buddy";
	
}
function Gato (params){
	this.color = params.color || "Blanco";
	this.cazador = params.cazador || true;
	this.nombre = params.nombre || "Misu";
	}
//creamos el factory
function AnimalFactory(){}
	

//lo extendemos a prototype
	AnimalFactory.prototype.createAnimal = function(params){
	if (params.tipo == 'perro')
	{
	return new Perro(params);
	
	} else if(params.tipo == 'gato') {
	return new Gato(params);
}};
//se crearon dos clases y utilzando la factoria ocn los elemntos

//crear instancia de la clase factory
var miFactory = new AnimalFactory();
//SI QUEREMOS UN CACHORRRO
var puppy = miFactory.createAnimal({tipo:"perro",raza:"Chihuaha",color:"Negro"});	
console.log(puppy.raza);

//para gato
var minino = miFactory.createAnimal({tipo:"gato",nombre:"Chelsea"});	
console.log(minino.nombre);
