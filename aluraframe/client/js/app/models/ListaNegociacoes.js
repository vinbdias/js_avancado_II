class ListaNegociacoes {

    constructor(contexto, capturador) {

        this._negociacoes = [];
        this._capturador = capturador;
        this._contexto = contexto;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        Reflect.apply(this._capturador, this._contexto, [this]);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    esvazia() {

        this._negociacoes = [];
        Reflect.apply(this._capturador, this._contexto, [this]);
    }
}
