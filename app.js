const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Pretty red"
});

const personSchema=new mongoose.Schema({
  name:String,
  age:Number
});

const Person=mongoose.model("Person",personSchema);

const person=new Person({
  name:"John",
  age:37
});

const kiwi=new Fruit({
  name:"kiwi",
  score:3,
  review:"good"

})
const orange=new Fruit({
  name:"orange ",
  score:3,
  review:"good"

})
const banana=new Fruit({
  name:"kiwi",
  score:3,
  review:"good"

})

Fruit.insertMany([kiwi,orange,banana]);

person.save();

fruit.save();