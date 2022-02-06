//Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move, реализовать и через прототипы и через классы.

// через классы
class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  Animal.move=true;

class cat extends Animal {
    constructor(name) {
        this.name = name;
    }
}

// через прототипы
 let animal={}
  animal.move = true;

  let cat ={}

  cat.__proto__ = animal;

