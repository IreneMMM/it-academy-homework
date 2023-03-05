// Шеф-повар. Определить иерархию овощей. Сделать салат. Посчитать калорийность. Провести сортировку овощей для салата на основе одного из параметров. Найти овощи в салате, соответствующие заданному диапазону параметров.

// Vegetable class
class Vegetable {
    constructor(name, calories, color) {
        this.name = name;
        this.calories = calories;
        this.color = color;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return `${this.name} is a type of vegetable`;
    }
}

class Cucumber extends Vegetable {
    constructor(name, calories, color, size) {
        super(name, calories, color);
        this.size = size;
    }

    getDescription() {
        return `${this.name} is a type of vegetable with a ${this.color} color.`
    }
}

class Tomato extends Vegetable {
    constructor(name, calories, color, shape) {
        super(name, calories, color);
        this.shape = shape;
    }

    getDescription() {
        return `{this.name} is a type of vegetable with a ${this.shape} shape.`
    }
}

class Potato extends Vegetable {
    constructor(name, calories, color, flavor) {
        super(name, calories, color);
        this.flavor = flavor;
    }

    getDescription() {
        return `${this.name} is a type of vegetable with a ${this.flavor} flavor.`
    }
}

// Salad class
class Salad {
    constructor(ingredients) {
        this.ingredients = ingredients;
      }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    removeIngredient(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        if (index > -1) {
            this.ingredients.splice(index, 1);
        }
    }

    getCalories() {
        let totalCalories = 0;
        for(let key in this.ingredients) {
          totalCalories += this.ingredients[key].calories;
        }
        return totalCalories;
    }

    sortIngredients(param) {
        this.ingredients.sort((a, b) => {
            return a[param] - b[param];
        });
    }

    findVegetablesByCalories(minCalories, maxCalories) {
        return this.ingredients.filter(
            (vegetable) =>
            vegetable.calories >= minCalories && vegetable.calories <= maxCalories
        );
    }

    findVegetablesByColor(color) {
        return this.ingredients.filter(
            (vegetable) => 
            vegetable.color === color);
    }
}

const potato = new Potato('Potato', 50, 'Brown', 'sweet');
const cucumber = new Cucumber('Cucumber', 15, 'Green', 'little');
const tomato = new Tomato('Tomato', 5, 'Red', 'round');
const salad = new Salad([potato, cucumber, tomato]);

console.log(salad.getCalories()); 
console.log(salad.findVegetablesByCalories(0, 10));
console.log(salad.findVegetablesByColor('Brown'));
