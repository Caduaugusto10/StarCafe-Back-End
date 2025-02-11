class CoffeeList {
    constructor() {
        this.coffes = [];
    }

    addCoffee(coffee) {
        this.coffees.push(coffee);
    }

    getAllCoffees() {
        return this.coffees;
    }

    getCoffeeById(id) {
        const coffee = this.coffees.find(coffee => coffee.id == id);
        if (!coffee) {
            throw new Error("Café não encontrado!");
        }
        return coffee;
    }

    updateCoffee(id, updateCoffee) {
        const coffee = this.getCoffeeById(id);
        Object.assign(coffee, updateCoffee);
        return coffee;
    }

    deleteCoffee(id) {
        this.coffees = this.coffees.filter(coffee => coffee.id != id);
    }
}

module.exports = CoffeeList;