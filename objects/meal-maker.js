// In this project, you’ll use JavaScript to randomly create a three-course meal based on 
// what is available on a menu.
//  We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizer() {

    },
    set appetizer(appetizerIn) {

    },
    get mains() {

    },
    set mains(mainIn) {

    },
    get desserts() {

    },
    set desserts(dessertIn) {

    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: courseName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);

    },

    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName]
        let index = Math.floor(Math.random() * dishes.length)
        return index;
    },

    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer[name]}, ${main.name} and ${dessert.name}, The price is $${totalPrice}`

    }
}

menu.addDishToCourse('appetizers', 'flan', 90)
menu.addDishToCourse('desserts', 'helado', 90)
menu.addDishToCourse('mains', 'ñoquis', 90)
const meal = menu.generateRandomMeal();
console.log(meal)
