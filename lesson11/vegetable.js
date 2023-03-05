// Шеф-повар. Определить иерархию овощей. Сделать салат. Посчитать калорийность. Провести сортировку овощей для салата на основе одного из параметров. Найти овощи в салате, соответствующие заданному диапазону параметров.

// Vegetable class
class Vegetable {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return `${this.name} is a type of vegetable`;
    }
}

class Cucumber extends Vegetable {
    constructor(name, color, calories) {
        super(name, calories);
        this.color = color;
    }
 
    getDescription() {
        return `${this.name} is a type of vegetable with a ${this.color} color.`
    }
}
 
class Tomato extends Vegetable {
    constructor(name, calories, shape) {
        super(name, calories);
        this.shape = shape;
    }
 
    getDescription() {
        return `{this.name} is a type of vegetable with a ${this.shape} shape.`
    }
}
 
class Potato extends Vegetable {
    constructor(name, calories, flavor) {
        super(name, calories);
        this.flavor = flavor;
    }
 
    getDescription() {
        return `${this.name} is a type of vegetable with a ${this.flavor} flavor.`
    }
}

// Salad class
class Salad {
    constructor() {
        this.ingredients = [];
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
        for (let ingredient of this.ingredients) {
            totalCalories += ingredient.calories;
        }
        return totalCalories;
    }

    sortIngredients(param) {
        this.ingredients.sort((a, b) => {
            return a[param] - b[param];
        });
    }

    filterIngredients(param, min, max) {
        return this.ingredients.filter((ingredient) => {
            return ingredient[param] >= min && ingredient[param] <= max;
        });
    }
}

