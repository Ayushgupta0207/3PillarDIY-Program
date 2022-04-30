//1

const dog = {};

//2

console.log(dog);

//3

dog["name"] = "Sky";
dog["legs"] = 4;
dog["color"] = "white";
dog["bark"] = () => "woof woof";

//4

console.log(dog.name, dog.legs, dog.color, dog.bark());

//5

dog["breed"] = "Labrador";
dog["getDogInfo"] = () => {
  return `${dog.name} is a ${dog.color} ${dog.breed}`;
};

console.log(dog.getDogInfo());
