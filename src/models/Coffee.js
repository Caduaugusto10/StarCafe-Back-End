const { v4: uuid4 } = require('uuid');

class Coffee {
    constructor(produto, preço) {
    this.id = uuid4();
    this.produto = produto;
    this.preço = preço;
    }
}

module.exports = Coffee;