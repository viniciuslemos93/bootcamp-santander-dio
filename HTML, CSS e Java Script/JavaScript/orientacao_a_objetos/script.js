class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    //Sempre quando for um getter e setter colocar o _ na frente para que possa utilizar o nome no getter e setter.
    get saldo () {
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
    }
    
    sacar (valor) {
        if (valor > this._saldo) {
            return "Operacao negada"
        }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito) {
        super (agencia, numero)
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }
    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero)
        this.tipo = 'universitária';
    }

    sacar (valor) {
        if (valor < 500 ) {
            return "Operacão negada!";
        }
        this._saldo = this._saldo - valor;
    }
}