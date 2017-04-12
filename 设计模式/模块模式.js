var Person = (function(){
	var name = 'ruoyu';
	function sayName(){
		console.log(name);
	}
	
	return {
		name: name,
		sayName: sayName
	}
})()