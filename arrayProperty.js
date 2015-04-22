//Just like you can add methods to your own constructor, you can also
//add methods and properties to built in classes in JavaScript like 
//Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance 
//of String can call reverse and reverse itself.
//code here

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.reverse = function(str1) {
		return str1.split("").reverse().join("");
	};
};

var user1 = new Person('Sean', 42);
var user2 = new Person('Brendan', 38);
var user3 = new Person('Kay', 67);


user1.reverse('abcdefghijklmnopqrstuvwxyz');


