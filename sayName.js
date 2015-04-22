//Create a Person constructor that accepts name and age as parameters 
//and sets those properties accordingly in the Constructor.
//code here
function Person(name, age) {
	this.name = name;
	this.age = age;
};

//Now create three instances of Person with data you make up
//code here
var user1 = new Person('Sean', 42);
var user2 = new Person('Brendan', 38);
var user3 = new Person('Kay', 67);

//Now add a sayName method on your Person class that will alert the name 
//of whatever Person instance called it.
//code here
Person.prototype.sayName = function() {
	alert(this.name);
};

// call the function - Sean's Test

user1.sayName();


